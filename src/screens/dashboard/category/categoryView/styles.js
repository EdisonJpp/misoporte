import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default categoryViewStyles = StyleSheet.create({
    contentView: {
        position: 'absolute',
        alignSelf: 'center',
        left: windowWidth(20),
    },
    title: {
        fontSize: fontSizes.FONT21,
        width: windowWidth(320),
        fontFamily: Commonfonts.quickSandBold,
        alignSelf: 'center',
        color: Appcolor.title
    },
    subTitle: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(320),
        fontFamily: Commonfonts.quickSand,
        alignSelf: 'center',
        color: Appcolor.content,
        marginTop: windowHeight(4)
    },
    darkStyle: {
        height: windowHeight(24),
        width: windowWidth(160),
        resizeMode: 'stretch'
    },
    scrollView: {
        marginBottom: windowHeight(60)
    },
    dataView: {
        flexDirection: 'row',
        marginTop: windowHeight(20)
    },
    nameView: {
        height: windowHeight(110),
        width: windowWidth(160),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: windowWidth(50),
        height: windowHeight(50),
    },
    name: {
        fontSize: fontSizes.FONT16,
        fontFamily: Commonfonts.mulish,
        textAlign: 'center',
        width: windowWidth(140),
        marginTop: windowHeight(8),
    },
    line: {
        width: windowWidth(140),
        height: windowHeight(0.5),
        backgroundColor: Appcolor.content,
        alignSelf: 'center'
    },
    vegies: {
        marginLeft: windowWidth(20)
    },
    view: {
        justifyContent: 'center'
    },
    bannerImg: {
        width: windowWidth(280),
        height: windowHeight(190),
        borderRadius: windowHeight(16)
    },
    separator: { height: windowHeight(10) },
    containerStyle: {
        width: '100%',
        marginTop: windowHeight(20)
    },
    imgView: {
        width: windowWidth(90),
        height: windowHeight(80),
        alignItems: 'center',
        marginLeft: windowWidth(6),
        marginTop: windowHeight(10)
    },
    itemImg: {
        width: windowWidth(85),
        height: windowHeight(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(6)
    },
    img: {
        width: windowWidth(50),
        height: windowHeight(50)
    },
    nameTxt: {
        color: Appcolor.content,
        marginTop: windowHeight(4),
        fontSize: fontSizes.FONT15,
        fontFamily: Commonfonts.mulish
    },
});