import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default deliveryStyles = StyleSheet.create({
    column: {
        justifyContent: 'space-between'
    },
    view: {
        width: '48%',
        height: windowHeight(44),
        marginTop: windowHeight(14),
        justifyContent: 'center',
        paddingHorizontal: windowWidth(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
    },
    text: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
    },
})