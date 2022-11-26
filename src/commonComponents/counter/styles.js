import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Colors from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default counterStyles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: windowWidth(6),
        borderRadius: windowHeight(6),
        borderColor: Colors.border,
        justifyContent: 'space-between'
    },
    decrease: {
        marginRight: windowWidth(18)
    },
    increase: {
        marginLeft: windowWidth(18)
    },
    txt: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20
    },
});