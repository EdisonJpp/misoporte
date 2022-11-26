import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import Styles from './styles';
import VoiceSearch from '../../../assets/icons/voiceSearch';
import Search from '../../../assets/icons/search';
import { HomeHeader, Input } from "../../../commonComponents";
import Data from '../../../utils/json';
import { useTheme } from "@react-navigation/native";
import Offers from "../home/offers";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import TrendingCategoryView from "./trendingCategoryView";
import RecentlySearchView from "./recentlySearchView";

export function search({ navigation }) {

    const [showLoader, setShowLoader] = useState(true);
    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={Styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollView}>
                <HomeHeader textAlign={textAlign}
                    viewAlign={viewAlign} navigation={navigation} />
                <Input placeholder={t('commonText.searchProducts')} rightIcon={<VoiceSearch />} leftIcon={<Search />} />
                <RecentlySearchView textAlign={textAlign}
                    viewAlign={viewAlign} colors={colors} t={t} showLoader={showLoader} context={commonContext} />
                <TrendingCategoryView textAlign={textAlign}
                    viewAlign={viewAlign} colors={colors} t={t} showLoader={showLoader} context={commonContext} />
                <Text style={[Styles.txt, { color: colors.text }]}>{t('searchPage.trendingProducts')}</Text>
                <Offers data={Data.offers} showHeader showLoader={showLoader} colors={colors} context={commonContext} textAlign={textAlign}
                    viewAlign={viewAlign} selfAlign={selfAlign} />
            </ScrollView>
        </SafeAreaView>
    )
}