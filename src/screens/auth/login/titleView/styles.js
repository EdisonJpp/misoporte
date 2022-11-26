import { StyleSheet } from "react-native";
import {
    windowHeight, fontSizes,
} from "../../../../theme/appConstant";
import Appcolor from "../../../../theme/colors";
import Commonfonts from "../../../../theme/commonfonts";

export default titleViewStyles = StyleSheet.create({
    fastkartImg: {
        marginTop: windowHeight(40),
    },
    online: {
        marginTop: windowHeight(20),
        fontFamily: Commonfonts.nunitoSans,
        color: Appcolor.content,
        fontSize: fontSizes.FONT18,
    },
});