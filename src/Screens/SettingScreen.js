import React, { Component } from 'react';
import { View ,Text,StyleSheet, StatusBar, Touchable, TouchableOpacity, Alert} from 'react-native';
import { Appbar ,Title} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DialogInput from 'react-native-dialog-input';

class SettingScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNameDialogVisible: false,
            isMobileDialogVisible: false,
            isEmailDialogVisible: false,
            isPasswordDialogVisible: false,
            name:"",
            password:"",
            email:"",
            number:""
        }
      }
          getName=(text)=>{
            this.setState({name:text})
            this.setState({isNameDialogVisible:false})
          }
          getNumber=(text)=>{
            this.setState({name:text})
            this.setState({isMobileDialogVisible:false})
          }
         
         
          getEmail=(text)=>{
            this.setState({name:text})
            this.setState({isEmailDialogVisible:false})
          }
render(){
    
    return(
        <View style={{...styles.container}}>
            <StatusBar backgroundColor='#003152' barStyle="light-content" />
            <Appbar.Header theme={{ colors:{ primary:"#003152",}}}
            style={{flexDirection:"row",alignItems:"center", paddingLeft:15}} >
               <TouchableOpacity
               onPress={() => this.props.navigation.goBack()}>
                    <FontAwesome5
                    name="angle-left"
                    color="white"
                    size={25}> </FontAwesome5>
                </TouchableOpacity> 
            <Title style={{color:"white",paddingLeft:20}}>
            {"Settings"}
            </Title>
            </Appbar.Header>
            <View style={{...styles.innerContainer}}>
                <View style={{flexDirection:"row",paddingBottom:24}}>
                <FontAwesome5
                    name="user-alt"
                    color="black"
                    size={25}
                    style={{paddingTop:8}}
                />
                <TouchableOpacity onPress={() => this.setState({isNameDialogVisible: true})}
               >
                    <Text style={{...styles.textView, fontWeight:"bold"}}>Change name</Text>
                    <Text style={{...styles.textView}}>Name</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",paddingBottom:24}}>
                <FontAwesome5 
                    name="phone-alt"
                    color="black"
                    size={25}
                    style={{paddingTop:8}}
                />
                <TouchableOpacity onPress={() => this.setState({isMobileDialogVisible: true})}>
                
                <Text style={{...styles.textView, fontWeight:"bold"}}>Change mobile number</Text>
                <Text style={{...styles.textView}}>mobile number</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",paddingBottom:24}}>
                <FontAwesome
                    name="envelope"
                    color="black"
                    size={25}
                    style={{paddingTop:8}}
                />
                <TouchableOpacity onPress={() => this.setState({isEmailDialogVisible: true})}>
                
                <Text style={{...styles.textView, fontWeight:"bold"}}>Change email</Text>
                <Text style={{...styles.textView}}>email</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",paddingBottom:24}}>
                <FontAwesome5
                    name="lock"
                    color="black"
                    size={25}
                    style={{}}
                />
                <TouchableOpacity >
                
                <Text style={{...styles.textView, fontWeight:"bold"}}>Change password</Text>
                
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.alertcontainer}>
            <DialogInput isDialogVisible={this.state.isNameDialogVisible}
            title={"Update your name"}
            hintInput ={"Enter your name"}
            submitInput={ (inputText) => this.getName(inputText)}
            closeDialog={() => this.setState({isNameDialogVisible: false})}>
            </DialogInput>

            <DialogInput isDialogVisible={this.state.isMobileDialogVisible}
            title={"Update your mobile number"}
            hintInput ={"Enter your mobile number"}
            submitInput={ (inputText) => this.getNumber(inputText)}
            closeDialog={() => this.setState({isMobileDialogVisible: false})}>
            </DialogInput>

            <DialogInput isDialogVisible={this.state.isEmailDialogVisible}
            title={"Update your email"}
            hintInput ={"Enter your email"}
            submitInput={ (inputText) => this.getEmail(inputText)}
            closeDialog={() => this.setState({isEmailDialogVisible: false})}>
            </DialogInput>

            </View>
      
        </View>
    );}
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f4f2ed'
    },
    innerContainer:{
        flex:0.7,
        paddingTop:40,
        paddingLeft:30,
        backgroundColor:"#f4f2ed",
        borderBottomColor:"black",
        borderBottomWidth:0.2,
       
       
    },
    textView:{
        paddingLeft:30,
        fontSize:15

    },
    alertcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
});