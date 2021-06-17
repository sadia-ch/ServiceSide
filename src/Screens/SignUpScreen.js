import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ExtraSmallHeader from '../Components/ExtraSmallHeader';
import {Auth} from '../Services';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        email: '',
        confirm_password: '',
        check_EmailImputChange: false,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        check_username:true
    });

    const textInputChange = (val) => {
        if( val.trim().length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                check_username:true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                check_username:false
            });
        }
    }

    const EmailInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                isValidUser: false
            });
        }
    }
    const handleValidUser = (val) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(val) === true) {
            setData({
                ...data,
                email: val,
                check_EmailImputChange: true,
                isValidUser: true
            });
        }
        else {
            setData({
                ...data,
                email: val,
                check_EmailImputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const saveUser =() =>
    {
        if(data.username.length === 0 || data.email.length === 0 || data.password.length === 0 || data.confirm_password === 0)
        {
            Alert.alert('Error', 'Please enter all fields');
            return ;
        }
        else if((data.password === data.confirm_password) && data.isValidUser)
        {
            Auth.signUp(data.username, data.email, data.password);
            return ;
        }
        else{
            Alert.alert('Error', "Password and confirm password does not match");
            return ;
        }
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#003152' barStyle="light-content"/>
        <View style={styles.header}>
            <ExtraSmallHeader/>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=> textInputChange(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
                
            </View>
            { data.check_username ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>empty field.</Text>
            </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => EmailInputChange(val)}
                    onEndEditing = {(e) => handleValidUser(e.nativeEvent.text)}
                />
                {data.check_EmailImputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>wrong email.</Text>
            </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e) => handlePasswordChange(e.nativeEvent.text)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>empty field</Text>
            </Animatable.View>
            }
            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                    onEndEditing={(e) => handleConfirmPasswordChange(e.nativeEvent.text)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidConfirmPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>empty field</Text>
            </Animatable.View>
            }
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>saveUser()}
                >
                <LinearGradient
                    colors={['#00929F', '#014961']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f1eee8'
    },
    header: {
        flex: 1,
        
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal:20,
        paddingTop:30
    },
    footer: {
        flex: 3.3,
        backgroundColor: '#f1eee8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#CDEBEB'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    color_textPrivate: {
        color: 'grey'
    }
  });