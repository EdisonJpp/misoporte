import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Appcolor from '../../theme/colors';
import MenuItem from '../../otherComponents/drawerComponents/menuItem';
import Data from '../../utils/json';
import SignOut from "../../assets/icons/signOut";
import DarkIcon from '../../assets/icons/darkIcon';
import { CommonContext } from '../../../App';
import { useTheme } from "@react-navigation/native";
import { MultiLangauge, CommonModal, CurrencyConverter } from "../../otherComponents";
import { Header, Switch } from "../../commonComponents";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import ProfileView from "./profileView";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Preference from 'react-native-default-preference';
import auth from '@react-native-firebase/auth';

export function Account(props) {

    const commonContext = useContext(CommonContext);
    const [isRTL, setIsRTL] = useState(commonContext.isRTL);
    const [isDark, setisDark] = useState(commonContext.isDark);
    const [showModal, setShowModal] = useState(false);
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const { t } = useTranslation();

    const { colors } = useTheme();

    useEffect(() => {
        GoogleSignin.configure({});
    }, [])

    const goToScreen = (key) => {
        if (key === 0) {

        } else if (key === 2) {
            props.navigation.navigate('Category')
        } else if (key === 3) {
            props.navigation.navigate('OrderHistory')
        } else if (key === 4) {
            props.navigation.navigate('Wishlist')
        } else if (key === 5) {
            visibleModal()
        } else if (key === 6) {
            props.navigation.navigate('Account')
        } else if (key === 7) {
            props.navigation.navigate('Notification')
        } else if (key === 8) {
            props.navigation.navigate('EditProfile')
        } else if (key === 9) {
            visibleCurrencyModal()
        }
    }

    const visibleModal = () => {
        setShowModal(!showModal)
    }
    const logout = async () => {
        await GoogleSignin.signOut();
        auth().signOut();
        Preference.clearAll()
        commonContext.setIsRTL()
        commonContext.setIsDark()
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    const visibleCurrencyModal = () => {
        setShowCurrencyModal(!showCurrencyModal)
    }
    const languageRestart = async () => {
        await I18nManager.forceRTL(true);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => props.navigation.goBack()}
                    isText
                    titleText={'pagesListArr.account'} />
                <View style={Styles.mainView}>
                    <ProfileView colors={colors} t={t} />
                    {Data.drawerItems.map((items, key) =>
                        (key != 1 && key != 6) &&
                        <MenuItem
                            width={'100%'}
                            icon={items.icons}
                            text={items.name}
                            showSwitch={items.showSwitch}
                            navigationProps={props}
                            onPress={() => goToScreen(key)}
                            fill={commonContext.isDark ? Appcolor.white : Appcolor.black}
                        />
                    )}
                    <Switch
                        t={t}
                        isOn={isRTL}
                        onToggle={isOn => {
                            setIsRTL(isOn)
                            commonContext.setIsRTL(!isOn);
                            languageRestart()
                        }}
                        from
                        width={'87%'}
                        context={commonContext}
                    />
                    <Switch
                        t={t}
                        isOn={isDark}
                        onToggle={isOn => {
                            setisDark(isOn)
                            commonContext.setIsDark(isOn);
                        }}
                        switchIcon={isDark ? <DarkIcon /> : null}
                        width={'87%'}
                        context={commonContext}
                    />
                    <TouchableOpacity onPress={logout} activeOpacity={0.7} style={[Styles.signOutView, { backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                        <SignOut />
                        <Text style={[Styles.signOut, { color: colors.text }]}>{t('account.signOut')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <CommonModal modal={<MultiLangauge from='account' onPress={visibleModal} navigation={props.navigation} />} showModal={showModal} visibleModal={visibleModal} />
            <CommonModal modal={<CurrencyConverter onPress={visibleCurrencyModal} navigation={props.navigation} />} showModal={showCurrencyModal} visibleModal={visibleCurrencyModal} />
        </SafeAreaView>
    )
}