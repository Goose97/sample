import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import expo from 'expo';

const App = () => {
  return(
    <View>
      <Header headerText={'Sample'} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('main', () => App);
