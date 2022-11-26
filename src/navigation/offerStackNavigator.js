import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { offers } from "../screens";

const AppStack = createStackNavigator();
export const OfferStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}>
        <AppStack.Screen name="Offers" component={offers} />

    </AppStack.Navigator>
);
