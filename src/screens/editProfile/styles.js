import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from '../../theme/commonfonts';

export default editProfileStyle = StyleSheet.create({
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
    changePassword: {
        borderWidth: 1.2,
        borderColor: Appcolor.primary,
        marginTop: windowHeight(20),
        borderRadius: windowWidth(6)
    },
    changePasswordTxt: {
        marginLeft: windowWidth(20),
        marginTop: windowHeight(10),
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish
    },
    btn: {
        width: '90%',
        backgroundColor: Appcolor.primary,
        alignSelf: 'center',
        marginBottom: windowHeight(20)
    },
})