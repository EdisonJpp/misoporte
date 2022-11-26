import React, { useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import { Counter } from "../";
import { useTranslation } from 'react-i18next';

export function Product(props) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();

    return (
        <View style={[Styles.mainView, {
            flexDirection: props.viewAlign,
            backgroundColor: props.showColor ? colors.background : commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray
        }]}>
            <Image source={props.image} style={Styles.image} resizeMode='contain' />
            <View style={Styles.lineView} />
            <View style={Styles.counterView}>
                <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
                    <Text style={[Styles.name, {
                        color: colors.text,
                        textAlign: props.textAlign
                    }]}>{t(props.name)}</Text>
                    <Text style={[Styles.weight, {
                        textAlign: props.textAlign
                    }]}>{t(props.weight)}</Text>
                </TouchableOpacity>
                <View style={[Styles.priceView, {
                    paddingRight: props.paddingRight,
                    flexDirection: props.viewAlign,
                }]}>
                    <View style={[Styles.discountPriceView, {
                        flexDirection: props.viewAlign,
                    }]}>
                        <Text style={[Styles.price, { color: colors.text }]}>{commonContext.currSymbol}{(commonContext.currValue * props.price).toFixed(2)}</Text>
                        <View style={[Styles.discountView, {
                            flexDirection: props.viewAlign,
                        }]}>
                            <Text style={Styles.discount}>{t(props.discount)}% </Text>
                            <Text style={Styles.discount}>{t('cartlist.off')}</Text>
                        </View>
                    </View>
                    <Counter context={commonContext} viewAlign={props.viewAlign} />
                </View>
            </View>
        </View>
    )
}