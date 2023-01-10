import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import MapPreview from '../components/MapPreview'
import { useSelector } from 'react-redux'
import { COLORS } from '../constants/colors'


const PlaceDetailScreen = ({ route }) => {

  const { placeId } = route.params
  const place = useSelector(state => state.places.places.find(
    item => item.id === placeId
  ))

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: place.image}} style={styles.image}/>
      <View style={styles.location}>
        <View style={styles.addressContainer}>
        <Text style={styles.title}>Estamos en: {place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{lat: place.lat, lng: place.lng}}>
          <Text>Ubicación no encontrada</Text>
        </MapPreview>
      </View>
    </ScrollView>
  )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  location: {
    margin: 20,
    width: '90%',
    maxWidth: 350,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: COLORS.SEAL_BROWN,
    textAlign: 'center'
  },
  map: {
    height: 300
  }, 

})