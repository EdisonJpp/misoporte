import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default inputStyles = StyleSheet.create({
    inputView: {
        height: windowHeight(50),
        borderRadius: windowHeight(6),
        alignSelf: 'center',
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: windowHeight(50),
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
    },
    leftIcon: {
        position: 'absolute',
        left: windowWidth(20)
    },
    rightIcon: {
        position: 'absolute',
        right: windowWidth(20)
    },
    error: {
        fontSize: fontSizes.FONT19,
        marginLeft: windowWidth(4),
        marginTop: windowHeight(4),
        color: Appcolor.error,
        fontFamily: Commonfonts.mulish
    },
    text: {
        color: Appcolor.primary,
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish
    }
});