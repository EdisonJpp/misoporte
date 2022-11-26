import React, { useContext, useState, useEffect } from 'react'
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import Images from '../../utils/images/images';
import { CommonContext } from '../../../App';
import { useTranslation } from 'react-i18next';
import { CouponLoader } from "./loader";

export function Coupon(props) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext)
    const [showLoader, setShowLoader] = useState(true);
    const { t } = useTranslation();
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    return (
        showLoader ? <CouponLoader context={commonContext} viewAlign={viewAlign} selfAlign={selfAlign} /> :
            <ImageBackground source={commonContext.isDark ? Images.cartListDark : Images.cartList} resizeMode='contain' style={Styles.mainView}>
                <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[Styles.subView, { flexDirection: viewAlign }]}>
                    <View style={[Styles.view, { flexDirection: viewAlign }]}>
                        <View style={[Styles.view, { flexDirection: viewAlign }]}>
                            <Text style={Styles.priceTxt}>{t(props.price)}</Text>
                            <View>
                                <Text style={Styles.percent}>%</Text>
                                <Text style={Styles.off}>{t('cartlist.off')}</Text>
                            </View>
                        </View>
                        <View style={[commonContext.isRTL ? Styles.titleViewRight : Styles.titleView]}>
                            <Text style={[Styles.titleTxt, { color: colors.text, textAlign: textAlign }]}>{t(props.title)}</Text>
                            <Text style={[Styles.titleTxt, { color: Appcolor.content }]}>{t('cartlist.orderabove')}{commonContext.currSymbol}{(commonContext.currValue * 250).toFixed(2)}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[Styles.useCode, { color: colors.text, }]}>{t('coupon.useCode')}</Text>
                        <Text style={Styles.code}>{t(props.code)}</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
    )
}