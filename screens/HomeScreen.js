import React from 'react';
import { 
    View, 
    StyleSheet ,Text

} from 'react-native';

const HomeScreen = ({navigation}) => {


    return(
        <View style = {{...styles.container}}>
         
            <Text style={{...styles.s}}>
                home screen
            </Text>
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