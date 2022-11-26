import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default orderDetailsStyles = StyleSheet.create({
    addTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
        fontSize: fontSizes.FONT24
    },
    paymentView: {
        marginTop: windowHeight(20),
        marginBottom: windowHeight(80)
    },
    number: {
        flexDirection: 'row',
        marginLeft: windowWidth(20),
        alignItems: 'center'
    },
    masterCardImg: {
        height: windowHeight(60),
        width: windowWidth(60),
        resizeMode: 'contain'
    },
    cardNumber: {
        marginLeft: windowWidth(10),
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT21
    },
})