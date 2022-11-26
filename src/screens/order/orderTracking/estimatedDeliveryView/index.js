import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Loader from './loader';

export default estimatedDeliveryView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} /> :
            <View>
                <Text style={Styles.deliveryTime}>{props.t('orderTrackingPage.estimatedDeliveryTime')}</Text>
                <Text style={Styles.trackingTime}>{props.t('orderTrackingPage.trackingTime')}</Text>
            </View>
    )
}