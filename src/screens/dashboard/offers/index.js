import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Styles from './styles';
import { Header, SearchNFilter } from "../../../commonComponents";
import { OfferFilter, CouponModal, CommonModal } from "../../../otherComponents";
import { useTranslation } from 'react-i18next';
import CouponsView from "./couponsView";

export function offers(props) {

    const [showModal, setShowModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [off, setOff] = useState(null);
    const [subTxt, setSubTxt] = useState(null);
    const [code, setCode] = useState('');
    const { t } = useTranslation();

    const visibleModal = (item) => {
        setOff(item.off)
        setSubTxt(item.onOrderAbove)
        setCode(item.code)
        setShowModal(!showModal)
    }

    const visibleFilterModal = () => {
        setFilterModal(!filterModal)
    }

    return (
        <SafeAreaView style={Styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollView}>
                <Header isText titleText={t('offerPage.myOffers')} onPress={() => props.navigation.goBack()} />
                <SearchNFilter onPress={visibleFilterModal} />
                <CouponsView visibleModal={visibleModal} />
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={t(off)} subTxt={t(subTxt)} code={t(code)} />}
                showModal={showModal}
                visibleModal={visibleModal} />
            <CommonModal
                modal={<OfferFilter showModal={visibleFilterModal} />}
                showModal={filterModal}
                visibleModal={visibleFilterModal} />
        </SafeAreaView>
    )
}