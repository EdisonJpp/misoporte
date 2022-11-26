import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import commonfonts from "../../../theme/commonfonts";

export default pickerStyles = StyleSheet.create({
    inputView: {
        alignSelf: 'center',
        borderWidth: 1,
        height: windowHeight(50),
        marginTop: windowHeight(20),
        backgroundColor: 'gray',
        borderRadius: windowWidth(6)
    },
    txt: {
        fontFamily: commonfonts.mulish,
        color: Appcolor.secondaryText,
        fontSize: fontSizes.FONT20,
        paddingHorizontal: windowWidth(20)
    },
    list: {
        alignSelf: 'center',
        maxHeight: windowHeight(140),
        position: 'absolute',
        bottom: windowHeight(50),
        elevation: 2
    },
    listTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: commonfonts.mulish,
        paddingHorizontal: windowWidth(20)
    },
    lstView: {
        justifyContent: 'center',
        height: windowHeight(48),
    },
    contentStyle: {
        paddingVertical: windowHeight(20),
    }
});