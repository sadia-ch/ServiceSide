import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import SplashScreen from '../SplashScreen';

import SettingScreen from '../Screens/SettingScreen';
import TabBar from '../Screens/TabBar';

const AppStack = createStackNavigator();

const AppNavigator = ({navigation}) => (
    <AppStack.Navigator screenOptions={{
        headerShown: false
      }}>

        <AppStack.Screen name="TabBar" component={TabBar}/>
        <AppStack.Screen name="SettingScreen" component={SettingScreen}/>

    </AppStack.Navigator>
);

export default AppNavigator;

// 
//<RootStack.Screen name="ProfileScreen" component={ProfileScreen}/>