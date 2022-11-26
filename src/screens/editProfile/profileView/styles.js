import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from '../../../theme/commonfonts';

export default profileViewStyle = StyleSheet.create({
    dataView: {
        width: '100%',
        alignItems: 'center'
    },
    demoImg: {
        width: windowWidth(110),
        height: windowHeight(110),
        resizeMode: 'contain'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
    },
    demoMail: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
    editProfile: {
        backgroundColor: Appcolor.primary,
        width: windowHeight(30),
        height: windowHeight(30),
        borderRadius: windowHeight(15),
        position: 'absolute',
        bottom: windowHeight(10),
        alignItems: 'center',
        justifyContent: 'center'
    }
})