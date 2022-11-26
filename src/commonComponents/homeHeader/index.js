import React, { useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import Category from '../../assets/icons/category';
import Location from '../../assets/icons/location';
import Images from '../../utils/images/images';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import { windowHeight, windowWidth } from '../../theme/appConstant';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export function HomeHeader(props) {
    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    };
    return (
        <View style={[Styles.mainView, { flexDirection: props.viewAlign }]}>
            <View style={[Styles.view, { flexDirection: props.viewAlign }]}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Category />
                </TouchableOpacity>
                <Image source={commonContext.isDark ? Images.fastKartDark : Images.fastkart} style={[commonContext.isRTL ? Styles.logoRightImg : Styles.logoImg, commonContext.isDark && { height: windowHeight(24), width: windowWidth(160), resizeMode: 'stretch' }]} />
            </View>
            <View style={[Styles.view, { flexDirection: props.viewAlign }]}>
                <Location />
                <Text style={[Styles.locationText, {
                    color: colors.text,
                    marginRight: commonContext.isRTL ? windowWidth(10) : 0,
                    marginLeft: commonContext.isRTL ? windowWidth(0) : windowWidth(16),
                }]}>{t('homeHeader.losAngeles')}</Text>
                <Image source={Images.demoProfile} style={[Styles.profile, commonContext.isRTL ? {
                    marginRight: windowWidth(10),
                } : {
                    marginLeft: windowWidth(16),
                }]} resizeMode='contain' />
            </View>
        </View>
    )
}