import { FlatList } from 'react-native'
import React from 'react'
import BookItem from '../components/BookItem'
import { BOOKS } from '../data/books'

const CategoryBookScreen = ({navigation, route}) => {

  const books = BOOKS.filter(book => book.category === route.params.categoryID)

  const handleSelectedCategory = (item) => {
    navigation.navigate('Details', {
      productID: item.id,
      name: item.name
    })
  }

  const renderBookItem = ({item}) => (
    <BookItem item={item} onSelected={handleSelectedCategory}/>
  )

  return (
    <FlatList
    data={books} 
    keyExtractor={(item) => item.id} 
    renderItem={renderBookItem}
    numColumns={2}
  />
  )
}

export default CategoryBookScreen


