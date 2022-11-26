import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { Header } from "../../commonComponents";
import { CommonModal, DeleteProductModal } from "../../otherComponents";
import { useTheme } from "@react-navigation/native";
import MyWishList from "../../assets/icons/myWishList";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import ProductView from "../dashboard/cartList/productView";

export function Wishlist({ navigation }) {

    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();
    const [showLoader, setShowLoader] = useState(true);
    const commonContext = useContext(CommonContext);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'
    const imageAlign = commonContext.isRTL ? -1 : 1

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    const visibleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                imageOnPress={() => navigation.replace('CartList')}
                image={<MyWishList />}
                titleText={t('wishlistPage.myWishlist')} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProductView colors={colors} viewAlign={viewAlign} imageAlign={imageAlign} selfAlign={selfAlign} textAlign={textAlign} showLoader={showLoader} context={commonContext} visibleDeleteModal={visibleModal} navigation={navigation} />
            </ScrollView>
            <CommonModal modal={<DeleteProductModal onPress={visibleModal} />} showModal={showModal} visibleModal={visibleModal} />
        </SafeAreaView>
    )
}