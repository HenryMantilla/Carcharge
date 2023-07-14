import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from "react-native";
import React, { memo, useState } from 'react';
import axios from "axios";
import { Navigation } from '../types'

type Props = {
    navigation: Navigation;
};

const SignIn = ({ navigation } : Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        if(email === "" || password === ""){
            alert("Email or password is empty");
            return;
        }
        const resp = await axios.post("http://localhost:3000/user/signIn", {
            email,
            password
        });
        console.log(resp.data);
        alert("Sign In succesful");
        if(resp.data.success){
            navigation.navigate("CarScreen");
        }
    };
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/Login_icon.png")}/>
            <Text style={{marginBottom: 20, fontSize: 20}}>SignIn</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} value={email} onChangeText={text => setEmail(text)}
                autoCapitalize="none" autoCorrect={true} placeholder="Email" 
                placeholderTextColor="#afafaf" />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText} value={password} onChangeText={text => setPassword(text)}
                autoCapitalize="none" secureTextEntry={true} placeholder="Password" 
                placeholderTextColor="#afafaf" maxLength={64}/>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.login_button}>
                <Text style={styles.loginText}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>
                    ¿No tiene cuenta?.
                    <Text style={{color: "#ffa65c", fontWeight: 'bold'}}
                        onPress={() => navigation.navigate("SignUp")}>SignUp
                    </Text> 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>
                    <Text style={{color: "#ffa65c", fontWeight: 'bold'}}>
                        ¿Olvido su contraseña?
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
    login_button:{
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
        padding: 12,
        marginLeft: 20,
    },
});

export default memo(SignIn);