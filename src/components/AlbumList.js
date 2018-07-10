import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { album : [] };
  
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  renderAlbums() {
    return this.state.album.map(album => 
      <AlbumDetail key={album.title} album={album} />;
  }

  render() {
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
