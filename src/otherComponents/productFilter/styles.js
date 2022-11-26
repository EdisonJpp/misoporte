import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default productFilterStyles = StyleSheet.create({
    category: {
        justifyContent: 'space-between'
    },
    categoryTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
    },
    reset: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary
    },
    packSize: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginTop: windowHeight(100),
        marginBottom: windowHeight(10)
    },
    list: { marginTop: windowHeight(20) },
    seprator: {
        width: windowWidth(10),
        height: windowHeight(10)
    },
    sizeView: {
        width: windowWidth(210),
        height: windowHeight(40),
        borderWidth: 1,
        borderColor: Appcolor.border,
        borderRadius: windowHeight(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    size: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
    },
    priceRange: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginTop: windowHeight(20)
    },
    rangeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(10)
    },
    list: {
        justifyContent: 'space-between'
    },
})