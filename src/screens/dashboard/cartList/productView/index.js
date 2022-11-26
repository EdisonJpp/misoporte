import React, { useState } from 'react';
import Styles from './styles';
import { Product } from "../../../../commonComponents";
import Data from '../../../../utils/json';
import Appcolor from '../../../../theme/colors';
import { windowHeight, windowWidth } from '../../../../theme/appConstant';
import Delete from "../../../../assets/icons/delete";
import Swipeout from 'react-native-swipeout';
import { ProductLoader } from "../../../../commonComponents/product/loader";

export default productView = (props) => {

    const [cartList] = useState(Data.offers);

    var swipeoutBtns = [
        {
            text: <Delete />,
            backgroundColor: Appcolor.primary,
            onPress: () => props.visibleDeleteModal()
        }
    ]

    const goToDetail = () => {
        props.navigation.navigate('ProductsDetails')
    }

    return (
        props.showLoader ? <ProductLoader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            cartList.map((item) =>
                <Swipeout buttonWidth={windowWidth(90)} openLeft={false} right={swipeoutBtns} style={[Styles.swipeOut, { backgroundColor: props.colors.background }]}>
                    <Product
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                        discount={item.discount}
                        paddingRight={windowHeight(10)}
                        onPress={goToDetail}
                        viewAlign={props.viewAlign}
                        imageAlign={props.imageAlign}
                        textAlign={props.textAlign}
                    />
                </Swipeout>
            )
    )
}