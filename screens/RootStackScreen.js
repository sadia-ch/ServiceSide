import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import PhoneAuthScreen from './PhoneAuthScreen';
import OTPScreen from './OTPScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SettingScreen from './SettingScreen';
import TabBar from './TabBar';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{
        headerShown: false
      }}
     >
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen}/>
        <RootStack.Screen name="OTPScreen" component={OTPScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="TabBar" component={TabBar}/>
        <RootStack.Screen name="SettingScreen" component={SettingScreen}/>

    </RootStack.Navigator>
);

export default RootStackScreen;