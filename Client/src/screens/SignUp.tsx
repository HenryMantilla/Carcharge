import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from "react-native";
import React, {memo} from "react";
import axios from "axios";
import { Navigation } from '../types'

type Props = {
    navigation: Navigation;
}

const SignUp = ({ navigation } : Props) => {
    const [firstName, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [identification, setIdentification] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = async () => {
        if(email === "" || password === ""){
            alert("Email or password is empty");
            return;
        }
        const resp = await axios.post("http://localhost:3000/user/signUp", {
            firstName,
            lastName,
            identification,
            email,
            password
        });
        console.log(resp.data)
        alert("Login success");
    };
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/Login_icon.png")}/>
            <Text style={{marginBottom: 20, fontSize: 20}}>SignUp</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} autoCapitalize="none" autoCorrect={true} 
                placeholder="Nombre" placeholderTextColor="#afafaf"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} autoCapitalize="none" autoCorrect={true} 
                placeholder="Apellido" placeholderTextColor="#afafaf"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} autoCapitalize="none" autoCorrect={true} 
                placeholder="Identificación" placeholderTextColor="#afafaf"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} autoCapitalize="none" autoCorrect={true} 
                placeholder="Email" placeholderTextColor="#afafaf"/>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} autoCapitalize="none" secureTextEntry={true} 
                placeholder="Password" placeholderTextColor="#afafaf" maxLength={64}/>
            </View>
            <TouchableOpacity style={styles.signup_button}>
                <Text style={styles.loginText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>
                    ¿Ya tiene una cuenta?.
                    <Text style={{color: "#ffa65c", fontWeight: 'bold'}}>
                        Iniciar Sesión
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image:{
        alignSelf: 'center',
        marginBottom: 50,
        width: 60,
        height: 60,
    },

    inputView:{
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom:20,
        //paddingLeft: 20,
        justifyContent: "center",
    },
    inputText:{
        height: 50,
        marginLeft: 20,
        outlineStyle: 'none',
    },
    forgot:{
        height: 20,
        marginTop: 15,
    },
    signup_button:{
        width: "80%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffa65c",
    },
    loginText:{
        height: 30,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
});

export default memo(SignUp);