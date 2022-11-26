import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../../theme/colors';
import Data from "../../../utils/json";
import Loader from "./loader";

export default notificationsView = (props) => {

    const [notification] = useState(Data.notification)

    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <FlatList
                data={notification}
                contentContainerStyle={Styles.list}
                renderItem={({ item }) =>
                    <View style={Styles.dataView}>
                        <Text style={Styles.day}>{props.t(item.day)}</Text>
                        {item.value.map((data) =>
                            <View style={[Styles.value, { flexDirection: props.viewAlign }]}>
                                <View style={[Styles.icon, { backgroundColor: data.color }]}>
                                    {data.icon}
                                </View>
                                <View style={[Styles.titleView, { flexDirection: props.viewAlign }]}>
                                    <View style={Styles.offerLeft}>
                                        <Text style={[Styles.title, { color: props.colors.text }]}>{data.color === Appcolor.topUp && props.context.currSymbol}{data.color === Appcolor.topUp && (props.context.currValue * 200).toFixed(2)}{props.t(data.title)}</Text>
                                        <Text style={[Styles.subTxt, { textAlign: props.textAlign }]}>{props.t(data.subtxt)}</Text>
                                    </View>
                                    <Text style={[Styles.tag, { backgroundColor: props.colors.primary }]}>{props.t(data.tag)}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                }
            />
    )
}