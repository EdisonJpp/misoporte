import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";

export default menuItemStyles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    txtLeft: {
        marginLeft: windowWidth(20),
    },
    txtRight: {
        marginRight: windowWidth(20),
    },
    arrow: {
        borderWidth: 0.5,
        width: windowHeight(24),
        height: windowHeight(24),
        borderRadius: windowHeight(12),
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flexDirection: 'row'
    },
})