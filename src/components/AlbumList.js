import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log('aaaaa'));
  }


  render() {
    return(
      <View>
        <Text>1234</Text>
      </View>
    );
  }
}

export default AlbumList;
