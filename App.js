import { useFonts } from 'expo-font'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Andika-Regular' : require('./src/assets/fonts/Andika-Regular.ttf'),
    'Andika-Bold' : require('./src/assets/fonts/Andika-Bold.ttf')
  })

  if(!fontsLoaded){
    return null
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator/>
    </Provider>
  )


}