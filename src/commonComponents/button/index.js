import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import { useTranslation } from 'react-i18next';

export function Button(props) {
    const { t } = useTranslation();
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[props.style, Styles.button]}>
            <Text style={[Styles.buttonText, { color: props.color }]}>{t(props.text)}</Text>
        </TouchableOpacity>
    )
}