import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native'
import Styles from './styles';
import { Header, Total, Button } from "../../../commonComponents";
import Appcolor from '../../../theme/colors';
import { windowHeight } from '../../../theme/appConstant';
import { useTheme } from "@react-navigation/native";
import Images from '../../../utils/images/images';
import Category from "../../../assets/icons/category";
import { GlobalStyle } from "../../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import ThankyouView from "./thankYouView";
import OrderDataView from "./orderDataView";

export function OrderSuccess({ navigation }) {

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
    const goToTracking = () => {
        navigation.replace('OrderTracking')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.toggleDrawer()}
                    isText={false}
                    showImage={false}
                    firstIcon={<Category />}
                    lightImage={Images.fastkart}
                    darkImage={Images.fastKartDark} />
                <Image source={Images.orderSuccess} style={Styles.orderSuccess} />
                <ThankyouView showLoader={showLoader} context={commonContext} t={t} colors={colors} />
                <OrderDataView showLoader={showLoader} selfAlign={selfAlign} viewAlign={viewAlign} context={commonContext} textAlign={textAlign} t={t} colors={colors} />
                <Total bottom={windowHeight(80)} style title={'orderTrackingPage.orderDetails'} />
            </ScrollView>
            {!showLoader &&
                <Button text={'orderSuccessPage.trackOnMap'} style={Styles.btn} color={Appcolor.white} onPress={goToTracking} />}
        </SafeAreaView>
    )
}