import React, { useContext } from 'react'
import { View, Image, SafeAreaView, Text, ScrollView } from 'react-native'
import Styles from './styles';
import Images from '../../../utils/images/images';
import { ContinueButton } from '../../../commonComponents'
import { useTranslation } from 'react-i18next';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../../App';

export function OnBoarding() {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const commonContext = useContext(CommonContext)

    return (
        <SafeAreaView style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.imageView}>
                    <Image source={Images.onBoarding} style={Styles.image} />
                </View>
                <View style={Styles.contentView}>
                    <Image source={commonContext.isDark ? Images.fastKartDark : Images.fastkart} />
                    <Text style={[Styles.safeDelivery, { color: colors.text }]}>{t('onBoarding.safeDelivery')}</Text>
                    <Text style={Styles.onlineSupermarket}>{t('loginNRegister.onlineSupermarket')}</Text>
                    <ContinueButton image={Images.phone} text={t('loginNRegister.continueWithPhone')} />
                    <ContinueButton image={Images.google} text={t('loginNRegister.continueWithGoogle')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}