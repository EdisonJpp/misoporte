import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import { CommonContext } from '../../../App';
import Appcolor from '../../theme/colors';
import { useTranslation } from 'react-i18next';

export function ContinueButton(props) {

    const commonContext = useContext(CommonContext)
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7} style={[Styles.button, { backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
            <Image source={props.image} style={Styles.buttonImage} />
            <Text style={[Styles.buttonText, { color: commonContext.isDark ? Appcolor.white : Appcolor.title }]}>{t(props.text)}</Text>
        </TouchableOpacity>
    )
}