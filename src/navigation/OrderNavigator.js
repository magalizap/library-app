import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from '../screens/OrdersScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Orders" screenOptions={{
                headerStyle: {backgroundColor: COLORS.SEAL_BROWN},
                headerTintColor: COLORS.KHAKI_WEB,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name="Orders" component={OrdersScreen}
                options={{title:'Órdenes'}}/>

            </Stack.Navigator>
    )
}