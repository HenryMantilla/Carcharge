import { Navigation } from '../types';
import Background from '../components/Background';
import { StyleSheet ,Text, TouchableOpacity } from 'react-native';
import { memo } from 'react';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <Background>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signupText}>SignUp</Text>
      </TouchableOpacity>
    </Background>
)

const styles = StyleSheet.create({
  loginButton:{
    width:"80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    height: 40,
    alignItems: "center",
    backgroundColor: "#915118",
    marginBottom: 20,
  },
  loginText:{
    height: 30,
    flex: 1,
    padding: 12,
    marginLeft: 20,
    color: "#fff",
    fontWeight: 'bold',
  },
  signupButton:{
    width:"80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    height: 40,
    alignItems: "center",
    backgroundColor: "#915118",
  },
  signupText:{
    height: 30,
    flex: 1,
    padding: 12,
    marginLeft: 20,
    color: "#fff",
    fontWeight: 'bold',
  },
})

export default memo(HomeScreen);