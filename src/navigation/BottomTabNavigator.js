import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator';


const BottomTabs = createBottomTabNavigator();

const ShopTab = 'ShopTab'
const CartTab = 'CartTab'
const OrderTab = 'OrderTab'

export default BottomTabNavigator = () => {
  return (
        <BottomTabs.Navigator 
            initialRouteName={ShopTab}
            screenOptions={({route}) => ({
                headerShown: false, 
                tabBarStyle: Styles.tabBar,
                tabBarActiveTintColor: '#656D4A',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName
                    let rn = route.name

                    if(rn === ShopTab){
                        iconName = focused ? 'book' : 'book-outline'
                    }else if(rn === CartTab){
                        iconName = focused ? 'cart' : 'cart-outline'
                    }else if(rn === OrderTab){
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>

            <BottomTabs.Screen name={ShopTab} component={ShopNavigator} options={{
                title: 'Catálogo'
            }}/> 
            <BottomTabs.Screen name={CartTab} component={CartNavigator}  options={{
                title: 'Carrito'  
            }}/>   
            <BottomTabs.Screen name={OrderTab} component={OrderNavigator}  options={{
                title: 'Órdenes'  
            }}/>   
        </BottomTabs.Navigator>
  );
}

const Styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: 'absolute',
        height: 90,
    },
    item: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

/**
 * export default BottomTabNavigator = () => {
  return (
    <NavigationContainer>
        <BottomTabs.Navigator 
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel:false, 
                tabBarStyle: Styles.tabBar,
            }}
        >
        <BottomTabs.Screen name="ShopTab" component={ShopNavigator} options={{
            tabBarIcon: ({focus}) => (
                <View style={Styles.item}>
                    <Entypo name='book' size={20} color='black'/>
                    <Text>Catálogo</Text>
                </View>
            )
        }}/>
        <BottomTabs.Screen name="CartTab" component={CartNavigator} options={{
            tabBarIcon: ({focus}) => (
                <View style={Styles.item}>
                    <Entypo name='shopping-cart' size={20} color='black'/>
                    <Text >Carrito</Text>
                </View>
            )
        }}/>
        </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
 */