import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default couponStyles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: windowHeight(118),
        justifyContent: 'center'
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '86%',
        alignSelf: 'center'
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceTxt: {
        color: Appcolor.primary,
        fontFamily: Commonfonts.quickSandBold,
        fontSize: fontSizes.FONT50
    },
    percent: {
        color: Appcolor.primary,
        fontFamily: Commonfonts.quickSand,
        fontSize: fontSizes.FONT20
    },
    off: {
        color: Appcolor.primary,
        fontFamily: Commonfonts.quickSand,
        fontSize: fontSizes.FONT16
    },
    titleTxt: {
        fontFamily: Commonfonts.quickSandBold,
        fontSize: fontSizes.FONT18
    },
    useCode: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.quickSand,
        width: windowWidth(100),
        textAlign: 'center'
    },
    code: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.white,
        fontFamily: Commonfonts.quickSand,
        backgroundColor: Appcolor.primary,
        textAlign: 'center',
        borderRadius: windowHeight(20),
        paddingVertical: windowHeight(4),
        marginTop: windowHeight(4),
        width: windowWidth(100)
    },
    titleView: {
        marginLeft: windowWidth(8)
    },
    titleViewRight: {
        marginRight: windowWidth(8)
    },
})