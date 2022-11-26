import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Styles from './styles';
import VoiceSearch from '../../../assets/icons/voiceSearch';
import Search from '../../../assets/icons/search';
import { HomeHeader, Input } from "../../../commonComponents";
import Slider from "./slider";
import RecentlyBought from "./recentlyBought";
import ShopByCategory from "./shopByCategory";
import Offers from "./offers";
import LowestPrice from "./lowestPrice";
import Coupons from "./coupons";
import NotFound from "./notFound";
import Data from '../../../utils/json';
import { useTranslation } from 'react-i18next';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../../App';

export function home({ navigation }) {

    const { colors } = useTheme();
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

    return (
        <SafeAreaView style={Styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollView}>
                <HomeHeader textAlign={textAlign}
                    viewAlign={viewAlign}
                    navigation={navigation} />
                <Input placeholder={'commonText.searchProducts'} rightIcon={<VoiceSearch />} leftIcon={<Search />} />
                <Slider t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    selfAlign={selfAlign}
                    imageAlign={imageAlign}
                    navigation={navigation} />
                <RecentlyBought navigation={navigation} t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    context={commonContext}
                    imageAlign={imageAlign}
                    colors={colors} />
                <ShopByCategory t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    colors={colors}
                    navigation={navigation} />
                <Offers data={Data.offers} navigation={navigation} t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    selfAlign={selfAlign}
                    imageAlign={imageAlign}
                    colors={colors} />
                <LowestPrice navigation={navigation} title={'homepage.lowestPrice'} subtitle={'homepage.payless'} onPress={() => navigation.navigate('ProductsList')} t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    colors={colors} />
                <LowestPrice navigation={navigation} title={'homepage.everydayEssentials'} subtitle={'homepage.bestPrice'} t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    colors={colors} />
                <Coupons t={t} showLoader={showLoader}
                    viewAlign={viewAlign}
                    context={commonContext}
                    colors={colors} />
                <LowestPrice navigation={navigation} title={'homepage.lowestPrice'} subtitle={'homepage.payless'} t={t} showLoader={showLoader}
                    textAlign={textAlign}
                    viewAlign={viewAlign}
                    context={commonContext}
                    colors={colors} />
                <NotFound t={t}
                    textAlign={textAlign}
                    selfAlign={selfAlign} />
            </ScrollView>
        </SafeAreaView>
    )
}