import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default signInViewStyles = StyleSheet.create({
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
    view: {
        paddingVertical: windowHeight(80),
    }
});