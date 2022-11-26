import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from "@react-navigation/native";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../../App';

export default seeAllHeader = (props) => {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const context = useContext(CommonContext);

    return (
        <View style={[Styles.mainView, {
            flexDirection: context.isRTL ? 'row-reverse' : 'row'
        }]}>
            <View>
                <Text style={[Styles.title, { color: colors.text, textAlign: context.isRTL ? 'right' : 'left' }]}>{t(props.title)}</Text>
                <Text style={Styles.subTitle}>{t(props.subtitle)}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <Text style={Styles.seeAll}>{t('homepage.seeAll')}</Text>
            </TouchableOpacity>
        </View>
    )
}