
import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Loader from './loader';

export default addressView = (props) => {
    return (
        <View style={Styles.dataView}>
            <Text style={[Styles.addTxt, { textAlign: props.textAlign }]}>{props.t('orderDetailPage.address')}</Text>
            {props.showLoader ? <Loader context={props.context} selfAlign={props.selfAlign} /> :
                <View>
                    <Text style={[Styles.name, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('orderTrackingPage.name')}</Text>
                    <Text style={[Styles.locationTxt, { textAlign: props.textAlign }]}>{props.t('orderTrackingPage.location')}</Text>
                </View>}
        </View>
    )
}