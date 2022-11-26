import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Appcolor from "../../theme/colors";
import Commonfonts from "../../theme/commonfonts";

export default addAddressStyles = StyleSheet.create({
    address: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    container: {
        height: windowHeight(50),
        marginTop: windowHeight(20),
    },
    picker: {
        borderRadius: windowHeight(6),
    },
    dropdown: {
        borderRadius: windowHeight(0),
        borderWidth: 0.5
    },
    placeholder: {
        fontSize: fontSizes.FONT19,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish,
        paddingLeft: windowWidth(10)
    },
    listItem: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
        padding: 3,
        marginLeft: windowWidth(10),
    },
    txtStyle: {
        fontSize: fontSizes.FONT19,
        paddingLeft: windowWidth(10)
    },
})