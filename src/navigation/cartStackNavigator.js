import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartList } from "../screens";

const AppStack = createStackNavigator();
export const CartStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}>
        <AppStack.Screen name="CartList" component={CartList} />

    </AppStack.Navigator>
);
