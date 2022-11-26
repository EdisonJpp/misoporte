import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "../../theme/appConstant";
import Fonts from "../../theme/commonfonts";

export default homeHeaderStyle = StyleSheet.create({
    mainView: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(10)
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        fontFamily: Fonts.mulish,
        fontSize: fontSizes.FONT20,
        marginLeft: windowWidth(6)
    },
    profile: {
        width: windowWidth(50),
        height: windowHeight(50)
    },
    logoImg: {
        marginLeft: windowWidth(10)
    },
    logoRightImg: {
        marginRight: windowWidth(10)
    },
})