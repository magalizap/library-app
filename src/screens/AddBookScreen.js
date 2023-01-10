import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { COLORS } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/actions/places.action'
import ImageSelector from '../components/ImageSelector'
import LocationSelector from '../components/LocationSelector'

const AddBookScreen = ({navigation, route}) => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState()
  const [location, setLocation] = useState()

  useEffect(() => {
    console.log(route, 'Nueva dirección')
  }, [route])

  const handleTitleChange = text => setTitle(text)

  const handleSave = () => {
    dispatch(addPlace(title, image,  location))
    navigation.navigate('Sales')
  }

  return (
    <ScrollView >
      <View style={styles.container}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} onChangeText={handleTitleChange} value={title}/>
          <ImageSelector onImage={setImage}/>
          <LocationSelector onLocation={setLocation} mapLocation={route?.params?.mapLocation}/>
          <Button title='Publicar' color={COLORS.SEAL_BROWN} onPress={handleSave}/>
      </View>
    </ScrollView>
  )
}

export default AddBookScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 30,
    paddingBottom:120
  },
  label: {
    fontSize: 18,
    marginBottom: 16
  },
  input: {
    borderBottomColor: COLORS.LAUREL_GREEN,
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4
  }
})