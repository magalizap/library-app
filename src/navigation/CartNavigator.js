import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from '../screens/CartScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            headerStyle: {backgroundColor: COLORS.SEAL_BROWN},
            headerTintColor: COLORS.KHAKI_WEB,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Cart" component={CartScreen} options={{title: 'Carrito'}}/>
        </Stack.Navigator>
    )
}