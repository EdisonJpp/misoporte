import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default offerFilterStyles = StyleSheet.create({
    filter: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT24
    },
    columnWrapperStyle: {
        justifyContent: 'space-between'
    },
    listView: {
        width: '49%',
        alignItems: 'center',
        height: windowHeight(54),
        justifyContent: 'center',
        borderWidth: 0.6,
        borderRadius: windowWidth(6),
        marginTop: windowHeight(16),
    },
    txt: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
    }
})