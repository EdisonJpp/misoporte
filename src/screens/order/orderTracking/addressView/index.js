import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../../../theme/colors';
import Images from '../../../../utils/images/images';
import Home from '../../../../assets/icons/home';
import Location from '../../../../assets/icons/location';
import Loader from "./loader";

export default addressView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <View style={[Styles.location, { flexDirection: props.viewAlign }]}>
                <View>
                    <Image source={Images.seprator} style={Styles.sepratorImg} />
                    <View style={Styles.homeView}>
                        <View style={[Styles.option, { backgroundColor: Appcolor.primary, }]}>
                            <Home color />
                        </View>
                        <View style={[Styles.option, { backgroundColor: Appcolor.primary, }]}>
                            <Location color />
                        </View>
                    </View>
                </View>
                <View style={[Styles.storeLocation, props.context.isRTL ? Styles.storeLeft : Styles.storeRight]}>
                    <View>
                        <Text style={[Styles.locationTxt, { color: props.colors.text }]}>{props.t('orderTrackingPage.location')}</Text>
                        <Text style={[Styles.storeLocationTxt, { textAlign: props.textAlign }]}>{props.t('orderTrackingPage.storeLocation')}</Text>
                    </View>
                    <View>
                        <Text style={[Styles.locationTxt, { color: props.colors.text }]}>{props.t('orderTrackingPage.location')}</Text>
                        <Text style={[Styles.storeLocationTxt, { textAlign: props.textAlign }]}>{props.t('orderTrackingPage.deliveryLocation')}</Text>
                    </View>
                </View>
            </View>
    )
}