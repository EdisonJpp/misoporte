import React, { useEffect, useContext } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import Images from '../../../utils/images/images';
import Styles from './styles';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../../App';
import Preference from 'react-native-default-preference';
import { useTranslation } from 'react-i18next';

export function Splash(props) {

    const { i18n } = useTranslation();

    useEffect(() => {
        getValues()

    }, [])

    const getValues = async () => {
        var langauges = 'en'
        var token = ''
        await Preference.get('Language').then(function (value) { langauges = value });
        await Preference.get('token').then(function (value) { token = value });
        i18n.changeLanguage(langauges)
        setTimeout(() => {
            token ? props.navigation.replace('Drawer') :
                props.navigation.replace('Login')
        }, 2000);
    }

    const commonContext = useContext(CommonContext)
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <Image source={Images.splash} style={{ width: '100%' }} />
            <View style={Styles.logo}>
                <Image source={commonContext.isDark ? Images.fastKartDark : Images.logo} style={Styles.img} />
            </View>
        </SafeAreaView>
    )
}