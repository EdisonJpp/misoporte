import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from '../../../theme/commonfonts';

export default changePasswordViewStyle = StyleSheet.create({
    changePassword: {
        borderWidth: 1.2,
        borderColor: Appcolor.primary,
        marginTop: windowHeight(20),
        borderRadius: windowWidth(6),
        marginHorizontal: windowWidth(20)
    },
    changePasswordTxt: {
        marginLeft: windowWidth(20),
        marginTop: windowHeight(10),
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish
    },
})