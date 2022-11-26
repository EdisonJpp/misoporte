import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./homeStackNavigator";
import { CategoryStackScreen } from "./categoryStackNavigation";
import { SearchStackScreen } from "./searchStackNavigator";
import { OfferStackScreen } from "./offerStackNavigator";
import { CartStackScreen } from "./cartStackNavigator";
import Home from '../assets/icons/home'
import TabComponents from '../otherComponents/tabComponents'
import Category from "../assets/icons/category";
import Search from "../assets/icons/search";
import { Image, StyleSheet } from "react-native";
import images from "../utils/images/images";
import { windowHeight, windowWidth } from "../theme/appConstant";
import colors from "../theme/colors";
import Cart from "../assets/icons/cart";
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default tabStackScreen = () => {
    const { t } = useTranslation();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <TabComponents {...props} />}>
            <Tab.Screen
                name="HomeStackScreen"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: t('tabBar.home'),
                    tabBarIcon: ({ tintColor }) => (
                        <Home color />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="CategoryStackScreen"
                component={CategoryStackScreen}
                options={{
                    tabBarLabel: t('tabBar.category'),
                    tabBarIcon: ({ tintColor }) => (
                        <Category color />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="SearchStackScreen"
                component={SearchStackScreen}
                options={{
                    tabBarLabel: t('tabBar.search'),
                    tabBarIcon: ({ tintColor }) => (
                        <Search color />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="OfferStackScreen"
                component={OfferStackScreen}
                options={{
                    tabBarLabel: t('tabBar.offers'),
                    tabBarIcon: ({ tintColor }) => (
                        <Image source={images.offer} style={styles.img} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="CartStackScreen"
                component={CartStackScreen}
                options={{
                    tabBarLabel: t('tabBar.cart'),
                    tabBarIcon: ({ tintColor }) => (
                        <Cart />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
    img: {
        width: windowWidth(32),
        height: windowHeight(32),
        resizeMode: 'contain',
        tintColor: colors.white,
        marginTop: windowHeight(-6)
    },
});