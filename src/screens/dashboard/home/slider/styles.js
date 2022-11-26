import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default sliderStyles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: windowHeight(220),
        marginBottom: windowHeight(10),
        borderRadius: windowHeight(10),
        paddingHorizontal: windowWidth(14)
    },
    sliderView: {
        width: windowWidth(360),
        justifyContent: 'center'
    },
    image: {
        width: windowWidth(360),
        height: windowHeight(190),
        marginTop: windowHeight(10),
        borderRadius: windowHeight(10),
    },
    contentView: {
        position: 'absolute',
        alignSelf: 'center',
    },
    title: {
        fontSize: fontSizes.FONT23,
        width: windowWidth(320),
        fontFamily: Commonfonts.quickSandBold,
        alignSelf: 'center',
    },
    subTitle: {
        fontSize: fontSizes.FONT21,
        width: windowWidth(320),
        fontFamily: Commonfonts.quickSand,
        alignSelf: 'center',
        color: Appcolor.content,
        marginTop: windowHeight(4)
    },
    content: {
        top: 0,
        left: 30,
        bottom: 0,
        right: 30
    },
    shopNowView: {
        height: windowHeight(34),
        width: windowWidth(130),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        marginTop: windowHeight(20),
    },
    shopNow: {
        fontFamily: Commonfonts.mulishBold,
        fontSize: fontSizes.FONT17,
    },
});