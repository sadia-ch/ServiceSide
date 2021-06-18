import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Auth} from '../Services';
import auth from '@react-native-firebase/auth';
const HomeScreen = ({navigation}) => {
    const [request, setRequest] = useState('');
    const [longitud, setLongitude] = useState('');
    useEffect(() => {
        
      });


      const acceptRequest = ()=>{
        Auth.acceptRequest()
        .then( Requests => setRequest(Requests))
        .catch( err => Alert.alert(err.code, err.message))
        console.log(request);
      }
      
    return(
        <View style = {{...styles.container}}>
         
            <TouchableOpacity onPress={acceptRequest}>
            <Text style={{...styles.s}}>
                home screen
            </Text>
            </TouchableOpacity>
        </View>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f1eee8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    s:{  
        fontSize:20
    }




});