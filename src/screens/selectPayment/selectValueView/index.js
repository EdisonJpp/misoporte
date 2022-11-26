import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import Styles from './styles';
import Data from '../../../utils/json';
import SideArrow from "../../../assets/icons/sideArrow";
import Select from "../../../assets/icons/selected";
import UnSelected from "../../../assets/icons/unSelected";
import { Selected } from "../../../commonComponents";
import Loader from "./loader";

export default selectValueView = (props) => {

    const [payments] = useState(Data.payments);
    const [selectedPayment, setSelectedPayments] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState(0);

    const selectPayment = (payment) => {
        setSelectedMethod(0);
        setSelectedPayments(payment);
    }

    const selectMethod = (method) => {
        setSelectedMethod(method)
    }

    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} /> :
            <FlatList
                showsVerticalScrollIndicator={false}
                data={payments}
                ItemSeparatorComponent={() => <View style={Styles.separator} />}
                style={Styles.list}
                renderItem={({ item, index }) =>
                    <View style={Styles.listView}>
                        <TouchableOpacity onPress={() => selectPayment(index)} style={[Styles.arrowView, { flexDirection: props.viewAlign }]}>
                            <Text style={[Styles.type, { color: props.colors.text }]}>{props.t(item.type)}</Text>
                            <View style={[Styles.arrow, { backgroundColor: props.colors.primary, transform: [{ scaleX: props.imageAlign }] }]}>
                                <SideArrow />
                            </View>
                        </TouchableOpacity>
                        {selectedPayment === index ?
                            item.isCard ?
                                item.values.map((data, key) =>
                                    <TouchableOpacity onPress={() => selectMethod(key)} activeOpacity={0.7} style={[Styles.select, { borderWidth: selectedMethod === key ? 1 : 0, flexDirection: props.viewAlign }]}>
                                        <Image source={data.icons} style={Styles.icon} />
                                        <Text style={[Styles.value, { color: props.colors.text }]}>{props.t(data.value)}  </Text>
                                        {selectedMethod === key &&
                                            <Selected />}
                                    </TouchableOpacity>
                                )
                                :
                                <FlatList
                                    data={item.values}
                                    numColumns={2}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    renderItem={({ item, index }) =>
                                        <View style={[Styles.valueList, props.context.isRTL && { justifyContent: 'space-between' }, { flexDirection: props.viewAlign }]}>
                                            <TouchableOpacity activeOpacity={0.7} onPress={() => selectMethod(index)}>
                                                {selectedMethod === index ? <Select /> : <UnSelected />}
                                            </TouchableOpacity>
                                            <Text style={[Styles.valueTxt, props.context.isRTL ? Styles.valueRight : Styles.valueLeft, { color: props.colors.text, }]}>{props.t(item.value)}</Text>
                                        </View>
                                    }
                                />
                            : null}
                    </View>
                }
            />
    )
}