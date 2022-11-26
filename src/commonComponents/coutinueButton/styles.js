import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default onBoardingStyles = StyleSheet.create({
    button: {
        width: windowWidth(410),
        height: windowHeight(46),
        borderRadius: windowHeight(6),
        marginTop: windowHeight(23),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        width: windowWidth(26),
        height: windowHeight(20),
        resizeMode: 'contain'
    },
    buttonText: {
        fontSize: fontSizes.FONT20,
        marginLeft: windowWidth(10),
        fontFamily: Commonfonts.mulish
    },
});