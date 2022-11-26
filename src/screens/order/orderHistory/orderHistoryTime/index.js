import React, { useState } from 'react'
import {
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Appcolor from '../../../../theme/colors';
import TimeLoader from "./loader";

export default orderHistoryTimeLoaderStyles = (props) => {

    const [orderHistoryTime] = useState(Data.orderHistoryTime);
    const [selected, setSelected] = useState(0)

    const changeSelected = (key) => {
        setSelected(key)
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[Styles.scrollView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
            {props.showLoader ? <TimeLoader context={props.context} /> :
                orderHistoryTime.map((item, key) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => changeSelected(key)}>
                        <Text style={[Styles.time, { color: key === selected ? Appcolor.primary : props.colors.text, }]}>{props.t(item.time)}</Text>
                    </TouchableOpacity>
                )
            }
        </ScrollView>
    )
}