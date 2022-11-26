import React, { useState } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Images from '../../../../utils/images/images';
import { windowWidth } from '../../../../theme/appConstant';
import Data from '../../../../utils/json';
import Styles from "./styles";
import Loader from "./loader";

export default recentlyBought = (props) => {

    const [recentlyBought] = useState(Data.recentlyBrought);

    const goToDetail = () => {
        props.navigation.navigate('ProductsDetails');
    }

    return (
        <View style={Styles.mainView}>
            <Image source={props.context.isDark ? Images.recentlyBoughtDark : Images.recentlyBought} style={[Styles.mainView, {
                position: 'absolute',
                transform: [{ scaleX: props.imageAlign }]
            }]} resizeMode='stretch' />
            <Text style={[Styles.recentlyBought, {
                color: props.colors.text,
                textAlign: props.textAlign,
                marginLeft: props.context.isRTL ? windowWidth(0) : windowWidth(20),
                marginRight: props.context.isRTL ? windowWidth(20) : windowWidth(0)
            }]}>{props.t('homepage.recentlyBrought')}</Text>
            <View style={[Styles.imageView, {
                marginLeft: props.context.isRTL ? windowWidth(30) : windowWidth(26),
            }]}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={Styles.container} horizontal>
                    {props.showLoader ?
                        <Loader context={props.context} /> :
                        recentlyBought.map((item, key) =>
                            <TouchableOpacity activeOpacity={0.8} onPress={goToDetail} style={[Styles.recentlyImage, { backgroundColor: props.colors.background, marginLeft: key != 0 ? windowWidth(10) : 0, }]}>
                                <Image source={item.image} style={Styles.image} resizeMode='contain' />
                            </TouchableOpacity>
                        )}
                </ScrollView>
            </View>
        </View >
    )
}