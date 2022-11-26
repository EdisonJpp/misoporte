import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default userDetailViewStyles = StyleSheet.create({
    dataView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        borderBottomColor: Appcolor.placeholder
    },
    profileView: {
        alignItems: 'center'
    },
    profile: {
        height: windowHeight(70),
        width: windowWidth(70),
        resizeMode: 'contain'
    },
    nameView: {
        paddingHorizontal: windowWidth(10)
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    courier: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
    option: {
        width: windowWidth(44),
        height: windowHeight(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
    },
    chat: {
        marginLeft: windowWidth(16),
        borderWidth: 1,
        borderColor: Appcolor.primary,
    },
    chatLeft: {
        marginLeft: windowWidth(16),
    },
    chatRight: {
        marginRight: windowWidth(16),
    },
})