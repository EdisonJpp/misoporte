import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default couponStyles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    offView: {
        backgroundColor: Appcolor.primary,
        width: '100%',
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        padding: windowHeight(20)
    },
    flatTxt: {
        color: Appcolor.white,
        fontSize: fontSizes.FONT28,
        fontFamily: Commonfonts.mulishBold
    },
    offTxt: {
        color: Appcolor.white,
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    codeView: {
        width: '100%',
        borderRadius: windowHeight(6),
        backgroundColor: '#49BEAD',
        paddingVertical: windowHeight(14),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: windowWidth(24),
        marginTop: windowHeight(20)
    },
    codeTxt: {
        color: Appcolor.white,
        fontFamily: Commonfonts.mulishBold,
        fontSize: fontSizes.FONT19
    },
    copyCode: {
        color: Appcolor.primary,
        backgroundColor: Appcolor.white,
        borderRadius: windowHeight(20),
        paddingVertical: windowHeight(10),
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        paddingHorizontal: windowWidth(30)
    },
    txt: {
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        fontSize: fontSizes.FONT20
    },
    keyView: {
        width: '100%',
        marginTop: windowHeight(16)
    },
    termsView: {
        padding: windowHeight(20)
    },
})