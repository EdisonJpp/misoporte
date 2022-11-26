import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default authStyles = StyleSheet.create({
    mainView: {
        backgroundColor: Appcolor.primary,
        flex: 1
    },
    subView: {
        marginTop: windowHeight(70),
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        height: '100%',
        paddingHorizontal: windowWidth(20)
    },
    loginView: {
        width: '100%',
        position: 'absolute',
    },
    fastkartImg: {
        marginTop: windowHeight(40)
    },
    online: {
        marginTop: windowHeight(20),
        fontFamily: Commonfonts.nunitoSans,
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: windowHeight(10),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
    btn: {
        width: '100%',
        backgroundColor: Appcolor.primary,
    },
    createAcc: {
        textAlign: 'center',
        marginTop: windowHeight(16),
        fontFamily: Commonfonts.mulishBold,
        fontSize: fontSizes.FONT18,
        color: Appcolor.content
    },
    signInView: {
        marginTop: windowHeight(36),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
    },
    signIn: {
        textAlign: 'center',
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
        color: Appcolor.primary,
        position: 'absolute',
        paddingHorizontal: windowWidth(20)
    },
    guest: {
        textAlign: 'center',
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
        paddingHorizontal: windowWidth(20),
        textDecorationLine: 'underline',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: windowHeight(10)
    },
    loader: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
});