import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './styles';
import Images from '../../../../utils/images/images';
import Loader from "./loader";

export default bannerView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} /> :
            <View style={Styles.view}>
                <Image style={[Styles.bannerImg, {
                    transform: [{ scaleX: props.imageAlign }]
                }]} source={Images.banner1} />
                <View style={Styles.contentView}>
                    <Text style={[Styles.title, { textAlign: props.textAlign }]}>{props.t('homepage.farmFreshVegies')}</Text>
                    <Text style={[Styles.subTitle, { textAlign: props.textAlign }]}>{props.t('homepage.getInstantDelivery')}</Text>
                </View>
            </View>
    )
}