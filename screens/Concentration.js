import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import t from 'tcomb-form-native';
import { ThemeProvider } from 'react-native-elements';
import TextLoader from '../src/components/TextLoader';
import Buttons from '../src/components/Buttons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Form = t.form.Form;
const User = t.struct({
    repeat: t.Boolean,
    month: t.Boolean,
    city: t.Boolean,
  
  });

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 10
      },
    },
    controlLabel: {
      normal: {
        color: 'white',
        fontSize: 15,
        marginBottom: 7,
        fontWeight: '600'
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    }
  };

  const options = {
    fields: {
        repeat: {
            label: 'Repeat the days of the week backwards (starting with today)'
      },
      month: {
        label: 'Repeate these numbers backward: 63 (36 is correct)',
      },
      city: {
        label: 'Repeate these numbers backward: 419 (914 is correct)',
      },
    },
    stylesheet: formStyles,
  };
class Concentration extends Component {

    render() {
        return (
            <View style={styles.container}>
                    
                    <Form 
                        type={User}
                        options={options} 
                    />

                    <Buttons
                    style={styles.buttonStyle} 
                    title="Next"
                        customStyles={{ backgroundColor: '#cc5500' }}
                        onPress={() => this.props.navigation.navigate('Suggestion')}
                    />
                </View>
        );
    }
}
export default Concentration;

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
