import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { MyStack } from './Stack.routes'

export const Routes = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}