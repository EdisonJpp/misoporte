import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Header, Coupon } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { CouponModal, CommonModal, DeleteProductModal } from "../../../otherComponents";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import ProductView from "./productView";
import TotalView from "./totalView";

export function CartList({ navigation }) {

    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { t } = useTranslation();
    const [showLoader, setShowLoader] = useState(true);
    const commonContext = useContext(CommonContext);
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    const visibleModal = () => {
        setShowModal(!showModal)
    }
    const visibleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={t('cartPage.myCart')} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProductView viewAlign={viewAlign} imageAlign={imageAlign} selfAlign={selfAlign} colors={colors} showLoader={showLoader} context={commonContext} visibleDeleteModal={visibleDeleteModal} navigation={navigation} />
                <Coupon price={50} onPress={visibleModal} title={'myOffersArr.onOrder'} subTxt={'250.00'} code={'SCD450'} />
                <TotalView t={t} showLoader={showLoader} navigation={navigation} />
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={50} subTxt={'250.00'} code={'SCD450'} />}
                showModal={showModal}
                visibleModal={visibleModal} />
            <CommonModal
                modal={<DeleteProductModal onPress={visibleDeleteModal} />}
                showModal={showDeleteModal}
                visibleModal={visibleDeleteModal} />
        </SafeAreaView>
    )
}