import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Styles from '../../login/styles';
import { fontSizes } from '../../../../theme/appConstant';
import HidePassword from '../../../../assets/icons/hidePassword';
import ShowPassword from '../../../../assets/icons/showPassword';
import FullName from '../../../../assets/icons/fullName';
import AtSign from '../../../../assets/icons/atsign';
import { Input } from '../../../../commonComponents';

export default detailsView = (props) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword)
    }
    const hideEmailError = (value) => {
        setEmail(value)
        props.hideEmailError(value)
    }
    const hidePasswordError = (value) => {
        setPassword(value)
        props.hidePasswordError(value)
    }
    const hideFullNameError = (value) => {
        setFullName(value)
        props.hideFullNameError(value)
    }
    return (
        <View>
            <Text style={[Styles.online, { fontSize: fontSizes.FONT20, color: props.colors.text, textAlign: props.textAlign }]}>{props.t('register.registerAccount')}</Text>
            <Input
                placeholder={props.t('register.fullName')}
                rightIcon={<FullName />}
                value={fullName}
                onChangeText={(fullName) => hideFullNameError(fullName)}
                showError={props.showFullNameError}
                error={props.fullNameError}
            />
            <Input
                placeholder={props.t('loginNRegister.emailAddress')}
                rightIcon={<AtSign />}
                value={email}
                onChangeText={(email) => hideEmailError(email)}
                showError={props.showEmailError}
                error={props.emailError}
            />
            <Input
                placeholder={props.t('loginNRegister.password')}
                rightIcon={showPassword ? <ShowPassword /> : <HidePassword />}
                value={password}
                onChangeText={(password) => hidePasswordError(password)}
                showError={props.showPasswordError}
                error={props.passwordError}
                onPress={visiblePassword}
                secureTextEntry={!showPassword}
            />
        </View>
    )
}