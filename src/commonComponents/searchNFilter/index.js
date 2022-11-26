import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import { Input } from "../";
import VoiceSearch from '../../assets/icons/voiceSearch';
import Search from '../../assets/icons/search';
import { useTranslation } from 'react-i18next';
import { windowWidth } from '../../theme/appConstant';
import { CommonContext } from '../../../App';

export function SearchNFilter(props) {

    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'

    return (
        <View style={[Styles.inputView, { flexDirection: viewAlign }]}>
            <Input width={windowWidth(360)} placeholder={t('commonText.searchProducts')} rightIcon={<VoiceSearch />} leftIcon={<Search />} />
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <Text style={Styles.filter}>{t('commonText.filter')}</Text>
            </TouchableOpacity>
        </View>
    )
}