import React, { useState } from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Into from '../../../../assets/icons/into';
import Loader from './loader';

export default ItemsView = (props) => {

    const [orderDetails] = useState(Data.orderDetails);

    return (
        <View>
            <Text style={Styles.item}>{props.t('orderDetailPage.items')}</Text>
            {props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
                orderDetails.map((item) =>
                    <View style={[Styles.listView, { flexDirection: props.viewAlign }]}>
                        <Text style={Styles.quantityTxt}>{item.quantity}</Text>
                        <Into />
                        <View style={Styles.nameView}>
                            <Text style={[Styles.nameTxt, { color: props.colors.text }]}>{props.t(item.name)}</Text>
                            <Text style={[Styles.gramTxt, { textAlign: props.textAlign }]}>{props.t(item.gram)}</Text>
                        </View>
                        <Text style={[Styles.price, { color: props.colors.text }]}>{props.context.currSymbol}{item.price}</Text>
                    </View>
                )}
        </View>
    )
}