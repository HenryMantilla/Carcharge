import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import CarScreen from './screens/CarScreen';

import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
type StackNavigation = {
  HomeScreen : undefined;
  SignIn : undefined;
  SignUp : undefined;
  CarScreen : undefined
};

//Mark by Henry change initialRouteName to 'Home'

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export default function Routes() {
  return (
    <Stack.Navigator initialRouteName='CarScreen'> 
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="CarScreen"
      component={CarScreen}
      options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}