import { StyleSheet } from "react-native";
import {
    fontSizes,
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";

export default addNewCardStyles = StyleSheet.create({
    addCard: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT24
    },
    inputView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
})