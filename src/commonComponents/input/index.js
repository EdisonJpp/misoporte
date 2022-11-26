import React, { useContext, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';
import {
    windowHeight,
    windowWidth
} from '../../theme/appConstant';
import Appcolor from '../../theme/colors';
import Styles from './styles';
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import { useTranslation } from 'react-i18next';

export function Input(props) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const [isFocus, setIsFocus] = useState(false);
    const { t } = useTranslation();
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'

    const focus = (value) => {
        setIsFocus(value)
    }

    return (
        <View style={{ marginTop: props.top ? props.top : windowHeight(20) }}>
            <View style={[Styles.inputView, {
                width: props.width ? props.width : windowWidth(440),
                borderWidth: isFocus ? 1 : 2,
                borderColor: isFocus ? Appcolor.primary : colors.primary,
                backgroundColor: props.color ? props.color : commonContext.isDark || isFocus ? colors.primary : Appcolor.gray,
                paddingLeft: props.leftIcon ? windowWidth(56) : windowWidth(16),
                flexDirection: viewAlign,
            }]}>
                <TextInput
                    editable={props.editable}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={t(props.placeholder)}
                    onFocus={() => focus(true)}
                    secureTextEntry={props.secureTextEntry}
                    onBlur={() => focus(false)}
                    placeholderTextColor={commonContext.isDark ? colors.text : Appcolor.content}
                    style={[Styles.input, {
                        width: props.width ? props.width : windowWidth(440),
                        textAlign: textAlign,
                        color: colors.text
                    }, commonContext.isRTL ? props.leftIcon ? { marginRight: windowWidth(40) } : { marginRight: windowWidth(20) } : props.leftIcon ? { marginLeft: windowWidth(40) } : { marginLeft: windowWidth(20) }]}
                    keyboardType={props.type && 'numeric'}
                />
                <TouchableOpacity style={Styles.leftIcon} onPress={props.onPress} activeOpacity={0.7}>
                    {props.leftIcon}
                </TouchableOpacity>
                <TouchableOpacity style={Styles.rightIcon} onPress={props.onPress} activeOpacity={0.7}>
                    {props.isText ? <Text style={Styles.text}>{props.text}</Text> :
                        props.rightIcon}
                </TouchableOpacity>
            </View>
            {props.showError &&
                <Text style={Styles.error}>{t(props.error)}</Text>}
        </View>
    )
}