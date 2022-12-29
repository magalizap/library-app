import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BookItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity style={styles.bookItem} onPress={() => onSelected(item)}>
        <View >
            <View>
                <Image style={styles.image} source={item.image}/>
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
        margin: 20,
        borderRadius: 4,
        backgroundColor: '#B6AD90',
        

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
    },
    image: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    }
})