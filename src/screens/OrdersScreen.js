import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import {deleteOrder, getOrders} from '../store/actions/order.action'
import OrderItem from '../components/OrderItem'

const OrdersScreen = () => {

    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.list)

    useEffect(() => {
      dispatch(getOrders())
    }, [])

    const handleDeleteOrder = (id) => dispatch(deleteOrder(id))   
    

    const renderItem = ({item}) => (
      <OrderItem item={item} onDelete={handleDeleteOrder}/>
    )

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export default connect()(OrdersScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18
  }
})