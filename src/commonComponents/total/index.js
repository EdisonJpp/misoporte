import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Styles from './styles';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import { useTranslation } from 'react-i18next';
import { windowWidth } from '../../theme/appConstant';
import Loader from "./loader";

export function Total(props) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const [showLoader, setShowloader] = useState(true);
    const { t } = useTranslation();
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const textAlign = commonContext.isRTL ? 'right' : 'left'

    useEffect(() => {
        setTimeout(() => {
            setShowloader(false)
        }, 2000);
    }, [])

    return (
        <View style={props.style ? [Styles.mainView, {
            backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray,
            marginBottom: props.bottom,
        }] : { padding: windowWidth(20) }}>
            <Text style={[Styles.title, { color: props.color ? props.color : colors.text, textAlign: textAlign }]}>{t(props.title)}</Text>
            <View style={[Styles.dataView, { flexDirection: viewAlign }]}>
                <Text style={Styles.data}>{t('commonTotal.bagTotal')}</Text>
                {showLoader ? <Loader context={commonContext} /> :
                    <Text style={Styles.data}>{commonContext.currSymbol}{(commonContext.currValue * 220).toFixed(2)}</Text>}
            </View>
            <View style={[Styles.dataView, { flexDirection: viewAlign }]}>
                <Text style={Styles.data}>{t('commonTotal.bagSavings')}</Text>
                {showLoader ? <Loader context={commonContext} /> :
                    <Text style={Styles.price}>{commonContext.currSymbol}{(commonContext.currValue * -20).toFixed(2)}</Text>}
            </View>
            <View style={[Styles.dataView, { flexDirection: viewAlign }]}>
                <Text style={Styles.data}>{t('commonTotal.couponDiscount')}</Text>
                {showLoader ? <Loader context={commonContext} /> :
                    <Text style={Styles.coupon}>{t('totalModule.applyCoupon')}</Text>}
            </View>
            <View style={[Styles.dataView, Styles.deliveryView, { flexDirection: viewAlign }]}>
                <Text style={Styles.data}>{t('commonTotal.delivery')}</Text>
                {showLoader ? <Loader context={commonContext} /> :
                    <Text style={Styles.data}>{commonContext.currSymbol}{(commonContext.currValue * 50).toFixed(2)}</Text>}
            </View>
            <View style={[Styles.amountView, { flexDirection: viewAlign }]}>
                <Text style={[Styles.amount, { color: colors.text }]}>{t('commonTotal.totalAmount')}</Text>
                {showLoader ? <Loader context={commonContext} /> :
                    <Text style={[Styles.amount, { color: colors.text }]}>{commonContext.currSymbol}{(commonContext.currValue * 270).toFixed(2)}</Text>}
            </View>
            {props.btn}
        </View>
    )
}