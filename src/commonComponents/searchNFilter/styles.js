import { StyleSheet } from "react-native";
import {
    fontSizes, windowHeight,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default searchNFilterStyles = StyleSheet.create({
    inputView: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
    },
    filter: {
        fontSize: fontSizes.FONT24,
        color: Appcolor.primary,
        fontFamily: Commonfonts.mulish,
        marginTop: windowHeight(16)
    },
})