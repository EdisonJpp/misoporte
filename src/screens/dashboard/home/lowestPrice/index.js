import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import Styles from './styles';
import { windowHeight, windowWidth } from '../../../../theme/appConstant';
import Appcolors from '../../../../theme/colors';
import Data from '../../../../utils/json';
import Increase from '../../../../assets/icons/+';
import SeeAllHeader from "../seeAllHeader";
import Wishlist from '../../../../assets/icons/wishlist';
import Loader from "./loader";

export default lowestPrice = (props) => {

    const [lowestPrice] = useState(Data.lowestPrice);

    return (
        <View style={Styles.mainView}>
            <SeeAllHeader onPress={props.onPress} title={props.title} subtitle={props.subtitle} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.showLoader ? <Loader context={props.context} /> :
                    lowestPrice.map((item, key) =>
                        <TouchableOpacity key={key} style={Styles.lowestPriceView} activeOpacity={0.8} onPress={() => props.navigation.push('ProductsDetails')}>
                            <Image resizeMode='contain' source={item.image} style={Styles.image} />
                            <Text style={[Styles.name, { color: props.colors.text, textAlign: props.textAlign }]} numberOfLines={2}>{props.t(item.name)}</Text>
                            <Text style={[Styles.gram, { textAlign: props.textAlign }]}>{props.t(item.weight)}</Text>
                            <View style={[Styles.priceView, { flexDirection: props.viewAlign }]}>
                                <Text style={[Styles.price, { color: props.colors.text }]}>{props.context.currSymbol}{(props.context.currValue * item.price).toFixed(2)}</Text>
                                <View style={Styles.increase}>
                                    <Increase height={windowHeight(18)} width={windowWidth(18)} color={Appcolors.white} />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={Styles.wishList}>
                                <Wishlist />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    )
}