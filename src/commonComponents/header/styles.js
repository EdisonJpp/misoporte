import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import commonfonts from "../../theme/commonfonts";

export default headerStyle = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        marginHorizontal: windowWidth(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight(60)
    },
    arrowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: fontSizes.FONT21,
        fontFamily: commonfonts.mulish,
        marginLeft: windowWidth(16)
    },
    image: {
        height: windowHeight(30),
        width: windowWidth(30)
    },
    headerImg: {
        marginLeft: windowWidth(14)
    },
    headerImgRight: {
        marginRight: windowWidth(14)
    },
    propText: {
        fontSize: fontSizes.FONT18,
        color: Appcolor.content,
        fontFamily: commonfonts.mulish
    },
})