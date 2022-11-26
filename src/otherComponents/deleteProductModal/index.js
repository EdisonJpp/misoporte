import React from 'react';
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { OptionButton } from "../../commonComponents";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';

export function DeleteProductModal(props) {

    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <Text style={[Styles.sure, { color: colors.text }]}>{t('deleteProductModal.areYouSure')}</Text>
            <Text style={Styles.txt}>{t('deleteProductModal.txt')}</Text>
            <OptionButton
                txt1={'commonText.close'}
                txt2={'deleteProductModal.remove'}
                onPress1={props.onPress}
                onPress2={props.onPress}
            />
        </View>
    )
} 