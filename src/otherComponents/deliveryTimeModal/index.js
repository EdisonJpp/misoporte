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

export function DeliveryTimeModal(props) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [delivery] = useState(Data.delivery);
    const [selectDeli, setSelectDeli] = useState(0);
    const commonContext = useContext(CommonContext);

    const selectDelivery = (key) => {
        setSelectDeli(key)
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <FlatList
                numColumns={2}
                data={delivery}
                columnWrapperStyle={[Styles.column, { flexDirection: props.viewAlign }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectDelivery(index)} style={[{ backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray, borderColor: selectDeli === index ? Appcolor.primary : Appcolor.gray }, Styles.view]}>
                        {selectDeli === index &&
                            <Selected />}
                        <Text style={[Styles.text, { color: colors.text, textAlign: props.textAlign }]}>{t(item.delivery)}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={'commonText.cancle'} txt2={'productFilter.apply'} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}