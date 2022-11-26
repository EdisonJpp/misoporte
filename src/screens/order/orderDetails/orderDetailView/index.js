import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import OrderDetail from '../../../../assets/icons/orderDetail';
import Loader from './loader';

export default orderDetailsView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} /> :
            <View style={[Styles.orderDetailView, { flexDirection: props.viewAlign }]}>
                <OrderDetail />
                <View style={Styles.idView}>
                    <Text style={Styles.id}>{props.t('orderSuccessPage.orderID')} : {props.t('orderSuccessPage.id')}  </Text>
                    <Text style={[Styles.orderDeliver, { textAlign: props.textAlign }]}>{props.t('orderDetailPage.orderDelivered')}  </Text>
                </View>
            </View>
    )
}