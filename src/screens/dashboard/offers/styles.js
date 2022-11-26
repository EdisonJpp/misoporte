import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default offerStyles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between'
    },
    filter: {
        fontSize: fontSizes.FONT24,
        color: Appcolor.primary,
        fontFamily: Commonfonts.mulish
    },
    coupon: {
        marginTop: windowHeight(20)
    },
})