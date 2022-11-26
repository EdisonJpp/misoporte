import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";
import Appcolors from '../../../theme/colors';

export default pickerStyles = StyleSheet.create({
    mainView: {
        height: windowHeight(120),
        position: 'absolute',
        top: windowHeight(70),
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center'
    },
    dropDownView: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: windowHeight(6),
        borderWidth: 1,
        borderColor: Appcolors.primary,
        padding: windowHeight(10),
        paddingHorizontal: windowWidth(20)
    },
    selectedTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolors.content
    },
    view: {
        width: '100%',
        backgroundColor: Appcolors.white,
        zIndex: 1,
        borderWidth: 0.5,
        opacity: 9
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolors.content,
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(2)
    },
})