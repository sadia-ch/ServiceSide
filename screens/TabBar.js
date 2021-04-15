import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

  
const Tab = createMaterialBottomTabNavigator(
  
);

const TabBar = ({navigation}) => (
    <Tab.Navigator
      initialRouteName="Home"
     activeColor="#003152"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
        options={{ 
          tabBarLabel: 'Home', 
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26}/>  
          ),
          
         
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#003152',
          
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
);

export default TabBar;
