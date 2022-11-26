import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default onBoardingStyles = StyleSheet.create({
    button: {
        borderRadius: windowHeight(5),
        marginTop: windowHeight(23),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight(46),
    },
    buttonText: {
        fontSize: fontSizes.FONT22,
        marginLeft: windowWidth(10),
        fontFamily: Commonfonts.mulish
    },
});