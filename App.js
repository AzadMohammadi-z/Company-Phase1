import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import MapView   from 'react-native-maps';
import Marker from 'react-native-maps';

const App = () => {
  return (
    <Fragment>
      
            <View style={styles.container}> 
          <MapView
          style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4124
      }}
      title="hairdresser's shop 1"
      />
         <MapView.Marker
      coordinate={{
        latitude: 37.77100,
        longitude: -122.4434
      }}
      title="hairdresser's shop 2"
      />
         <MapView.Marker
      coordinate={{
        latitude: 37.80100,
        longitude: -122.4534
      }}
      title="hairdresser's shop 3"
      />
    </MapView>
     <View><Text>Azad</Text></View>
     </View>
    
    
    </Fragment>
     
  );
};




const styles = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFillObject,
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  map:{
    ...StyleSheet.absoluteFillObject
  }
});

export default App;
