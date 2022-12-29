import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
const BookDetailScreen = () => {

  const dispatch = useDispatch()
  const book = useSelector((state) => state.books.selected)

  const handleAddItemCart = () => {
    dispatch(addItem(book))
  }

  return (
    <View style={styles.container}>
     <View style={styles.screen}>
      <Text style={styles.title}>{book.name}</Text>
      <Text style={styles.sinopsis}>{book.sinopsis}</Text>
      <Text style={styles.price}>${book.price}</Text>
      <Button  title='Agregar al carrito' color={'#582F0E'}  onPress={handleAddItemCart}/>
     </View>
    </View>
  )
}

export default BookDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  screen: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Andika-Bold'
  },
  sinopsis: {
    fontSize: 18,
    fontFamily: 'Andika-Regular',
  },
  price: {
    fontSize: 40,
    fontFamily: 'Andika-Regular',
    marginBottom: 15
  },


})