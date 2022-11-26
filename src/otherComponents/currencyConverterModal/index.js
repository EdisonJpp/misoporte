import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { windowWidth } from '../../theme/appConstant';
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import Styles from "./styles";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import Preference from 'react-native-default-preference';

export function CurrencyConverter(props) {

    const { colors } = useTheme();
    const [currencys] = useState(Data.currencys)
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);

    const changeCurrency = (key, value) => {
        commonContext.setCurrSymbol(key);
        commonContext.setCurrValue(value);
        Preference.set('CurrSymbol', key)
        Preference.set('CurrValue', value.toString())
        props.onPress()
        props.navigation.toggleDrawer();
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[Styles.text, { color: colors.text, textAlign: props.textAlign }]}>{t('multicurrencyModal.selectCurrency')}</Text>
            {currencys.map((item) =>
                <TouchableOpacity activeOpacity={0.8} onPress={() => changeCurrency(item.key, item.value)} style={[Styles.icon, { flexDirection: props.viewAlign }]}>
                    {item.icons}
                    <Text style={[Styles.text, { color: colors.text, marginLeft: windowWidth(20) }]}>{t(item.name)}  </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}