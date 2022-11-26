import React, { useState } from 'react'
import { View } from 'react-native'
import Styles from './styles';
import { Coupon } from "../../../../commonComponents";
import Data from '../../../../utils/json';

export default couponsView = (props) => {

    const [myOffers] = useState(Data.myOffers);

    return (
        <View style={Styles.coupon}>
            {myOffers.map((item) =>
                <Coupon
                    price={item.off}
                    title={item.onOrder}
                    code={item.code}
                    onPress={() => props.visibleModal(item)}
                />
            )}
        </View>

    )
}