import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView,
} from 'react-native'
import Styles from './styles';
import { Header, Button, AddNew } from "../../commonComponents";
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import Search from "../../assets/icons/search";
import { CommonModal, AddAddressModal } from '../../otherComponents';
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import AddressView from "./addressView";

export function SelectAddress({ navigation }) {

    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(false);
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

    const gotoPayment = () => {
        navigation.navigate('SelectPayment')
    }

    const visibleModal = () => [
        setShowModal(!showModal)
    ]

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                image={<Search />}
                isText
                titleText={t('selectDeliveryAddressPage.selectDeliveryAddress')} />
            <AddNew onPress={visibleModal} text={'selectDeliveryAddressPage.addNewAddress'} viewAlign={viewAlign} />
            <AddressView selfAlign={selfAlign} viewAlign={viewAlign} context={commonContext} t={t} colors={colors} textAlign={textAlign} showLoader={showLoader} />
            {!showLoader &&
                <Button text={'selectDeliveryAddressPage.proceedToPayment'} style={Styles.btn}
                    color={Appcolor.white} onPress={gotoPayment} />}
            <CommonModal
                modal={
                    <AddAddressModal textAlign={textAlign} showModal={visibleModal} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />
        </SafeAreaView>
    )
}