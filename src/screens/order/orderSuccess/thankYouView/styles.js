import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default thankYouViewStyles = StyleSheet.create({
    thankyou: {
        fontSize: fontSizes.FONT26,
        fontFamily: Commonfonts.quickSandBold,
        alignSelf: 'center',
        marginTop: windowHeight(10)
    },
    orderSuccessfull: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        alignSelf: 'center',
        color: Appcolor.content,
        textAlign: 'center',
        width: '90%',
        marginTop: windowHeight(6),
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        borderBottomColor: Appcolor.placeholder
    },
})