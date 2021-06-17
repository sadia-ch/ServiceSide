import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import PhoneAuthScreen from '../Screens/PhoneAuthScreen';
import OTPScreen from '../Screens/OTPScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';


const AuthStack = createStackNavigator();

const AuthNavigator = ({navigation}) => (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <AuthStack.Screen name="SplashScreen" component={SplashScreen}/>
        <AuthStack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen}/>
        <AuthStack.Screen name="OTPScreen" component={OTPScreen}/>
        <AuthStack.Screen name="SignInScreen" component={SignInScreen}/>
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen}/>

    </AuthStack.Navigator>
);

export default AuthNavigator;
//