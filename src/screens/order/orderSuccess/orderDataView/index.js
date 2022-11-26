import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Calendar from "../../../../assets/icons/calendar";
import OrderId from "../../../../assets/icons/orderId";
import Loader from './loader';

export default orderDataView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <View style={[Styles.totalView, { flexDirection: props.viewAlign }]}>
                <View style={{ flexDirection: props.viewAlign }}>
                    <View style={Styles.optionView}>
                        <Calendar />
                    </View>
                    <View style={props.context.isRTL ? Styles.optionRight : Styles.option}>
                        <Text style={[Styles.orderDate, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('orderSuccessPage.orderDate')}</Text>
                        <Text style={Styles.date}>{props.t('orderSuccessPage.date')}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: props.viewAlign }}>
                    <View style={Styles.optionView}>
                        <OrderId />
                    </View>
                    <View style={props.context.isRTL ? Styles.optionRight : Styles.option}>
                        <Text style={[Styles.orderDate, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('orderSuccessPage.orderID')}</Text>
                        <Text style={Styles.date}>{props.t('orderSuccessPage.id')}</Text>
                    </View>
                </View>
            </View>
    )
}