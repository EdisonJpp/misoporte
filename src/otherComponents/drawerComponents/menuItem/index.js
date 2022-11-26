import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { windowWidth } from '../../../theme/appConstant';
import Appcolor from '../../../theme/colors';
import DrawerArrow from '../../../assets/icons/drawerArrow';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../../App';
import Styles from "./styles";
import { useTranslation } from 'react-i18next';

export default menuItem = (props) => {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[Styles.mainView, { width: props.width ? props.width : props.showSwitch ? windowWidth(260) : windowWidth(320), flexDirection: viewAlign }]}>
            <View style={{ flexDirection: viewAlign }}>
                {props.icon}
                <Text style={[Styles.txt, commonContext.isRTL ? Styles.txtRight : Styles.txtLeft, { color: colors.text }]}>{t(props.text)}</Text>
            </View>
            {!props.showSwitch &&
                <View style={[Styles.arrow, { borderColor: commonContext.isDark ? Appcolor.white : Appcolor.drawer, backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.drawer }]}>
                    <View style={{ transform: [{ scaleX: imageAlign }] }}>
                        <DrawerArrow fill={props.fill} />
                    </View>
                </View>}
        </TouchableOpacity>
    )
}