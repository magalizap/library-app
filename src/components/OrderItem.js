import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from "react";
import { COLORS } from "../constants/colors";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};


const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>Fecha: {formatDay(item.date)}</Text>
        <Text style={styles.total}>Total: ${item.total}</Text>
      </View>
      <View style={styles.action}>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" color={COLORS.DARK_OLIVE_GREEN} size={22}/>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderColor: COLORS.LAUREL_GREEN,
    borderWidth: 1,
    borderRadius: 6
  },
  date: {
    fontSize: 18,
    marginRight: 10,
    fontFamily: 'Andika-Regular'
  },
  total: {
    fontSize: 18,
    fontFamily: 'Andika-Regular'
  }
});
