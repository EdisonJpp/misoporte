import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default addNewStyle = StyleSheet.create({
    newAddView: {
        width: '94%',
        paddingVertical: windowHeight(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
        borderColor: Appcolor.content,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: windowHeight(20)
    },
    addAdd: {
        fontSize: fontSizes.FONT22,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
});