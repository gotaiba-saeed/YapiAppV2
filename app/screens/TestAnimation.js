import React, { Component } from 'react';
import { Animated,Text, View, StyleSheet,Dimensions } from 'react-native';

const { height: HIGHT } = Dimensions.get('window').height
export default class TestAnimated extends Component {
  constructor(props) {
    super(props)  
  }
  state={
    fadeAnimation: new Animated.Value(-700)
  }  

  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 1000,         
    }).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Front Screen
        </Text>
        <Animated.View style={{
          position:'absolute',
          width:'100%',
          height:'100%',        
          alignItems: 'center',          
          justifyContent: 'center',       
          transform:[{translateY:this.state.fadeAnimation}]        
        }}>
            <View style={{
               position:'absolute',
               width:'100%',
               height:'100%',                     
               opacity:0.6,              
               backgroundColor:"#333",
            }}/>
            <View style={{
              height:300,
              width:250,
              alignItems: 'center',
              borderRadius:4,          
              justifyContent: 'center', 
              backgroundColor: '#fff', 

            }}>
               <Text style={styles.text2}>I'm Modal</Text>
            </View>          
        </Animated.View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    height: 300,
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
  text2: {
    color: '#333',
    fontSize: 32,
  }
});
