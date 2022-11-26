import React, { useState, useContext, useEffect } from 'react'
import {
    SafeAreaView,
} from 'react-native'
import { Header, SearchNFilter } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { OrderHistoryFilter, CommonModal } from "../../../otherComponents";
import { CommonContext } from '../../../../App';
import { useTranslation } from 'react-i18next';
import OrderHistoryTime from "./orderHistoryTime";
import ItemsView from "./itemsView";

export function OrderHistory({ navigation }) {

    const { colors } = useTheme();
    const [filterModal, setFilterModal] = useState(false);
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();
    const [showLoader, setShowLoader] = useState(true);
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'
    const textAlign = commonContext.isRTL ? 'right' : 'left'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])

    const visibleFilterModal = (item) => {
        setFilterModal(!filterModal)
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, }}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={t('orderHistoryPage.orderHistoryTxt')} />
            <OrderHistoryTime showLoader={showLoader} context={commonContext} viewAlign={viewAlign} t={t} colors={colors} />
            <SearchNFilter onPress={visibleFilterModal} />
            <ItemsView showLoader={showLoader} selfAlign={selfAlign} context={commonContext} viewAlign={viewAlign} t={t} colors={colors} navigation={navigation} />
            <CommonModal modal={<OrderHistoryFilter showModal={visibleFilterModal} textAlign={textAlign} viewAlign={viewAlign} />} showModal={filterModal} visibleModal={visibleFilterModal} />
        </SafeAreaView>
    )
}