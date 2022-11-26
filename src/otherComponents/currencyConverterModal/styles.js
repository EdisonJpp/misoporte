import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default multiLangauageStyles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT24,
        fontFamily: Commonfonts.mulish,
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(10)
    },
})