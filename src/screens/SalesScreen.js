import { StyleSheet, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import * as addressAction from '../store/actions/places.action'



const SalesScreen = ({navigation}) => {
  
  const dispatch = useDispatch()
  const places = useSelector(state => state.places.places )

  useEffect(() => {
    dispatch(addressAction.loadNewBook())
  },[])

  useEffect(() => {
    console.log(places)
  },[places])

  const renderItem = ({item}) => (
    <PlaceItem
    title={item.title}
    image={item.image}
    address={item.address}
    onSelect={() => navigation.navigate('Detalle', {
      placeId: item.id
    })}
    />
  )

  return (
    <FlatList 
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

export default SalesScreen

const styles = StyleSheet.create({})