import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';


class TextLoader extends Component {
    
  state = {
    fadeAnim: new Animated.Value(1),
    fadeOut: new Animated.Value(0),
  }

     componentDidMount() {
       Animated.timing(
         this.state.fadeOut,
         {
           toValue: 1,
           duration: 4000
         },
         this.state.fadeAnim,
       {
         toValue: 0,
         duration: 4000,
       }
      ).start();
     }
  
    render() {
      return (
         <View style={styles.container}>

          <Animated.View
            style={{ opacity: this.state.fadeOut }}
          >
              <Text style={styles.WelcomeHeading}> Welcome </Text>
          </Animated.View>
        
          <Animated.View                 
              style={{ opacity: this.state.fadeAnim }}
          >
               <View style={{ marginBottom: 20 }}>
                  <Text style={styles.subtext}> Concussion App </Text>
                  <Text style={styles.subtext}> Prototype v0.1 </Text>             
                </View>
          </Animated.View>

         </View>
     );
   }
  }

  const styles = StyleSheet.create({
    container: {
       
        alignItems: 'center',
        justifyContent: 'center',
    },

    WelcomeHeading: {
        fontSize: 40,
        marginBottom: 20,
        color: '#D8DEE2'
    },

    subtext: {
        fontSize: 12,
        color: '#D8DEE2'
    },

    buttonStyle: {
        marginTop: 10
    }
});

export default TextLoader;
