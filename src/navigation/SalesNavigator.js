
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, TouchableOpacity } from "react-native";
import { COLORS } from '../constants/colors'
import SalesScreen from "../screens/SalesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AddBookScreen from "../screens/AddBookScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";


const Stack = createNativeStackNavigator()



export default ShopNavigator = ({navigation}) => {


    

    return(
            <Stack.Navigator initialRouteName="Sales" screenOptions={{
                headerStyle: {backgroundColor: COLORS.SEAL_BROWN},
                headerTintColor: COLORS.KHAKI_WEB,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name="Sales" component={SalesScreen}
                options={{title:'Mis ventas', headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                        <Ionicons name="add" color={COLORS.KHAKI_WEB} size={23}/>
                    </TouchableOpacity>
                )}}/>
                <Stack.Screen
                    name="Nuevo" component={AddBookScreen} options={{title: 'New Book'}}
                />
                <Stack.Screen
                  name="Detalle"
                  component={PlaceDetailScreen}
                  options={{ title: "Detalle direccion" }}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ title: "Mapa" }}
                />

            </Stack.Navigator>
    )
}