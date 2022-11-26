import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default totalStyles = StyleSheet.create({
    mainView: {
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(30),
        padding: windowWidth(10),
        borderRadius: windowWidth(10),
    },
    title: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT24,
        marginBottom: windowHeight(10)
    },
    data: {
        fontSize: fontSizes.FONT21,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
    dataView: {
        marginTop: windowHeight(12),
        justifyContent: 'space-between'
    },
    deliveryView: {
        borderBottomWidth: 1,
        paddingBottom: windowHeight(20),
        borderBottomColor: Appcolor.line
    },
    amountView: {
        marginTop: windowHeight(12),
        justifyContent: 'space-between',
        marginBottom: windowHeight(20)
    },
    amount: {
        fontSize: fontSizes.FONT21,
        fontFamily: Commonfonts.mulish,

    },
    price: {
        fontSize: fontSizes.FONT21,
        color: Appcolor.primary,
        fontFamily: Commonfonts.mulish
    },
    coupon: {
        fontSize: fontSizes.FONT21,
        color: Appcolor.highLight,
        fontFamily: Commonfonts.mulish
    },
})