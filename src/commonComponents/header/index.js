import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import HeaderArrow from "../../assets/icons/headerArrow";
import Home from '../../assets/icons/home';
import { useTranslation } from 'react-i18next';

export function Header(props) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1

    return (
        <View style={[Styles.mainView, { flexDirection: viewAlign }]}>
            <TouchableOpacity style={[Styles.arrowView, { flexDirection: viewAlign }]} onPress={props.onPress}>
                {props.firstIcon ? props.firstIcon :
                    <View style={{ transform: [{ scaleX: imageAlign }] }}>
                        <HeaderArrow />
                    </View>}
                {props.isText ?
                    <Text style={[Styles.text, commonContext.isRTL ? Styles.headerImgRight : Styles.headerImg, { color: colors.text, }]}>{t(props.titleText)}</Text> :
                    <Image source={commonContext.isDark ? props.darkImage : props.lightImage} style={[commonContext.isRTL ? Styles.headerImgRight : Styles.headerImg, commonContext.isDark ? props.darkStyle : props.lightStyle]} />
                }
            </TouchableOpacity>
            <Text style={Styles.propText}>{t(props.text)}</Text>
            {props.showImage ?
                <Image source={props.image} style={Styles.image} /> :
                <TouchableOpacity activeOpacity={0.7} onPress={props.imageOnPress}>
                    {props.image ? props.image : <Home />}
                </TouchableOpacity>}
        </View>
    )
}