import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default pageListStyles = StyleSheet.create({
    checkOut: {
        width: '100%',
        borderRadius: windowWidth(6),
        padding: windowWidth(14),
        marginTop: windowHeight(20)
    },
    checkOutTxt: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
})