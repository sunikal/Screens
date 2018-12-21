import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Main from './src/Main';

export default class App extends Component{
  componentDidMount() {
		SplashScreen.hide()
	}
  render() {
    return (
		<Main />
    );
  }
}