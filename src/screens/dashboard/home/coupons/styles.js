import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default couponStyles = StyleSheet.create({
    mainView: {
        padding: windowWidth(20),
    },
    dataView: {
        width: windowWidth(180),
        height: windowHeight(120),
        alignItems: 'center',
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(40),
        marginTop: windowHeight(20)
    },
    discount: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.title
    },
    upto: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
})