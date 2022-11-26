import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default accountStyles = StyleSheet.create({
    mainView: {
        paddingHorizontal: windowWidth(24)
    },
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderBottomWidth: 1.5,
        padding: windowHeight(10),
        borderBottomColor: Appcolor.line,
        marginBottom: windowHeight(4)
    },
    profileImg: {
        width: windowWidth(80),
        height: windowHeight(80)
    },
    dataView: {
        marginLeft: windowWidth(20),
        width: windowWidth(230),
    },
    name: {
        fontSize: fontSizes.FONT21,
        fontFamily: Commonfonts.mulishBold,
    },
    email: {
        fontSize: fontSizes.FONT17,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
    darkView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: windowHeight(10)
    },
    signOutView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth(180),
        justifyContent: 'center',
        marginBottom: windowHeight(20),
        height: windowHeight(50),
        borderRadius: windowHeight(10),
        marginTop: windowHeight(20)
    },
    signOut: {
        marginLeft: windowWidth(10),
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
})