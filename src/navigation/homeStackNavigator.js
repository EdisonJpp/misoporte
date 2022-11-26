import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { home, PagesList, AboutUs, NotFound, category, Account, search, offers } from "../screens";

const AppStack = createStackNavigator();
export const HomeStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}>
        <AppStack.Screen name="Home" component={home} />

        {/* Other pages with needs tab bar are also define in home stack screen */}
        <AppStack.Screen name="PagesList" component={PagesList} />
        <AppStack.Screen name="AboutUs" component={AboutUs} />
        <AppStack.Screen name="NotFound" component={NotFound} />
        <AppStack.Screen name="Category" component={category} />
        <AppStack.Screen name="Account" component={Account} />
        <AppStack.Screen name="Search" component={search} />
        <AppStack.Screen name="Offers" component={offers} />
    </AppStack.Navigator>
);