import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import Data from '../../utils/json';
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';

export function CouponModal(props) {

    const { colors } = useTheme();
    const [termsConditions] = useState(Data.termsCondition);
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext)
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const textAlign = commonContext.isRTL ? 'right' : 'left'

    return (
        <View style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <View style={Styles.offView}>
                <Text style={[Styles.flatTxt, { textAlign: textAlign }]}>{t('cartlist.flat')} {props.price}% {t('cartlist.off')}</Text>
                <Text style={[Styles.offTxt, { textAlign: textAlign }]}>{t('cartlist.orderabove')}{props.subTxt}</Text>
                <TouchableOpacity onPress={props.showModal} activeOpacity={0.8} style={[Styles.codeView, { flexDirection: viewAlign }]}>
                    <Text style={Styles.codeTxt}>{t('cartlist.code')} {props.code}</Text>
                    <Text style={Styles.copyCode}>{t('couponModal.copyCode')}</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.termsView}>
                <Text style={[Styles.txt, { textAlign: textAlign }]}>{t('couponModal.termsConditions')}</Text>
                {termsConditions.map((item, key) =>
                    <View style={[Styles.keyView, { flexDirection: viewAlign }]}>
                        <Text style={[Styles.txt, { textAlign: textAlign }]}>{key + 1}. </Text>
                        <Text style={[Styles.txt, { textAlign: textAlign }]}>{t(item.terms)}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}