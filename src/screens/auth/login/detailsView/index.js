import React, { useState } from 'react'
import { View, Text, } from 'react-native'
import Styles from './styles';
import HidePassword from '../../../../assets/icons/hidePassword';
import ShowPassword from '../../../../assets/icons/showPassword';
import AtSign from '../../../../assets/icons/atsign';
import { Input } from '../../../../commonComponents';

export default detailsView = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const hideEmailError = (value) => {
        setEmail(value)
        props.hideEmailError(value)
    }
    const hidePasswordError = (value) => {
        setPassword(value)
        props.hidePasswordError(value)
    }
    const visiblePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <View>
            <Text style={[Styles.online, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('login.loginAccount')}</Text>
            <Input
                placeholder={'loginNRegister.emailAddress'}
                rightIcon={<AtSign />}
                value={email}
                onChangeText={(email) => hideEmailError(email)}
                showError={props.showEmailError}
                error={props.emailError}
            />
            <Input
                placeholder={'loginNRegister.password'}
                rightIcon={showPassword ? <ShowPassword /> : <HidePassword />}
                value={password}
                onChangeText={(password) => hidePasswordError(password)}
                showError={props.showPasswordError}
                error={props.passwordError}
                onPress={visiblePassword}
                secureTextEntry={!showPassword}
            />
            <Text style={[Styles.forgotPassword, { textAlign: props.context.isRTL ? 'left' : 'right' }]}>{props.t('login.forgotPassword')}</Text>
        </View>
    )
}