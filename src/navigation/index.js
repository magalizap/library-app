import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default () => {
    
    const userId = useSelector(state => state.auth.userId)

    return(
        <NavigationContainer>
            {userId ? <BottomTabNavigator/> : <AuthNavigator/>}
            {/*<BottomTabNavigator/>*/}
        </NavigationContainer>
    )
}

