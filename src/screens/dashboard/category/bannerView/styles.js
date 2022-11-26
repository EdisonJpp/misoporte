import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default bannerViewStyles = StyleSheet.create({
    contentView: {
        position: 'absolute',
        alignSelf: 'center',
        left: windowWidth(20),
    },
    title: {
        fontSize: fontSizes.FONT21,
        width: windowWidth(240),
        fontFamily: Commonfonts.quickSandBold,
        alignSelf: 'center',
        color: Appcolor.title
    },
    subTitle: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(240),
        fontFamily: Commonfonts.quickSand,
        alignSelf: 'center',
        color: Appcolor.content,
        marginTop: windowHeight(4)
    },
    view: {
        justifyContent: 'center',
    },
    bannerImg: {
        width: windowWidth(280),
        height: windowHeight(140),
        borderRadius: windowHeight(16)
    },
});