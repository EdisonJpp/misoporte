import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default productStyles = StyleSheet.create({
    mainView: {
        width: '100%',
        marginTop: windowHeight(10),
        paddingVertical: windowHeight(10),
        borderRadius: windowHeight(10),
        alignItems: 'center'
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(80),
        marginLeft: windowWidth(20)
    },
    lineView: {
        width: windowWidth(1),
        height: windowHeight(50),
        backgroundColor: Appcolor.placeholder,
        marginLeft: windowWidth(20)
    },
    counterView: {
        marginLeft: windowWidth(20),
        justifyContent: 'center'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,

    },
    weight: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
    priceView: {
        justifyContent: 'space-between',
        width: windowWidth(290),
        marginTop: windowHeight(6)
    },
    discountPriceView: {
        alignItems: 'center'
    },
    price: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulishBold,
    },
    discountView: {
        backgroundColor: Appcolor.primary,
        width: windowWidth(80),
        height: windowHeight(24),
        borderRadius: windowHeight(24),
        marginLeft: windowWidth(10),
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(6),
        alignItems: 'center'
    },
    discount: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Appcolor.white,
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT15
    },
})