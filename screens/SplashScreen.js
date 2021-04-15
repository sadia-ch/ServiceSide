import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { SCREEN_HEIGHT, LOGO_HEIGHT_POSITION } from "../Constants";
import Header from './Header'
const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        
      <View style={{...styles.container}}>
          <StatusBar backgroundColor='#003152' barStyle="light-content"/>
          <View>
                <Header/>
          </View>
        <View style={{...styles.headerview}}>
            
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={{...styles.logo}}
            
            />
        </View>
        <Animatable.View 
            style={{...styles.footer}}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with everyone!</Text>
            <Text style={{...styles.text}}>Sign in with account</Text>
            <View style={{...styles.button}}>
            <TouchableOpacity onPress={()=>navigation.navigate('PhoneAuthScreen')}>
                <LinearGradient
                    colors={['#00929F', '#014961']}
                    style={{...styles.signIn}}
                >
                    <Text style={{...styles.textSign}}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;


const height_logo = SCREEN_HEIGHT * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f1eee8'
  },
  headerview: {
      height:LOGO_HEIGHT_POSITION,
      justifyContent: 'center',
      alignItems: 'center',
      
    
  },
  footer: {
        
      backgroundColor: '#f1eee8',
      //position:'absolute',
      bottom:-10,
      paddingVertical: 30,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontSize: 15,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 20,
      

  },
  signIn: {
      width: 150,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
     // fontWeight: 'bold'
     fontSize: 15
  }
});