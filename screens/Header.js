import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import Wavyheader from './Components/Wavyheader';
const Header = () => {
  return(
    <View>
      <Wavyheader
        customStyles={styles.svgCurve}
        customHeight={380}
        customTop={245}
        customBgColor='#008081'    
        customWavePattern="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,90.7C672,85,768,139,864,186.7C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"  
      />

      <Wavyheader
        customStyles={styles.svgCurve}
        customHeight={370}
        customTop={240}
        customBgColor='#003152'    
        customWavePattern="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,90.7C672,85,768,139,864,186.7C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"  
      />
      </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  svgCurve: {
    height:90,
    position: 'absolute',
    width: Dimensions.get('window').width
  },

});