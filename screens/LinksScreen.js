import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';



import MapView from 'react-native-maps';

import image from '../assets/images/flag-pink.png';



const coordinates = [];

    coordinates.push({
      key: 0,
      location: {
        longitude: 26.1025,
        latitude: 44.4268
      }
    });

    for(let i = 1; i<10; i++) {

      const location = {
        longitude: coordinates[i-1].location.longitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
        latitude: coordinates[i-1].location.latitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
      };

      coordinates.push({ key: i, location });

    }


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <MapView
        renderMarker={renderMarker}
        initialRegion={{
          longitude: 26.1025,
          latitude: 44.4268,
          latitudeDelta: 9.22,
          longitudeDelta: 4.21,
        }}
        style={StyleSheet.absoluteFillObject}>

        { coordinates.map(({ key, location } ) => <MapView.Marker key={key} image={image} coordinate={location} />) }

      </MapView>
    );
  }
}

function renderMarker({ location }) {
  return (
    <MapView.Marker
      image={image}
      coordinate={location}
    >
      <MapView.Callout>
        <Text>BiG BiG Callout</Text>
      </MapView.Callout>
    </MapView.Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
