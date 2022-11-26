import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default selectAddressStyle = StyleSheet.create({
    scrollView: {
        paddingBottom: windowHeight(80)
    },
    list: {
        width: '94%',
        alignSelf: 'center',
        marginTop: windowHeight(20),
        justifyContent: 'space-between',
        borderColor: Appcolor.primary,
        borderRadius: windowHeight(10),
        padding: windowHeight(10),
    },
    optionView: {
        alignItems: 'center'
    },
    optionTxt: {
        fontSize: fontSizes.FONT23,
        fontFamily: Commonfonts.mulishBold,
        marginLeft: windowWidth(10),
    },
    default: {
        color: Appcolor.white,
        backgroundColor: Appcolor.primary,
        paddingHorizontal: windowWidth(20),
        marginLeft: windowWidth(10),
        borderRadius: windowHeight(14),
        paddingVertical: windowHeight(2),
        fontFamily: Commonfonts.mulish
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginTop: windowHeight(10)
    },
    add: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        width: windowWidth(290),
        marginTop: windowHeight(6)
    },
    addMap: {
        width: windowWidth(100),
        height: windowHeight(100),
        resizeMode: 'contain'
    },
});