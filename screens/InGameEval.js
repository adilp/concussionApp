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
    stadium: t.String,
    month: t.String,
    city: t.String,
    day: t.String,
    who: t.String,
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
        fontSize: 18,
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
        stadium: {
            label: 'What stadium is this?',
      },
      month: {
        label: 'What month is it?',
      },
      city: {
        label: 'What city?',
      },
      day: {
        label: 'What day is it?',
      },
      who: {
        label: 'Who is the opposing team?',
      },
    },
    stylesheet: formStyles,
  };
class InGameEval extends Component {

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
                        onPress={() => this.props.navigation.navigate('Memory')}
                    />
                </View>
        );
    }
}
export default InGameEval;

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
