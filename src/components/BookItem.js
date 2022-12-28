import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BookItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.bookItem}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.alinear}>
                <Text style={styles.details}>${item.price}</Text>
                <Text style={styles.details}>Autor: {item.author}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BookItem

const styles = StyleSheet.create({
    bookItem: {
        padding: 20,
        margin: 10,
        borderRadius: 4,
        backgroundColor: '#B6AD90',
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Andika-Regular',
    },
    details: {
        fontSize: 18,
    },
    alinear: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
})