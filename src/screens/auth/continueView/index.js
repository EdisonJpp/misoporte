import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import Images from '../../../utils/images/images';
import { ContinueButton } from '../../../commonComponents';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Preference from 'react-native-default-preference';

export default continueView = (props) => {

    const goToPage = () => {
        if (props.from) {
            props.navigation.replace('Registration');
        } else {
            props.navigation.replace('Login');
        }
    }

    const googleLogin = () => {
        props.visibleLoader(true)
        GoogleSignin.hasPlayServices().then((hasPlayService) => {
            if (hasPlayService) {
                GoogleSignin.signIn().then((userInfo) => {
                    console.log('userInfo', userInfo)
                    props.goToHome()
                    Preference.set('token', userInfo.idToken)
                }).catch((e) => {
                    props.visibleLoader(false)
                    console.log("ERROR IS: " + JSON.stringify(e));
                })
            }
        }).catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e));
        })
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={goToPage}>
                <Text style={Styles.createAcc}>{props.t(props.txt)}</Text>
            </TouchableOpacity>
            <View style={Styles.signInView}>
                <Image source={Images.divider} style={Styles.img} />
                <Text style={[Styles.signIn, { backgroundColor: props.colors.background }]}>{props.t(props.signTxt)}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ContinueButton image={Images.phone} text={props.t('loginNRegister.continueWithPhone')} />
                <ContinueButton image={Images.google} text={props.t('loginNRegister.continueWithGoogle')} onPress={googleLogin} />
            </View>
            <View style={Styles.view} />
        </View>
    )
}