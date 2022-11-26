import React, { useContext } from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native'
import Styles from './styles';
import Images from '../../../utils/images/images';
import EditProfile from "../../../assets/icons/editProfileImage";
import { CommonContext } from '../../../../App';

export default profileView = (props) => {
    const commonContext = useContext(CommonContext)
    return (
        <TouchableOpacity style={Styles.dataView} activeOpacity={0.8}>
            <View>
                <Image source={Images.demoProfile} style={Styles.demoImg} />
                <View style={[Styles.editProfile, commonContext.isRTL ? { left: 0 } : { right: 0 }]}>
                    <EditProfile />
                </View>
            </View>
            <Text style={[Styles.name, { color: props.colors.text }]}>{props.t('orderTrackingPage.name')}</Text>
            <Text style={Styles.demoMail}>{props.t('editprofilePage.demoemail')}</Text>
        </TouchableOpacity>
    )
}