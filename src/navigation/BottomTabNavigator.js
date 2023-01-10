import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator';
import SalesNavigator from './SalesNavigator'
import { COLORS } from '../constants/colors';


const BottomTabs = createBottomTabNavigator();

const ShopTab = 'ShopTab'
const CartTab = 'CartTab'
const OrderTab = 'OrderTab'
const SalesTab = 'SalesTab'
export default BottomTabNavigator = () => {
  return (
        <BottomTabs.Navigator 
            initialRouteName={ShopTab}
            screenOptions={({route}) => ({
                headerShown: false, 
                tabBarStyle: Styles.tabBar,
                tabBarActiveTintColor: COLORS.DARK_OLIVE_GREEN,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName
                    let rn = route.name

                    if(rn === ShopTab){
                        iconName = focused ? 'book' : 'book-outline'
                    }else if(rn === CartTab){
                        iconName = focused ? 'cart' : 'cart-outline'
                    }else if(rn === OrderTab){
                        iconName = focused ? 'list' : 'list-outline'
                    }else if(rn === SalesTab){
                        iconName = focused ? 'library' : 'library-outline'
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
            <BottomTabs.Screen name={SalesTab} component={SalesNavigator}  options={{
                title: 'Mis ventas'  
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
        
    }
})

