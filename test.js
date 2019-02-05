/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Animated } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import {  createStackNavigator, createAppContainer } from 'react-navigation';
import TextLoader from './src/components/TextLoader';
import Buttons from './src/components/Buttons';
import { name as appName } from './app.json';
import Home from './src/components/Home';

// const theme = {
//     Button: {
//         colors: {
//             primary: 'red' 
//         }
//     }
// };

const NavigationApp = createStackNavigator({
    Home: {
        screen: Home
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D3C4C'
    },

    WelcomeHeading: {
        fontSize: 40,
        marginBottom: 20
    },

    subtext: {
        fontSize: 12
    },

    buttonStyle: {
        marginTop: 10,
    }
});

const App = () => (
    <View style={styles.container}>

        <NavigationApp />
        <TextLoader />
        <ThemeProvider>
        <Buttons
        style={styles.buttonStyle} 
        title="Athlete Baseline"
            customStyles={{ backgroundColor: '#cc5500' }}
        />
        <Buttons
        style={styles.buttonStyle} 
        title="Spotters"
            customStyles={{ backgroundColor: '#cc5500' }}
        />
        <Buttons
        style={styles.buttonStyle} 
        title="In Game Evaluation"
            customStyles={{ backgroundColor: '#cc5500' }}
        />
        <Buttons
        style={styles.buttonStyle} 
        title="Concussion Diagnosis"
            customStyles={{ backgroundColor: '#cc5500' }}
        />

        <Buttons
        style={styles.buttonStyle} 
        title="Call Doctor"
            customStyles={{ backgroundColor: '#cc5500' }}
        />
    

      </ThemeProvider>
    </View>


);
export default createAppContainer(NavigationApp);

AppRegistry.registerComponent(appName, () => App);
