import React, { Component, useState,  props,route, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    Keyboard, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';
import SmallHeader from './SmallHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, HEIGHT } = Dimensions.get("window")
import * as Animatable from 'react-native-animatable';
const DismissKeyboard = ({children})=>{
    return(<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>);
    
  };

  class  OTPScreen extends Component {
    
    constructor(props) {
        super(props);
    
        this.state ={
            code: '',
            confirm : null
            
        }
    }
    render(){
       
    const  OtpVerify = async () => {
        //this.state.confirm = route.params;
       // try {
        //   let data =  confirm.confirm(number);
        //   console.log("data", data);
       // } catch (error) {
       // console.log('Invalid code.');
        //ToastAndroid.show('Invalid code.',ToastAndroid.SHORT)
       // }
       
       //if verified 
       this.props.navigation.navigate('SignInScreen');
    }
    const sendCodeAgain = async ()=>
    {

    }
    return (
        <DismissKeyboard>
            <View style={{...styles.container}}>
                <KeyboardAvoidingView keyboardVerticalOffset={50}
                style={{...styles.containerAvoidingView}}>
                    <View >
                        <SmallHeader/>
                    </View>
                    
                    <View style={{...styles.inputContainer}}>
                        <TextInput style={{...styles.inputText}}
                        placeholder='Enter 6 digit OTP'
                        underlineColorAndroid={'transparent'}
                        keyboardType="number-pad"
                        onChangeText={(value) => this.setState({code:value})}
                        maxLength={6}
                        autoFocus={true}/>
                    </View>
                    <Animatable.View animation= "bounceIn"style={{...styles.viewButton}}>
                        <TouchableOpacity
                        onPress={OtpVerify}
                        disabled={ this.state.code.length == 6 ? false : true}
                        style={[styles.buttonContinue,{backgroundColor:this.state.code.length == 6 ? '#014961' : 'grey'}]}>
                            <Text style={{...styles.buttonText}}>
                            Continue</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={22}
                            />
                        </TouchableOpacity>
                    </Animatable.View>
                    <View style={{alignItems:'center', paddingBottom:60}}>
                        <TouchableOpacity onPress={sendCodeAgain}> 
                            <Text style={{...styles.sendCodeText}}>
                                Send Code
                            </Text>
                        </TouchableOpacity>
                    </View>
               
                </KeyboardAvoidingView>
            </View>
        </DismissKeyboard>
    );
}
}
export default OTPScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    containerAvoidingView: {
        flex: 1, 
        backgroundColor: '#f1eee8',

    },
    inputContainer:{
        alignItems:'center',
        marginTop:290,
    },

    inputText:{
        marginBottom: 20,
        width: '85%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize:17
    },
    buttonContinue: {
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius:10,
        flexDirection: 'row'
    },
    viewButton:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:20,
        alignItems:'center',
        
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        
    },
    sendCodeText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#014961'
    }
})