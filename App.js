import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TextLoader from './src/components/TextLoader';
import Buttons from './src/components/Buttons';
import HomeScreen from './screens/HomeScreen';
import InGameEval from './screens/InGameEval';
import Memory from './screens/Memory';
import Concentration from './screens/Concentration';
import Suggestion from './screens/Suggestion';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Eval: { 
    screen: InGameEval,
    navigationOptions: {
      title: 'Orientation'
    }
  },
  Memory: { 
    screen: Memory,
    navigationOptions: {
      title: 'Memory'
    }
  },

  Concentration: { 
    screen: Concentration,
    navigationOptions: {
      title: 'Concentration'
    }
  },
  Suggestion: { 
    screen: Suggestion,
    navigationOptions: {
      title: 'Suggestion'
    }
  },
  

});

const AppContainer = createAppContainer(AppStackNavigator);

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
