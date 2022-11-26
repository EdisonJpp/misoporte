import React from 'react';
import {
    View
} from 'react-native';
import Styles from './styles';
import { Button, Total } from "../../../../commonComponents";
import Appcolor from "../../../../theme/colors";

export default totalView = (props) => {

    const goToAddress = () => {
        props.navigation.navigate('AddAddress');
    }
    return (
        <View style={Styles.total}>
            <Total title={props.t('cartPage.orderDetails')} />
            {!props.showLoader &&
                <Button text={'commonTotal.proceedtoCheckout'} style={Styles.btn}
                    color={Appcolor.white} onPress={goToAddress} />}
        </View>
    )
}