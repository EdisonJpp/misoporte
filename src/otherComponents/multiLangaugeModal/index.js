import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { windowWidth } from '../../theme/appConstant';
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import Styles from "./styles";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from "../../../App";
import Preference from 'react-native-default-preference';

export function MultiLangauge(props) {

    const { colors } = useTheme();
    const [langauges] = useState(Data.langauges)
    const { i18n, t } = useTranslation();
    const commonContext = useContext(CommonContext);

    const changeLanguage = (key) => {
        i18n.changeLanguage(key)
        props.onPress()
        Preference.set('Language', key)
        props.from != 'account' &&
            props.navigation.toggleDrawer();
        if (key === 'ar') {
            var on = true.toString();
            Preference.set('RTL', on)
            commonContext.setIsRTL(!commonContext.isRTL);
        }
        else {
            var on = false.toString();
            Preference.set('RTL', on)
            commonContext.setIsRTL(false);
        }
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[Styles.text, { color: colors.text, textAlign: props.textAlign }]}>{t('multiLangaugeModal.selectLanguage')}</Text>
            {langauges.map((item) =>
                <TouchableOpacity activeOpacity={0.8} onPress={() => changeLanguage(item.key)} style={[Styles.icon, { flexDirection: props.viewAlign }]}>
                    {item.icons}
                    <Text style={[Styles.text, { color: colors.text, marginLeft: windowWidth(20) }]}>{t(item.name)}  </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}