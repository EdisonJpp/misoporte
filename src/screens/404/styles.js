import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default notFoundStyles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
    },
    subView: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notFound: {
        fontSize: fontSizes.FONT24,
        textAlign: 'center',
        fontFamily: Commonfonts.mulish,
        width: '90%',
        alignSelf: 'center',
        marginTop: windowHeight(20)
    },
    line: {
        height: windowHeight(2),
        width: windowWidth(70),
        backgroundColor: Appcolor.primary,
        borderRadius: windowWidth(10),
        marginTop: windowHeight(10),
        marginBottom: windowHeight(16)
    },
    notExist: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        textAlign: 'center',
        fontFamily: Commonfonts.mulish,
        width: '90%',
        alignSelf: 'center'
    },
    btn: {
        width: '49%',
        backgroundColor: Appcolor.primary,
    },
})