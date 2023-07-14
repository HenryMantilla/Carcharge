import Routes from './src/index';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    //<SignIn/>
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
      <Routes/> 
  </NavigationContainer>
  );
}

//<Routes/> Beacuse the function exported is called routes

