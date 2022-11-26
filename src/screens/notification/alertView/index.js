import React, { useState } from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../../theme/colors';
import MarkRead from '../../../assets/icons/markRead';

export default alertView = (props) => {

    const [tab, setTab] = useState(0)

    const changeTab = (value) => {
        setTab(value)
    }

    return (
        <View style={[Styles.offersView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
            <View style={[Styles.alertView, { flexDirection: props.viewAlign }]}>
                <View>
                    {tab === 0 &&
                        <View style={Styles.line} />}
                    <Text onPress={() => changeTab(0)} style={[Styles.alert, { color: tab === 0 ? Appcolor.primary : props.colors.text, }]}>{props.t('notificationPage.alerts')}</Text>
                </View>
                <View style={props.context.isRTL ? Styles.lineViewLeft : Styles.lineViewRight}>
                    <Text onPress={() => changeTab(1)} style={[Styles.alert, { color: tab === 1 ? Appcolor.primary : props.colors.text, }]}>{props.t('notificationPage.offer')}</Text>
                    {tab === 1 &&
                        <View style={Styles.line} />}
                </View>
            </View>
            <View style={Styles.readView}>
                <MarkRead />
                <Text style={Styles.readTxt}>{props.t('notificationPage.markAsRead')}</Text>
            </View>
        </View>
    )
}