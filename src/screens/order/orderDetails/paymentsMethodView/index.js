import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import Styles from './styles';
import Images from '../../../../utils/images/images';
import Loader from './loader';

export default paymentMethodView = (props) => {
    return (
        <View style={Styles.paymentView}>
            <Text style={[Styles.addTxt, { textAlign: props.textAlign }]}>{props.t('orderDetailPage.paymentMethod')}</Text>
            {props.showLoader ? <Loader context={props.context} selfAlign={props.selfAlign} viewAlign={props.viewAlign} /> :
                <View style={[Styles.number, { flexDirection: props.viewAlign }]}>
                    <Image source={Images.mastercard} style={Styles.masterCardImg} />
                    <Text style={[Styles.cardNumber, { color: props.colors.text }]}>{props.t('orderDetail.cardNumber')}  </Text>
                </View>}
        </View>
    )
}