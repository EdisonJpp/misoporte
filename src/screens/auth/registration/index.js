import React, { useState, useContext, useEffect } from 'react'
import { View, Image, SafeAreaView, ScrollView, Text, ActivityIndicator } from 'react-native'
import Styles from '../login/styles';
import Images from '../../../utils/images/images';
import Appcolor from '../../../theme/colors';
import { Button } from '../../../commonComponents';
import { useTheme } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import TitleView from "./titleView";
import DetailsView from "./detailsView";
import SignUpView from "../continueView";
import { checkValue } from "./validation";
import { CommonContext } from '../../../../App';
import auth from '@react-native-firebase/auth';
import Preference from 'react-native-default-preference';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function Registration(props) {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showFullNameError, setShowFullNameError] = useState(false);
    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'
    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "Enter your web-client id here",
        });
    }, [])
    const goToHome = () => {
        visibleLoader(false)
        props.navigation.replace('Drawer')
    }
    const getData = () => {
        var result = checkValue(email, password, fullName)
        if (result === 1) {
            setEmailError('loginNRegister.emailError')
            setShowEmailError(true)
        } if (result === 2) {
            setPasswordError('loginNRegister.passwordError')
            setShowPasswordError(true)
        } if (result === 3) {
            setFullNameError('register.fullNameError')
            setShowFullNameError(true)
        } else if (result === 4) {
            setEmailError('loginNRegister.validEmailError')
            setShowEmailError(true)
        } else if (result === 5) {
            setPasswordError('loginNRegister.validPasswordError')
            setShowPasswordError(true)
        } else if (result === 6) {
            visibleLoader(true)
            registerUser()
        }
    }

    const registerUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                Preference.set('token', response.user.uid)
                goToHome()
            })
            .catch(error => {
                visibleLoader(false)
                if (error.code === 'auth/email-already-in-use') {
                    setShowEmailError(true)
                    setEmailError('That email address is already in use!')
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    const visibleLoader = (value) => {
        setShowLoader(value)
    }
    const hideEmailError = (value) => {
        setEmail(value)
        setShowEmailError(false)
    }
    const hidePasswordError = (value) => {
        setPassword(value)
        setPasswordError(false)
    }
    const hideFullNameError = (value) => {
        setFullName(value)
        setFullNameError(false)
    }
    return (
        <SafeAreaView style={Styles.mainView}>
            <Image source={Images.login} resizeMode='stretch' style={Styles.loginView} />
            <View style={[Styles.subView, { backgroundColor: colors.background, }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleView colors={colors} t={t} selfAlign={selfAlign} textAlign={textAlign} context={commonContext} />
                    <DetailsView
                        t={t}
                        colors={colors}
                        showEmailError={showEmailError}
                        emailError={emailError}
                        hideEmailError={hideEmailError}
                        showPasswordError={showPasswordError}
                        passwordError={passwordError}
                        hidePasswordError={hidePasswordError}
                        showFullNameError={showFullNameError}
                        fullNameError={fullNameError}
                        hideFullNameError={hideFullNameError}
                        textAlign={textAlign}
                    />
                    <Button text={'register.signUp'} style={Styles.btn}
                        color={Appcolor.white} onPress={getData} />
                    <SignUpView visibleLoader={visibleLoader} t={t} colors={colors} navigation={props.navigation} goToHome={goToHome} txt={'register.accountSignIn'} signTxt={'register.signUpWith'} />
                </ScrollView>
            </View>
            <Text onPress={goToHome} style={[Styles.guest, { textDecorationColor: colors.text, color: colors.text, backgroundColor: colors.background }]}>{t('loginNRegister.continueAsGuest')}</Text>
            {showLoader &&
                <ActivityIndicator animating={showLoader} size="large" style={Styles.loader} />}
        </SafeAreaView>
    )
}