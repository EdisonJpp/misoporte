import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './drawerNavigator'

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Drawer}>
                <Stack.Screen name="Drawer" component={Drawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;