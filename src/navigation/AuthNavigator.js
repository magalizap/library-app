import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Auth" screenOptions={{
            headerStyle: {backgroundColor: COLORS.SEAL_BROWN},
            headerTintColor: COLORS.KHAKI_WEB,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    )
}