import React, { useState, useContext } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
} from 'react-native'
import Styles from './styles';
import { Header } from "../../commonComponents";
import Data from '../../utils/json';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import List from "../../otherComponents/drawerComponents/menuItem";
import { CommonContext } from '../../../App';
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';

export function PagesList({ navigation }) {

    const { colors } = useTheme();
    const [pagesList] = useState(Data.pagesList)
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();

    const goToScreen = (key) => {
        if (key === 0) {
            navigation.navigate('NotFound');
        } else if (key === 1) {
            navigation.navigate('AboutUs')
        } else if (key === 2) {
            navigation.navigate('Account');
        } else if (key === 3) {
            navigation.navigate('AddAddress');
        } else if (key === 4) {
            navigation.navigate('SelectAddress');
        } else if (key === 5) {
            navigation.navigate('CartList');
        } else if (key === 6) {
            navigation.navigate('Category');
        } else if (key === 7) {
            navigation.replace('Drawer');
        } else if (key === 8) {
            navigation.navigate('Login');
        } else if (key === 9) {
            navigation.navigate('Notification');
        } else if (key === 10) {
            navigation.navigate('Offers');
        } else if (key === 11) {
            navigation.navigate('OnBoarding');
        } else if (key === 12) {
            navigation.navigate('OrderDetails');
        } else if (key === 13) {
            navigation.navigate('OrderHistory');
        } else if (key === 14) {
            navigation.navigate('OrderSuccess');
        } else if (key === 15) {
            navigation.navigate('OrderTracking');
        } else if (key === 16) {
            navigation.navigate('SelectPayment');
        } else if (key === 17) {
            navigation.navigate('ProductsDetails');
        } else if (key === 18) {
            navigation.navigate('Registration');
        } else if (key === 19) {
            navigation.navigate('Search');
        } else if (key === 20) {
            navigation.navigate('EditProfile');
        } else if (key === 21) {
            navigation.navigate('ProductsList');
        } else if (key === 22) {
            navigation.navigate('Wishlist');
        }
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('pageListPage.pagesList')} />
                <View style={[Styles.checkOut, { backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                    <Text style={Styles.checkOutTxt}>{t('pageListPage.checkoutPages')}</Text>
                </View>
                {pagesList.map((item, key) =>
                    <List
                        text={item.name}
                        showSwitch={false}
                        width={'96%'}
                        fill={Appcolor.primary}
                        onPress={() => goToScreen(key)}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}