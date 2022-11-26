import { StyleSheet } from "react-native";
import {
    windowHeight,
} from "../../../../theme/appConstant";
import Appcolor from "../../../../theme/colors";
import Commonfonts from "../../../../theme/commonfonts";

export default titleViewStyles = StyleSheet.create({
    fastkartImg: {
        marginTop: windowHeight(40),
        resizeMode: 'stretch'
    },
    online: {
        marginTop: windowHeight(20),
        fontFamily: Commonfonts.nunitoSans,
        color: Appcolor.content
    },
});