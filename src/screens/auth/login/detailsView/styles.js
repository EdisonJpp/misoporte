import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default detailsViewStyles = StyleSheet.create({
    online: {
        marginTop: windowHeight(20),
        fontFamily: Commonfonts.nunitoSans,
        fontSize: fontSizes.FONT20,
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: windowHeight(10),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
});