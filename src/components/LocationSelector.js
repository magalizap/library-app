import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { COLORS } from '../constants/colors'
import MapPreview from './MapPreview'


const LocationSelector = ({ onLocation, mapLocation }) => {

    const navigation = useNavigation()
    //const route = useRoute()
    const [pickedLocation, setPickedLocation] = useState()

    useEffect(() => {
        if (mapLocation) {
          setPickedLocation(mapLocation);
          onLocation(mapLocation);
        } 
    }, [mapLocation])

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Activa los permisos de ubicación',
                [{Text: 'OK'}]
            )
            return false
        }
        return true
    }


    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk) return
        const location = await Location.getCurrentPositionAsync({
            timeOut: 5000
        })
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }

    const handlePickOnMap = async () => {
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk) return
        navigation.navigate('Map')
    }

    //const mapLocation = route?.params?.mapLocation

  return (
    <View style={styles.container}>
        <MapPreview location={pickedLocation} style={styles.preview}>
            <Text>Esperando ubicación...</Text>
        </MapPreview>
        <View style={styles.actions}>
            <Button title='Obtener locación actual' color={COLORS.KHAKI_WEB} onPress={handleGetLocation}/>
            <Button title='Seleccionar manualmente' color={COLORS.KHAKI_WEB} onPress={handlePickOnMap}/>
        </View>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.SEAL_BROWN,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    actions: {
        flexDirection: 'colum',
        justifyContent: 'center'
    }
})