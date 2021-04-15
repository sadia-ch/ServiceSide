import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ProfileScreen =({navigation})=>{
return(
    <View style={{...styles.container}}>
        <StatusBar backgroundColor="darkgray" barStyle="light-content"/>
      <View style={{...styles.nameView}}>
          <Text style={{...styles.nameText}}>FirstName L.</Text>
      </View>
      <View style={{...styles.secondView}}>
          <View style={{...styles.profileView}}>
          <FontAwesome 
                    name="user-o"
                    color="black"
                    size={25}
                    style={{top:8}}
                />
                <Text style={{paddingLeft:20, fontSize:15, fontWeight:"bold"}}>
                    moblie number
                    <Text style={{fontWeight:"normal"}}>{"\n"}email</Text>
                </Text>

            <TouchableOpacity
            onPress={() =>navigation.navigate('SettingScreen')} style={{position:"absolute",left: 280,paddingTop:8, flexDirection:"row"}}>
                <Text>
                    Edit
                </Text>
                <FontAwesome
                name="angle-right"
                color="gray"
                size={19}
                style={{paddingLeft:25}}>
                </FontAwesome>
            </TouchableOpacity>
          </View>
          <View style={{...styles.signOutView}}>
          <FontAwesome 
                    name="sign-out"
                    color="black"
                    size={25}
                    
                />
          <Text style={{paddingLeft:20, fontSize:15}}>
                Sign Out    
           </Text>
           <TouchableOpacity
             >
               
                <FontAwesome
                name="angle-right"
                color="gray"
                size={19}
                style={{position:"absolute",left:227 }}>
                </FontAwesome>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{...styles.thirdView}}>
          <Text style={{...styles.termsText}}>
              Terms and conditions
          </Text>
      </View>
      <View style={{...styles.forthView}}></View>
    </View>
);
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f4f2ed'
    },
    nameView:{
        flex:0.6,
        backgroundColor:"#f4f2ed",
        borderBottomWidth:0.2,
        borderColor:"black"
    },
    nameText:{
        fontSize:36,
        fontWeight:'bold',
        fontFamily:"sans-serif-light",
        position:"absolute",
        top:100,
        left:30

    },
    secondView:{
        flex:0.4,
        backgroundColor:"#f4f2ed",
        borderBottomWidth:0.2,
        borderColor:"black",
    },
    thirdView:{
        flex:0.7,
        backgroundColor:"#f4f2ed",
        
        alignItems:"center",
       
    },
   forthView:{
       flex:0.7,
        backgroundColor:"#f4f2ed",
      
   },
   profileView:{
        position:"absolute",
        top:15,
        left:30,
        flexDirection:"row"

   },
    signOutView:{
    position:"absolute",
    top:76,
    left:30,
    flexDirection:"row"
   },
   termsText:
   {
       paddingTop:30,
        fontSize:14,
        fontWeight:"bold"
   }

});