import React, {useState,props,ref, Component, } from 'react';
import { 
    View, 
    Text, 
    StyleSheet ,
    TouchableWithoutFeedback,
    Keyboard, 
    KeyboardAvoidingView
    
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import SmallHeader from '../Components/SmallHeader';
import * as Animatable from 'react-native-animatable';
import { SCREEN_HEIGHT } from "../../Constants";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const DismissKeyboard = ({children})=>{
  return(<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
  {children}
</TouchableWithoutFeedback>);
  
};


const PhoneAuthScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState('');

   const asignInWithPhoneNumber = ()=> {
      navigation.navigate('OTPScreen',{ confirm: 1})
  }
  async function signInWithPhoneNumber() {
    
    const confirmation = await auth().signInWithPhoneNumber('+92'+phoneNumber);
    setConfirm(confirmation);
    console.log(confirm);
    navigation.navigate('OTPScreen',{ confirm: confirm})
  }
  

      return(

    <DismissKeyboard>
      <View  style={{...styles.container}}>
      
        <KeyboardAvoidingView keyboardVerticalOffset={50}
        style={{...styles.containerAvoidingView}}>
          <View>
          <SmallHeader/>
          </View>
          <View style={{ alignItems:'center',}}>
          <Text style={{...styles.text}}>
            Please enter your mobile number
          </Text>

          <View style={{...styles.inputContainer}, {borderBottomColor:'black'}}>
              <View style={{...styles.openDialogView}}
               >
                <Text style={{fontSize:16,}} >
                  +92  
                </Text>
                <TextInput 
                  onChangeText = {(text) => setPhoneNumber(text)}
                  style={styles.phoneInput}
                  placeholder = "123 456 7890"
                  maxLength={10}
                  autoFocus={true}
                  keyboardType='number-pad'
                >
              </TextInput>
              </View>     
          </View>
          
          </View>
          <Animatable.View animation= "bounceIn" style={{...styles.viewButton}}>
              <TouchableOpacity  
                onPress={()=>asignInWithPhoneNumber()}
                disabled={phoneNumber.length == 10 ?false :true}>
                  <View  style={[styles.btnContinue, {backgroundColor:phoneNumber.length == 10 ? '#014961' : 'grey'}]} >
                    <Text style={{...styles.buttonText}}>
                      Continue
                    </Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={22}
                    />
                  </View>
              </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>

    );
  
};

export  default PhoneAuthScreen;
const height_logo = SCREEN_HEIGHT * 0.30;
const styles = StyleSheet.create({
   
    container:{
      flex:1,
    },
    containerAvoidingView: {
        flex: 1, 
        backgroundColor: '#f1eee8',
    },
    text:{
      marginBottom:30,
      marginTop:290,
      fontSize:17,
    },
  
    inputContainer:{
      flexDirection:'row',
      paddingHorizontal:12,
      borderRadius:70,
      alignItems:'center',
      borderWidth:1,
    },

    openDialogView:{
      flexDirection:'row',
      alignItems:'center',
      width: '85%',
      borderBottomWidth: 1,
      
      paddingStart:20,
      paddingEnd:170
    },

    phoneInput:{
      marginLeft:5,
      flexDirection:'row',
      height:50,
      fontSize:17
    },

    viewButton:{
      flex:1,
      justifyContent:'flex-end',
      paddingBottom:50,
      alignItems:'center',
    },

    buttonText:{
      color:'white',
      alignItems:'center',
      justifyContent:'center',
      fontWeight: 'bold'
    },
    
    btnContinue:{
      width:150,
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#3B9C9C',
      flexDirection: 'row'
    },
    
  });