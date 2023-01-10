import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBookScreen from '../screens/CategoryBookScreen'
import BookDetailScreen from '../screens/BookDetailScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle: {backgroundColor: COLORS.SEAL_BROWN},
                headerTintColor: COLORS.KHAKI_WEB,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name="Categories" component={CategoriesScreen}
                options={{title:'BOOKS STORE'}}/>

                <Stack.Screen name="Books" component={CategoryBookScreen}
                options={({route}) => ({
                    title: route.params.name
                })}
                />
                <Stack.Screen name="Details" component={BookDetailScreen}
                options={({route}) => ({
                    title: route.params.name
                })}
                />
            </Stack.Navigator>
    )
}