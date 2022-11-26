import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import Styles from './styles';
import VoiceSearch from '../../../assets/icons/voiceSearch';
import Search from '../../../assets/icons/search';
import { Input, Header } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import Images from '../../../utils/images/images';
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import CategoryView from "./categoryView";
import BannerView from "./bannerView";
import SubCategoryView from "./subCategoryView";

export function category({ navigation }) {

    const [subCategory, setSubCategory] = useState([]);
    const commonContext = useContext(CommonContext);
    const { colors } = useTheme();
    const { t } = useTranslation();
    const [showLoader, setShowLoader] = useState(true);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])
    const getValue = (arr) => {
        setSubCategory(arr)
    }

    return (
        <SafeAreaView style={Styles.mainView}>
            <Header
                onPress={() => navigation.goBack()}
                darkImage={Images.fastKartDark}
                lightImage={Images.fastkart}
                darkStyle={Styles.darkStyle}
                showImage
                image={Images.offer} />
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollView}>
                <Input placeholder={t('commonText.searchProducts')} rightIcon={<VoiceSearch />} leftIcon={<Search />} />
                <View style={[Styles.dataView, { flexDirection: viewAlign }]}>
                    <CategoryView showLoader={showLoader} textAlign={textAlign} context={commonContext} t={t} colors={colors} getValue={getValue} />
                    <View style={[commonContext.isRTL ? Styles.vegies : Styles.vegiesRight]}>
                        <BannerView context={commonContext} textAlign={textAlign} imageAlign={imageAlign} t={t} showLoader={showLoader} />
                        <SubCategoryView subCategory={subCategory} colors={colors} context={commonContext} t={t} navigation={navigation} showLoader={showLoader} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}