import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'
import Styles from './styles';
import { useTranslation } from 'react-i18next';

export function AddNew(props) {

    const { t } = useTranslation();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[Styles.newAddView, { flexDirection: props.viewAlign }]}>
            <Text style={Styles.addAdd}>+</Text>
            <Text style={Styles.addAdd}>  {t(props.text)}  </Text>
        </TouchableOpacity>
    )
}