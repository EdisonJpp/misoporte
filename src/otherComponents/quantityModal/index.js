import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import Styles from "./styles";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import Appcolor from '../../theme/colors';
import { OptionButton, Selected } from "../../commonComponents";

export function QuanitityModal(props) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(Data.quantity);
    const [selectQty, setSelectQty] = useState(0);
    const commonContext = useContext(CommonContext);

    const selectQuantity = (key) => {
        setSelectQty(key)
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <FlatList
                numColumns={2}
                data={quantity}
                columnWrapperStyle={[Styles.column, { flexDirection: props.viewAlign }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectQuantity(index)} style={[{ backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray, borderColor: selectQty === index ? Appcolor.primary : Appcolor.gray }, Styles.view]}>
                        {selectQty === index &&
                            <Selected />}
                        <Text style={[Styles.txt, { color: colors.text, textAlign: props.textAlign }]}>{t(item.gram)} / {commonContext.currSymbol}{(commonContext.currValue * item.price).toFixed(2)}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={'commonText.cancle'} txt2={'productFilter.apply'} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}