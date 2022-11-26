import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { search } from "../screens";

const AppStack = createStackNavigator();
export const SearchStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}>
        <AppStack.Screen name="Search" component={search} />

    </AppStack.Navigator>
);
