import React, { useState, useContext, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView
} from 'react-native'
import Styles from './styles';
import { Header, Total, Button, AddNew } from "../../commonComponents";
import Appcolor from '../../theme/colors';
import { windowHeight, } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";
import { AddNewCard, CommonModal } from "../../otherComponents";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import SelectValueView from "./selectValueView";
import { CommonContext } from '../../../App';

export function SelectPayment({ navigation }) {

    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext)
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])

    const visibleModal = () => {
        setShowModal(!showModal)
    }

    const goToOrder = () => {
        navigation.replace('OrderSuccess')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <CommonModal
                modal={<AddNewCard showModal={visibleModal} textAlign={textAlign} />}
                showModal={showModal}
                visibleModal={() => setShowModal(false)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('addPaymentPage.addPaymentMethod')} />
                <AddNew onPress={visibleModal} text={'addPaymentPage.addNewCard'} viewAlign={viewAlign} />
                <SelectValueView context={commonContext} colors={colors} t={t} viewAlign={viewAlign} imageAlign={imageAlign} showLoader={showLoader} />
                <Total bottom={windowHeight(80)} style title={'cartPage.orderDetails'} />
            </ScrollView>
            {!showLoader &&
                <Button text={'addPaymentPage.confirmPayment'} style={Styles.btn}
                    color={Appcolor.white} onPress={goToOrder} />}
        </SafeAreaView>
    )
}