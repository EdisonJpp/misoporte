import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default orderDetailsStyles = StyleSheet.create({
    dataView: {
        marginTop: windowHeight(10)
    },
    addTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
        fontSize: fontSizes.FONT24
    },
    name: {
        marginHorizontal: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT21,
        marginTop: windowHeight(10)
    },
    locationTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        fontSize: fontSizes.FONT21
    },
})