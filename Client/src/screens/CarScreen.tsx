import { memo } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Navigation } from '../types';
import { Entypo, Ionicons } from '@expo/vector-icons';
import  FlatListStations  from '../components/FlatListStations';

type Props = {
    navigation: Navigation;
};

const CarScreen = ({ navigation } : Props) => {
    return(
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.topText}>Car Charge App</Text>
                </View>
                <Image style={styles.image} source={require("../../assets/userPhoto.jpg")} />
            </View>
            <Text style={styles.yourCar}>Tu Garaje</Text>
            <View style={styles.carImageContainer}>
                <View style={styles.carDetailsContainer}>
                    <Text style={styles.carDetails}>Hyundai Kona</Text>
                    <Text style={styles.carDetails}><Entypo name="gauge" size={22} color="white" />  180</Text>
                    <Text style={styles.carChargeDetails}>Km restantes</Text>
                    <Text style={styles.carDetails}><Ionicons name="battery-charging-outline" size={22} color="white" />  80%</Text>
                    <Text style={styles.carChargeDetails}>Cargado</Text>
                </View>
                <Image style={styles.mainContainerImage} source={require("../../assets/carContainer.png")} />
            </View>
            <Text style={styles.nearStations}>Estaciones cercanas</Text>
            <View>
                <FlatListStations />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'space-between',
    },
    topText : {
        fontSize: 26,
        fontWeight: 'bold',
        paddingTop: 20,
        marginLeft: 8,
    },
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
    },
    image : {
        height: 50,
        width: 50,
        borderRadius: 40,
        top: 10,
    },
    yourCar : {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: "#414a4c",
        marginTop: 20,
        marginLeft: 20,
    },
    carImageContainer : {
        //height: "20%",
        //width: "93%",
        flex: 1,
        margin: 12,
        paddingVertical: 12,
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: "#3AA8C1",
    },
    mainContainerImage : {
        height: "100%",
        width: "100%",
        marginTop: 5,
        resizeMode: 'contain',
        marginLeft: 100,
        position: 'absolute',
    },
    nearStations : {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: "#414a4c",
        marginTop: 10,
        marginLeft: 20,
    },
    carDetails : {
        fontWeight: 'bold',
        fontSize: 15.0,
        color: "#fff",
        marginTop: 15,
        marginBottom: 4,
        marginLeft: 7,
        alignSelf: 'flex-start',
    },
    carChargeDetails:{
        alignSelf: 'flex-start',
        fontSize: 14.0,
        marginLeft: 7,
        color: "#fff",
    },
    carDetailsContainer : {
        maxWidth: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})

export default memo(CarScreen);