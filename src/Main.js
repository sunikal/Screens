import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './components/Home/Home';
import Search from './components/Home/Search';
import Profile from './components/Home/Profile';

const stackNavigation=()=>createStackNavigator(
	{
		
		Home: { screen: Home },
		Search: { screen: Search },
		Profile: { screen: Profile }
	},
	{
	  navigationOptions: ({navigation}) => ({
		header: null
	  }),
	  initialRouteName: "Home",

	}
);

export default class Main extends Component {

	render() {
		const AppNavigator = stackNavigation();
		return (
			<AppNavigator />
		);
	}
}
