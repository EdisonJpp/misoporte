import React, { useState, useContext, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
} from 'react-native'
import Styles from './styles';
import { Header, Total, Button } from "../../../commonComponents";
import Appcolor from '../../../theme/colors';
import { useTheme } from "@react-navigation/native";
import { GlobalStyle } from "../../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import ItemsView from "./itemsView";
import AddressView from "./addressView";
import PaymentMethodView from "./paymentsMethodView";
import OrderDetailView from "./orderDetailView";

export function OrderDetails({ navigation }) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const [showLoader, setShowLoader] = useState(true);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])

    const goToList = () => {
        navigation.replace('ProductsList');
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.replace('Drawer')}
                    showImage={false}
                    isText
                    titleText={t('orderDetailPage.orderSummary')} />
                <OrderDetailView viewAlign={viewAlign} textAlign={textAlign} showLoader={showLoader} context={commonContext} t={t} colors={colors} />
                <ItemsView selfAlign={selfAlign} showLoader={showLoader} viewAlign={viewAlign} textAlign={textAlign} context={commonContext} t={t} colors={colors} />
                <Total color={Appcolor.primary} title={t('orderDetailPage.paymentDetails')} />
                <AddressView selfAlign={selfAlign} showLoader={showLoader} context={commonContext} t={t} colors={colors} textAlign={textAlign} />
                <PaymentMethodView selfAlign={selfAlign} showLoader={showLoader} context={commonContext} t={t} colors={colors} textAlign={textAlign} viewAlign={viewAlign} />
            </ScrollView>
            {!showLoader &&
                <Button text={'orderDetailPage.reorder'} style={Styles.btn}
                    color={Appcolor.white} onPress={goToList} />}
        </SafeAreaView>
    )
}