import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const BookDetailScreen = ({navigation}) => {

  const book = useSelector((state) => state.books.selected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Detail Screen</Text>
      <Button title='Go to back' color={'purple'} onPress={() => navigation.navigate('Categories')}/>
    </View>
  )
}

export default BookDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Andika-Bold',
    fontSize: 20
  }
})