import React from 'react';
import { View } from 'react-native'
import SeeAllHeader from "../seeAllHeader";
import { Product } from "../../../../commonComponents";
import Styles from "./styles";
import { ProductLoader } from "../../../../commonComponents/product/loader";
import { windowHeight, windowWidth } from '../../../../theme/appConstant';

export default offers = (props) => {

    const offers = props.data;
    const goToDetail = () => {
        props.navigation.navigate('ProductsDetails')
    }

    return (
        <View style={[Styles.mainView, props.showLoader ? { paddingVertical: windowHeight(20) } : { padding: windowWidth(20) }, { backgroundColor: props.colors.primary, }]}>
            {!props.showHeader &&
                <SeeAllHeader title={props.t('homepage.sayHelloOffers')} subtitle={props.t('homepage.bestPrice')} />}
            {props.showLoader ? <ProductLoader context={props.context} colors={props.colors}
                viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
                offers.map((item) =>
                    <Product
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                        discount={item.discount}
                        showColor
                        onPress={goToDetail}
                        textAlign={props.textAlign}
                        viewAlign={props.viewAlign}
                        imageAlign={props.imageAlign}
                    />
                )}
        </View>
    )
}