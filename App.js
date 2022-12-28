import { useFonts } from 'expo-font'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Andika-Regular' : require('./src/assets/fonts/Andika-Regular.ttf'),
    'Andika-Bold' : require('./src/assets/fonts/Andika-Bold.ttf')
  })

  if(!fontsLoaded){
    return null
  }

  return <BottomTabNavigator/>


}