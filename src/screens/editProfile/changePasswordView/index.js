import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import { Input } from "../../../commonComponents";
import { windowHeight, } from '../../../theme/appConstant';
import Password from '../../../assets/icons/password';

export default changePasswordView = (props) => {
    return (
        <View style={[Styles.changePassword, { backgroundColor: props.colors.primary, }]}>
            <Text style={[Styles.changePasswordTxt, { color: props.colors.text }]}>{props.t('editProfilePage.changePassword')}</Text>
            <Input top={windowHeight(2)} placeholder={'Andrea Joanne'} rightIcon={<Password />} width={'100%'} color={props.colors.primary} />
        </View>
    )
}