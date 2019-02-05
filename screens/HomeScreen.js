import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import { ThemeProvider } from 'react-native-elements';
import TextLoader from '../src/components/TextLoader';
import Buttons from '../src/components/Buttons';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
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
                        onPress={() => this.props.navigation.navigate('Eval')}
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
    }
}
export default HomeScreen;

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
