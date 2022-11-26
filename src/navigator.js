import React, { useContext } from 'react';
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './navigation/drawerNavigator';
import {
    Splash,
    OnBoarding,
    Login,
    Registration,
    ProductsList,
    ProductsDetails,
    CartList,
    AddAddress,
    SelectAddress,
    SelectPayment,
    OrderSuccess,
    OrderTracking,
    OrderDetails,
    OrderHistory,
    EditProfile,
    Notification,
    Wishlist,
} from './screens';
import { CommonContext } from '../App';
import colors from './theme/colors';

const Stack = createStackNavigator();

const MyStack = () => {

    const commonContext = useContext(CommonContext);

    const customeDefaultTheme = {
        ...DefaultTheme,
        colors: {
            background: colors.white,
            text: colors.title,
            primary: colors.drawer,
            card: colors.white,
        }
    }

    const customeDarkTheme = {
        ...DarkTheme,
        colors: {
            background: colors.dark,
            text: colors.white,
            primary: colors.darkDrawer,
            card: colors.dark,
        },
    }

    const theme = commonContext.isDark ? customeDarkTheme : customeDefaultTheme

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Splash}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="ProductsList" component={ProductsList} />
                <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
                <Stack.Screen name="CartList" component={CartList} />
                <Stack.Screen name="AddAddress" component={AddAddress} />
                <Stack.Screen name="SelectAddress" component={SelectAddress} />
                <Stack.Screen name="SelectPayment" component={SelectPayment} />
                <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
                <Stack.Screen name="OrderTracking" component={OrderTracking} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;