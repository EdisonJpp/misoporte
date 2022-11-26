import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView,
    View,
    ScrollView,
} from 'react-native'
import Styles from './styles';
import { Header, Button } from "../../../commonComponents";
import Appcolor from '../../../theme/colors';
import { useTheme } from "@react-navigation/native";
import Images from '../../../utils/images/images';
import { GlobalStyle } from "../../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import MapImageView from "./mapimageView";
import EstimatedDeliveryView from "./estimatedDeliveryView";
import UserDetailView from "./userDetailView";
import AddressView from "./addressView";

export function OrderTracking({ navigation }) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();
    const [showLoader, setShowLoader] = useState(true);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])

    const goToDetails = () => {
        navigation.replace('OrderDetails')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText={false}
                showImage={false}
                lightImage={Images.fastkart}
                darkImage={Images.fastKartDark} />
            <MapImageView showLoader={showLoader} context={commonContext} />
            <View style={Styles.subView}>
                <View style={[Styles.view, { backgroundColor: colors.background }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <EstimatedDeliveryView showLoader={showLoader} context={commonContext} t={t} />
                        <UserDetailView selfAlign={selfAlign} viewAlign={viewAlign} textAlign={textAlign} showLoader={showLoader} context={commonContext} t={t} colors={colors} />
                        <AddressView selfAlign={selfAlign} textAlign={textAlign} viewAlign={viewAlign} showLoader={showLoader} context={commonContext} t={t} colors={colors} />
                        {!showLoader &&
                            <Button text={'orderTrackingPage.orderDetails'} style={Styles.btn}
                                color={Appcolor.white} onPress={goToDetails} />}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}