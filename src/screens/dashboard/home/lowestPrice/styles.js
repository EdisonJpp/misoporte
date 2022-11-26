import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default lowestPriceStyles = StyleSheet.create({
    mainView: {
        paddingLeft: windowWidth(10)
    },
    lowestPriceView: {
        marginBottom: windowHeight(16),
        borderWidth: 1,
        width: windowWidth(170),
        borderRadius: windowHeight(6),
        borderColor: Appcolor.border,
        marginHorizontal: windowWidth(10)
    },
    image: {
        width: windowWidth(90),
        height: windowHeight(90),
        marginTop: windowHeight(20),
        alignSelf: 'center'
    },
    name: {
        width: windowWidth(150),
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT17,
        marginHorizontal: windowWidth(10)
    },
    gram: {
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT16,
        marginHorizontal: windowWidth(10),
        marginTop: windowHeight(6),
        width: windowWidth(150),
    },
    priceView: {
        marginHorizontal: windowWidth(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: windowHeight(10)
    },
    price: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
    },
    increase: {
        width: windowWidth(30),
        height: windowHeight(26),
        borderRadius: windowHeight(4),
        backgroundColor: Appcolor.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wishList: {
        position: 'absolute',
        right: windowWidth(16),
        top: windowHeight(10)
    },
})