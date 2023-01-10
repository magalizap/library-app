import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, { Marker } from 'react-native-maps'
import { COLORS } from '../constants/colors'

const initialRegion = {
    latitude: 37.4219023,
    longitude: -122.0839984,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const MapScreen = ({navigation}) => {

    const [selectedLocation, setSelectedLocation] = useState({})

    const handleSelectedLocation = (event) => {
        console.log(event.nativeEvent.coordinate)
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    const handleSaveLocation = () => {
        console.log(selectedLocation)
        if(selectedLocation){
            navigation.navigate('Nuevo', {mapLocation: {
                lat: 37.38991311927722,
                lng: -122.09031305134614
            }})
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <Ionicons name='save-outline' color={COLORS.KHAKI_WEB} size={22}/>
                </TouchableOpacity>
            )
        })
    }, [])

  return (
    <MapView
        provider='google'
        initialRegion={initialRegion} 
        style={styles.container}
        onPress={handleSelectedLocation}
    >
        {selectedLocation && (
            <Marker 
                title='Ubicación seleccionada' 
                coordinate={{
                    latitude: selectedLocation.lat, 
                    longitude: selectedLocation.lng
                }}

            />
        )}
    </MapView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})