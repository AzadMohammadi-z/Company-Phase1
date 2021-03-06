import React, { Component } from 'react';
import {View ,StyleSheet,Text,Image,TouchableOpacity,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT + 40;

class Category extends Component {
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.specifications}>
                    <View style={styles.viewNameAndRating}>
                         <Text>{this.props.name}</Text>
                       <View style={styles.rating}>
                           <Text style={{color:'white'}}>{`rating ${this.props.rating}`}</Text>
                       </View>
                    </View>                  
                    <View style={styles.viewImage}>
           <Image source={this.props.imgUrl} style={styles.img}/>
                    </View>  
                </View>
               
               <View style={styles.viewTochableOpacity}>
              
                   <TouchableOpacity style={styles.tochableOpacity}>
                       <Text>Click</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.tochableOpacity}>
                       <Text>Click</Text>
                   </TouchableOpacity>
               </View>
            </View>  
         );
    }
}

const styles=StyleSheet.create({
container:{
    height: CARD_HEIGHT,
    width:CARD_WIDTH,
    margin:5,
    borderWidth:0.5,
    borderColor:'#dddddd',
    backgroundColor:'white',
    flexDirection:'column',
    overflow: "hidden",
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
},
specifications:{
   flex:2,
   justifyContent:'flex-end',
   flexDirection:'row' 
},
viewNameAndRating:{
        flex:3, 
        width: 80,
        height: 80,
        alignItems:'flex-end',
        justifyContent:'flex-start',
        flexDirection:'column',
        margin:10
    },
rating:{
    height: 30,
    width:80,
    backgroundColor:'#e84393',
    alignItems:'center',
    justifyContent:'center',
    marginTop:18,
    borderRadius:5
},
viewImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    overflow: 'hidden',
    margin: 5,
},
img:{
   width: '100%',
    height: '100%'
},
viewTochableOpacity :{
    flex:2.3,
    width:CARD_WIDTH,
    height:30,
    flexDirection:'row',
    margin:5
},
tochableOpacity:{
    width:110,
    height:30,
    backgroundColor:'#ecf0f1',
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
}
})
 
export default Category;