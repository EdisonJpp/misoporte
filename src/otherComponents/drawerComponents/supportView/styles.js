import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";
import Appcolor from '../../../theme/colors';

export default supportViewStyles = StyleSheet.create({
    supportView: {
        height: windowHeight(140),
        width: windowWidth(320),
        marginTop: windowHeight(30),
        marginBottom: windowHeight(14),
        borderRadius: windowHeight(14),
        padding: windowHeight(16)
    },
    supportTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
    },
    reactOut: {
        fontSize: fontSizes.FONT17,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        width: windowWidth(300),
        marginTop: windowHeight(6)
    },
    contactUs: {
        marginTop: windowHeight(10),
        height: windowHeight(34),
        width: windowWidth(130),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Appcolor.primary,
        borderRadius: windowHeight(4)
    },
    contactUsTxt: {
        fontSize: fontSizes.FONT16,
        fontFamily: Commonfonts.mulishBold,
        color: Appcolor.white
    },
})