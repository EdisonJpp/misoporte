import React, { useState, useContext, useEffect } from 'react'
import {
    SafeAreaView,
} from 'react-native'
import { Header } from "../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import AlertView from "./alertView";
import NotificationsView from "./notificationsView";

export function Notification({ navigation }) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const [showLoader, setShowLoader] = useState(true)
    const { t } = useTranslation();
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={t('drawer.notification')} />
            <AlertView context={commonContext} colors={colors} t={t} viewAlign={viewAlign} />
            <NotificationsView context={commonContext} selfAlign={selfAlign} colors={colors} t={t} showLoader={showLoader} viewAlign={viewAlign} textAlign={textAlign} />
        </SafeAreaView>
    )
}