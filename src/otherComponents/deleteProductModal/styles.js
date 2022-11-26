import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default deleteProductStyles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: windowWidth(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    sure: {
        fontSize: fontSizes.FONT30,
        fontFamily: Commonfonts.mulish,
    },
    txt: {
        fontSize: fontSizes.FONT16,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        textAlign: 'center',
        marginTop: windowHeight(16)
    },
})