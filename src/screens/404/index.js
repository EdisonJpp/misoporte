import React, { useContext } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
} from 'react-native'
import Styles from './styles';
import { HomeHeader, Button } from "../../commonComponents";
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import Images from '../../utils/images/images';
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';

export function NotFound({ navigation, props }) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'

    return (
        <SafeAreaView style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <HomeHeader navigation={navigation} viewAlign={viewAlign} />
            <View style={Styles.subView}>
                <Image resizeMode='contain' source={Images.notFound} />
                <Text style={[Styles.notFound, { color: colors.text }]}>{t('404.pageNotFound')}</Text>
                <View style={Styles.line} />
                <Text style={Styles.notExist}>{t('404.pageNotExist')}</Text>
                <Button text={'404.backToHome'} style={Styles.btn}
                    color={Appcolor.white} />
            </View>
        </SafeAreaView>
    )
}