import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import Picker from "./picker";
import { OptionButton } from "../../commonComponents";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import RangeSlider from "./rangeSlider";
import { GlobalStyle } from '../../style';
import Appcolor from '../../theme/colors';

export function ProductFilter(props) {

    const [low, setLow] = useState();
    const [high, setHigh] = useState();
    const [packSize] = useState(Data.packSize)
    const [select, setSelect] = useState()
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);

    const getValue = (low, high) => {
        setLow(low);
        setHigh(high);
    };
    const { colors } = useTheme();

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <View style={[Styles.category, { flexDirection: props.viewAlign }]}>
                <Text style={[Styles.categoryTxt, { color: colors.text }]}>{t('tabBar.category')}</Text>
                <Text style={Styles.reset}>{t('productFilter.reset')}</Text>
            </View>
            <Text style={[Styles.packSize, { color: colors.text, textAlign: props.textAlign }]}>{t('productFilter.packSize')}</Text>
            <FlatList
                columnWrapperStyle={[Styles.list, { flexDirection: props.viewAlign }]}
                contentContainerStyle={Styles.list}
                data={packSize}
                ItemSeparatorComponent={() => <View style={Styles.seprator} />}
                numColumns={2}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setSelect(index)} style={[Styles.sizeView, { backgroundColor: select === index ? Appcolor.primary : colors.background }]}>
                        <Text style={[Styles.size, {
                            color: select === index ? Appcolor.white : Appcolor.content
                        }]}>{t(item.size)}</Text>
                    </TouchableOpacity>
                }
            />
            <Text style={[Styles.priceRange, { color: colors.text, textAlign: props.textAlign }]}>{t('productFilter.priceRange')}</Text>
            <RangeSlider
                t={t}
                setValue={getValue}
            />
            <View style={Styles.rangeView}>
                <Text>{commonContext.currSymbol}{low}</Text>
                <Text>{commonContext.currSymbol}{high}</Text>
            </View>
            <OptionButton txt1={'commonText.close'} txt2={t('productFilter.apply')} onPress1={props.showModal} onPress2={props.showModal} />
            <Picker viewAlign={props.viewAlign} textAlign={props.textAlign} />
        </View>
    )
}