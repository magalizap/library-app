import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import BookItem from '../components/BookItem'
import { useSelector, useDispatch, connect } from 'react-redux'
import { filteredBook, selectedBook } from '../store/actions/book.action'

const CategoryBookScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const categoryBooks = useSelector((state) => state.books.filteredBook)
  const category = useSelector((state) => state.categories.selected)

  useEffect(() => {
    dispatch(filteredBook(category.id))
  }, [])
  
  const handleSelectedCategory = (item) => {
    dispatch(selectedBook(item.id))
    navigation.navigate('Details', {
      name: item.name
    })
  }

  const renderBookItem = ({item}) => (
    <BookItem item={item} onSelected={handleSelectedCategory} />
  )

  return (
    <FlatList
    style={styles.bookItem}
    data={categoryBooks} 
    keyExtractor={(item) => item.id} 
    renderItem={renderBookItem}

    />
  )
}

export default connect()(CategoryBookScreen)

const styles = StyleSheet.create({
  bookItem: {
    marginBottom: 100
  }
})
