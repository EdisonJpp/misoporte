import React, { useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground } from 'react-native'
import Styles from './styles';
import { windowHeight, windowWidth } from '../../../../theme/appConstant';
import Data from '../../../../utils/json';
import SeeAllHeader from "../seeAllHeader";
import Loader from "./loader";
import Images from '../../../../utils/images/images';

export default coupons = (props) => {

    const [coupons] = useState(Data.coupons);

    return (
        <View style={[Styles.mainView, { backgroundColor: props.colors.primary, marginTop: windowHeight(20) }]}>
            <SeeAllHeader title={props.t('homepage.couponsForYou')} subtitle={props.t('homepage.popularOffer')} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: props.viewAlign }}>
                {props.showLoader ? <Loader context={props.context} /> :
                    coupons.map((item, key) =>
                        <ImageBackground source={
                            props.context.isDark ? key === 0 ?
                                Images.offerBG1Dark :
                                key === 1 ? Images.offerBG2Dark :
                                    Images.offerBG3Dark :
                                key === 0 ?
                                    Images.offerBG1 :
                                    key === 1 ? Images.offerBG2 :
                                        Images.offerBG3
                        } resizeMode='cover' style={[Styles.dataView, { marginLeft: key != 0 ? windowWidth(10) : 0, }]}>
                            <Image source={item.icon} resizeMode='contain' style={Styles.image} />
                            <Text style={Styles.discount}>{item.discount}% {props.t('cartlist.off')}</Text>
                            <Text style={Styles.upto}>{props.t('notificationPage.upto')} {props.context.currSymbol}{(props.context.currValue * item.off).toFixed(2)}</Text>
                        </ImageBackground>
                    )}
            </ScrollView>
        </View>
    )
}