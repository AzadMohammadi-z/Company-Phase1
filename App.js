import React, { Component } from 'react';
import { StyleSheet, ScrollView, View ,Animated,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import Category from './src/Category';
import data from './src/data';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT + 40;

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
       markers:[],
       isLoading: false,
       region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    this.setState({ isLoading: true }, this.getData);
    this.animation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); 
        if (index >= this.state.markers.length) {
          index = this.state.markers.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }
  
        clearTimeout(this.regionTimeout);
        this.regionTimeout = setTimeout(() => {
          if (this.index !== index) {
            this.index = index;
            const { coordinate } = this.state.markers[index];
            this.map.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: this.state.region.latitudeDelta,
                longitudeDelta: this.state.region.longitudeDelta,
              },
              350
            );
          }
        }, 10);
      });
}

  getData = async () => {
    this.setState({
        markers: data,
        isLoading: false
    });
 };

    render() { 
        return ( 
            <View style={styles.container}>
            <MapView
              ref={map => this.map = map}
                style={styles.map}
                initialRegion={this.state.region}
            >
               {
                   this.state.markers.map((marker,index)=>{
                    const interpolations = this.state.markers.map((marker, index) => {
                        const inputRange = [
                          (index - 1) * CARD_WIDTH,
                          index * CARD_WIDTH,
                          ((index + 1) * CARD_WIDTH),
                        ];
                        const scale = this.animation.interpolate({
                          inputRange,
                          outputRange: [1, 2.5, 1],
                          extrapolate: "clamp",
                        });
                        const opacity = this.animation.interpolate({
                          inputRange,
                          outputRange: [0.35, 1, 0.35],
                          extrapolate: "clamp",
                        });
                        return { scale, opacity };
                      });
                      const scaleStyle = {
                        transform: [
                          {
                            scale: interpolations[index].scale,
                          },
                        ],
                      };
                      const opacityStyle = {
                        opacity: interpolations[index].opacity,
                      };
                       return (
                            <MapView.Marker 
                            key={index} 
                            coordinate={marker.coordinate}
                             title={marker.title}>
                             <Animated.View style={[styles.markerGear, opacityStyle]}>
                               <Animated.View style={[styles.loop, scaleStyle]} />
                                <View style={styles.marker} />
                             </Animated.View>
                             </MapView.Marker>
                       )
                      
                   })
               }
            </MapView>
            <View style={{ height: 150, marginBottom: 20 }}>
                <Animated.ScrollView
                    horizontal={true}
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                      [
                        {
                          nativeEvent: {
                            contentOffset: {
                              x: this.animation,
                            },
                          },
                        },
                      ],
                      { useNativeDriver: true }
                    )}
                    contentContainerStyle={styles.endPadding}
                >
                    {
                        this.state.markers.map((marker,index)=>{
                            return(
                                <Category 
                                key={index} 
                                name={marker.title} 
                                rating={marker.rating}
                                imgUrl={marker.imgUrl}/>
                            )
                        })
                    }
                </Animated.ScrollView>
            </View>
        </View>
         );
    }
}
 

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
    },
  markerGear: {
    alignItems: "center",
    justifyContent: "center",
  },
  loop: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
  marker: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#e84393'
  },
  endPadding: {
    paddingRight: 40,
    paddingLeft:40
  }
});

export default App;
