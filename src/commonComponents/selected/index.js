import React, { useContext } from 'react';
import { View } from "react-native";
import Styles from "./styles";
import { CommonContext } from '../../../App';
import Select from '../../assets/icons/select';

export function Selected() {

    const commonContext = useContext(CommonContext);

    return (
        <View style={[Styles.selectView, commonContext.isRTL ? Styles.selectRight : Styles.selectLeft]}>
            <Select />
        </View>
    )
}