import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants/colors'




const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.detail}>
        <View >
            <Text style={styles.quantity}>Cantidad:{item.quantity}</Text>
            <Text>Precio:${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='trash' size={24} color={COLORS.DARK_OLIVE_GREEN}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LAUREL_GREEN
    },
    header: {
        fontSize: 18,
        fontFamily: 'Andika-Regular',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    quantity: {
      marginBottom: 5
    }  
})