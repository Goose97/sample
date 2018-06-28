import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
	return( <Header headerText={"Thuc Anh dang yeu"} /> );
};

AppRegistry.registerComponent('main', () => App);
