import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default seeAllHeaderStyles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowHeight(16),
        marginTop: windowHeight(10),
        marginRight: windowWidth(10)
    },
    title: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulishBold,
    },
    subTitle: {
        fontSize: fontSizes.FONT19,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish,
    },
    seeAll: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.primary,
        fontFamily: Commonfonts.mulish,
    },
});