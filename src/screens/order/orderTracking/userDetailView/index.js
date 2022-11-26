import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../../../theme/colors';
import Images from '../../../../utils/images/images';
import Call from '../../../../assets/icons/call';
import Chat from '../../../../assets/icons/chat';
import Loader from './loader';

export default userDetailView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <View style={[Styles.dataView, { flexDirection: props.viewAlign }]}>
                <View style={[Styles.profileView, { flexDirection: props.viewAlign }]}>
                    <Image source={Images.demoProfile} style={Styles.profile} />
                    <View style={Styles.nameView}>
                        <Text style={[Styles.name, { color: props.colors.text, }]}>{props.t('orderTrackingPage.name')}</Text>
                        <Text style={[Styles.courier, { textAlign: props.textAlign }]}>{props.t('orderTrackingPage.courier')}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: props.viewAlign }}>
                    <TouchableOpacity activeOpacity={0.7} style={[Styles.option, { backgroundColor: Appcolor.primary, }]}>
                        <Call />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[Styles.chat, Styles.option, props.context.isRTL ? Styles.chatRight : Styles.chatLeft,]}>
                        <Chat />
                    </TouchableOpacity>
                </View>
            </View>
    )
}