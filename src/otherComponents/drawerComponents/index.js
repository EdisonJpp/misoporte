import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import MenuItem from './menuItem';
import Data from '../../utils/json';
import DarkIcon from '../../assets/icons/darkIcon';
import { CommonContext } from '../../../App';
import { useTheme } from "@react-navigation/native";
import { MultiLangauge, CommonModal, CurrencyConverter } from "../";
import Styles from './styles';
import { useTranslation } from 'react-i18next';
import { Switch } from "../../commonComponents";
import ProfileView from "./profileView";
import SupportView from "./supportView";
import Preference from 'react-native-default-preference';
import SignOut from '../../assets/icons/signOut';
import Appcolor from '../../theme/colors';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export default drawerComponent = ({ props, navigation }) => {
    const commonContext = useContext(CommonContext);
    const [isRTL, setIsRTL] = useState(commonContext.isRTL);
    const [isDark, setisDark] = useState(commonContext.isDark);
    const [showModal, setShowModal] = useState(false);
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const { t } = useTranslation();
    const { colors } = useTheme();
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    useEffect(() => {
        GoogleSignin.configure({});
    }, [])
    const goToScreen = (key) => {
        if (key != 5 && key != 9) {
            navigation.toggleDrawer();
        }
        if (key === 0) {

        } else if (key === 1) {
            navigation.navigate('PagesList')
        } else if (key === 2) {
            navigation.navigate('Category')
        } else if (key === 3) {
            navigation.navigate('OrderHistory')
        } else if (key === 4) {
            navigation.navigate('Wishlist')
        } else if (key === 5) {
            visibleModal()
        } else if (key === 6) {
            navigation.navigate('Account')
        } else if (key === 7) {
            navigation.navigate('Notification')
        } else if (key === 8) {
            navigation.navigate('EditProfile')
        } else if (key === 9) {
            visibleCurrencyModal()
        }
    }
    const visibleModal = () => {
        setShowModal(!showModal)
    }
    const visibleCurrencyModal = () => {
        setShowCurrencyModal(!showCurrencyModal)
    }
    const changeRTL = async (isOn) => {
        var lang = ''
        await Preference.get('Language').then(function (value) { lang = value });
        if (lang != 'ar') {
            commonContext.setIsRTL(isOn);
            var on = isOn.toString();
            Preference.set('RTL', on)
        }
    }
    const logout = async () => {
        await GoogleSignin.signOut();
        auth().signOut();
        Preference.clearAll()
        commonContext.setIsRTL()
        commonContext.setIsDark()
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }
    return (
        <View>
            <CommonModal modal={<MultiLangauge onPress={visibleModal} navigation={navigation} viewAlign={viewAlign} textAlign={textAlign} />} showModal={showModal} visibleModal={visibleModal} />
            <CommonModal modal={<CurrencyConverter onPress={visibleCurrencyModal} navigation={navigation} viewAlign={viewAlign} textAlign={textAlign} />} showModal={showCurrencyModal} visibleModal={visibleCurrencyModal} />
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.mainView}>
                <ProfileView colors={colors} t={t} />
                {Data.drawerItems.map((items, key) =>
                    <MenuItem
                        icon={items.icons}
                        text={items.name}
                        showSwitch={items.showSwitch}
                        navigationProps={props}
                        onPress={() => goToScreen(key)}
                    />
                )}
                <Switch
                    t={t}
                    isOn={isRTL}
                    onToggle={isOn => {
                        setIsRTL(isOn)
                        changeRTL(isOn)
                    }}
                    from
                    context={commonContext}
                />
                <Switch
                    t={t}
                    isOn={isDark}
                    onToggle={isOn => {
                        setisDark(isOn)
                        commonContext.setIsDark(isOn);
                        var on = isOn.toString();
                        Preference.set('Dark', on)
                    }}
                    switchIcon={isDark ? <DarkIcon /> : null}
                    context={commonContext}
                />
                <TouchableOpacity onPress={logout} activeOpacity={0.7} style={[Styles.signOutView, { backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                    <SignOut />
                    <Text style={[Styles.signOut, { color: colors.text }]}>{t('account.signOut')}</Text>
                </TouchableOpacity>
                <SupportView colors={colors} t={t} txtAlign={textAlign} viewAlign={viewAlign} />
            </ScrollView>
        </View>

    )
}