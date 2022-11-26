import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default notFoundStyles = StyleSheet.create({
    mainView: {
        marginLeft: windowWidth(20),
        marginTop: windowHeight(10),
        marginBottom: windowHeight(30)
    },
    didntFind: {
        fontSize: fontSizes.FONT30,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.placeholder,
        paddingHorizontal: windowWidth(20)
    },
    textView: {
        height: windowHeight(34),
        width: windowWidth(160),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(20)
    },
    text: {
        fontFamily: Commonfonts.mulishBold,
        fontSize: fontSizes.FONT17,
        color: Appcolor.white
    },
});