import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Appcolor from '../../theme/colors';
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import { OptionButton } from "../../commonComponents";
import { CommonContext } from '../../../App';
import Styles from "./styles";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';

export function OfferFilter(props) {

    const { colors } = useTheme();
    const [offersFilter] = useState(Data.offersFilter)
    const commonContext = useContext(CommonContext);
    const [selectedOffer] = useState(0);
    const { t } = useTranslation();
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const textAlign = commonContext.isRTL ? 'right' : 'left'

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[Styles.filter, { color: colors.text, textAlign: textAlign }]}>{t('commonText.filter')}</Text>
            <FlatList
                data={offersFilter}
                numColumns={2}
                columnWrapperStyle={[Styles.columnWrapperStyle, { flexDirection: viewAlign }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.7}
                        style={[Styles.listView, {
                            backgroundColor: selectedOffer === index ? Appcolor.primary : commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray,
                            borderColor: commonContext.isDark ? Appcolor.gray : Appcolor.primary
                        }]}>
                        <Text style={[Styles.txt, {
                            color: (selectedOffer === index || commonContext.isDark) && Appcolor.white
                        }]}>{t(item.offer)}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton
                txt1={'commonText.close'}
                txt2={'productFilter.apply'}
                onPress1={props.showModal}
                onPress2={props.showModal}
            />
        </View>
    )
}