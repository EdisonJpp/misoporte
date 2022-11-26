import React, { useState, useContext, useEffect } from 'react'
import { View, Image, SafeAreaView, ScrollView, Text, ActivityIndicator } from 'react-native'
import Styles from './styles';
import Images from '../../../utils/images/images';
import Appcolor from '../../../theme/colors';
import { Button } from '../../../commonComponents';
import { useTheme } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import DetailsView from "./detailsView";
import { checkValue } from "./validation";
import SignInView from "../continueView";
import TitleView from "./titleView";
import { CommonContext } from '../../../../App';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Preference from 'react-native-default-preference';

export function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);

    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "Enter your web-client id here",
        });
    }, [])

    const goToHome = () => {
        props.navigation.replace('Drawer')
        visibleLoader(false)
    }

    const getData = () => {
        var result = checkValue(email, password)
        if (result === 1) {
            setEmailError('loginNRegister.emailError')
            setShowEmailError(true)
        } if (result === 2) {
            setPasswordError('loginNRegister.passwordError')
            setShowPasswordError(true)
        } else if (result === 3) {
            setEmailError('loginNRegister.validEmailError')
            setShowEmailError(true)
        } else if (result === 4) {
            setPasswordError('loginNRegister.validPasswordError')
            setShowPasswordError(true)
        } else if (result === 5) {
            visibleLoader(true)
            loginUser()
            setShowEmailError(false)
            setShowPasswordError(false)
        }
    }

    const visibleLoader = (value) => {
        setShowLoader(value)
    }

    const loginUser = () => [
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                Preference.set('token', response.user.uid)
                goToHome()
                console.log('User account created & signed in!');
            })
            .catch(error => {
                visibleLoader(false)
                if (error.code === 'auth/user-not-found') {
                    setShowEmailError(true)
                    setEmailError('User not exist please signup!')
                }
                else if (error.code === 'auth/wrong-password') {
                    setShowPasswordError(true)
                    setPasswordError('Enter valid password!');
                }

                console.error(error.code);
            })
    ]

    const hideEmailError = (value) => {
        setEmail(value)
        setShowEmailError(false)
    }
    const hidePasswordError = (value) => {
        setPassword(value)
        setShowPasswordError(false)
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
                        textAlign={textAlign}
                        context={commonContext}
                    />
                    <Button text={'login.signIn'} style={Styles.btn}
                        color={Appcolor.white} onPress={getData} />
                    <SignInView visibleLoader={visibleLoader} t={t} colors={colors} navigation={props.navigation} from goToHome={goToHome} txt={'login.createAccount'} signTxt={'login.signInWith'} />
                </ScrollView>
            </View>
            <Text onPress={goToHome} style={[Styles.guest, { textDecorationColor: colors.text, color: colors.text, backgroundColor: colors.background }]}>{t('loginNRegister.continueAsGuest')}</Text>
            {showLoader &&
                <ActivityIndicator animating={showLoader} size="large" style={Styles.loader} />}
        </SafeAreaView>
    )
}