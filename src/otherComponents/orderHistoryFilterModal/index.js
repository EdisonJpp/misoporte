import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { windowWidth } from '../../theme/appConstant';
import Appcolor from '../../theme/colors';
import Data from '../../utils/json';
import { useTheme } from "@react-navigation/native";
import { OptionButton } from "../../commonComponents";
import { CommonContext } from '../../../App';
import Styles from "./styles";
import { useTranslation } from 'react-i18next';

export function OrderHistoryFilter(props) {

    const { colors } = useTheme();
    const [orderHistory] = useState(Data.orderHistoryFilter)
    const commonContext = useContext(CommonContext);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const { t } = useTranslation();

    const selectOffer = (val) => {
        setSelectedOffer(val)
    }

    return (
        <View style={{ backgroundColor: colors.background, borderTopStartRadius: windowWidth(20), borderTopEndRadius: windowWidth(20), position: 'absolute', bottom: 0, width: '100%' }}>
            <FlatList
                data={orderHistory}
                renderItem={({ item }) =>
                    <View style={Styles.listView}>
                        <Text style={[Styles.dayTxt, { textAlign: props.textAlign }]}>{t(item.day)}</Text>
                        <FlatList
                            data={item.value}
                            numColumns={2}
                            columnWrapperStyle={[Styles.columnWrapperStyle, { flexDirection: props.viewAlign }]}
                            ItemSeparatorComponent={() => <View style={Styles.separator} />}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => selectOffer(item.id)} style={[Styles.dataView, { backgroundColor: item.id === selectedOffer ? Appcolor.primary : commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                                    <Text style={[Styles.txt, { color: item.id === selectedOffer ? Appcolor.white : Appcolor.content }]}>{t(item.txt)}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
            />
            <OptionButton
                txt1={'commonText.close'}
                txt2={'productFilter.apply'}
                onPress1={props.showModal}
                onPress2={props.showModal}
                style={Styles.btn}
            />
        </View>
    )
}