import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import Styles from './styles';

export default supportView = (props) => {
    return (
        <View style={[Styles.supportView, { backgroundColor: props.colors.primary, }]}>
            <Text style={[Styles.supportTxt, {
                color: props.colors.text
            }]}>{props.t('drawer.contactSupport')}</Text>
            <Text style={Styles.reactOut}>{props.t('drawer.reactOut')}</Text>
            <TouchableOpacity style={Styles.contactUs}>
                <Text style={Styles.contactUsTxt}>{props.t('drawer.contactUs')}</Text>
            </TouchableOpacity>
        </View>


    )
}