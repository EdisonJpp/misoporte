import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Loader from './loader';

export default thankYouView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} /> :
            <View>
                <Text style={[Styles.thankyou, { color: props.colors.text }]}>{props.t('orderSuccessPage.thankYouforOrder')}</Text>
                <Text style={Styles.orderSuccessfull}>{props.t('orderSuccessPage.orderSuccessfull')}</Text>
            </View>
    )
}