import React, { Fragment } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import Category from './src/Category';

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
                        longitudeDelta: 0.0421
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
                            latitude: 37.771,
                            longitude: -122.4434
                        }}
                        title="hairdresser's shop 2"
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 37.801,
                            longitude: -122.4534
                        }}
                        title="hairdresser's shop 3"
                    />
                </MapView>
                <View style={{ height: 150, marginBottom: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Category
                            name="hairdresser's shop 1"
                            rating="4.7"
                            imgUrl={require('./src/image/shop1.jpg')}
                        />
                        <Category
                            name="hairdresser's shop 2"
                            rating="3.2"
                            imgUrl={require('./src/image/shop2.jpg')}
                        />
                        <Category
                            name="hairdresser's shop 3"
                            rating="4.5"
                            imgUrl={require('./src/image/shop3.jpg')}
                        />
                    </ScrollView>
                </View>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

export default App;
