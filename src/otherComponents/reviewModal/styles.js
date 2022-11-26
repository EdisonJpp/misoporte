import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default productDetailsStyles = StyleSheet.create({
    list: {
        marginBottom: windowHeight(40)
    },
    review: {
        marginTop: windowHeight(20),
        padding: windowWidth(20),
        borderRadius: windowHeight(10)
    },
    reviewDetail: {
        alignItems: 'center'
    },
    demoProfile: {
        width: windowWidth(70),
        height: windowHeight(70),
        resizeMode: 'contain'
    },
    reviewNameView: {
        marginLeft: windowWidth(20)
    },
    reviewNameViewRight: {
        marginRight: windowWidth(14)
    },
    reviewName: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        width: '100%'
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
});