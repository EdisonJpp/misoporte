import React, { useContext } from 'react';
import { View } from "react-native";
import Appcolor from '../../theme/colors';
import { Button } from "../../commonComponents";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';

export function OptionButton(props) {

    const { t } = useTranslation();
    const commonContext = useContext(CommonContext)
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'

    return (
        <View style={[props.style ? props.style : Styles.mainView, { flexDirection: viewAlign }]}>
            <Button text={t(props.txt1)} style={Styles.closeBtn} color={Appcolor.primary} onPress={props.onPress1} />
            <Button text={t(props.txt2)} style={Styles.applyBtn} color={Appcolor.white} onPress={props.onPress2} />
        </View>
    )
}