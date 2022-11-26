import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import commonfonts from "../../theme/commonfonts";

export default tabComponentStyles = StyleSheet.create({
    mainView: {
        backgroundColor: Appcolor.primary,
        height: windowHeight(70)
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    label: {
        color: Appcolor.white,
        fontSize: fontSizes.FONT15,
        fontFamily: commonfonts.mulish
    },
})