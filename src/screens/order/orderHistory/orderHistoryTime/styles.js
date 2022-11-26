import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";

export default orderHistoryTimeStyles = StyleSheet.create({
    scrollView: {
        width: '100%',
        marginTop: windowHeight(20),
        height: windowHeight(60),
        justifyContent: 'center'
    },
    time: {
        marginLeft: windowWidth(20),
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        marginTop: windowHeight(10)
    },
})