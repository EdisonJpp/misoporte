import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";
import Appcolor from '../../../theme/colors';

export default notificationStyles = StyleSheet.create({
    list: {
        paddingBottom: windowHeight(20),
        marginTop: windowHeight(10)
    },
    dataView: {
        marginTop: windowHeight(20),
        paddingHorizontal: windowWidth(20)
    },
    day: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        marginLeft: windowWidth(4)
    },
    value: {
        marginTop: windowHeight(14),
        alignItems: 'center'
    },
    icon: {
        height: windowHeight(50),
        width: windowWidth(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(8),
        marginRight: windowWidth(10)
    },
    titleView: {
        justifyContent: 'space-between',
        width: windowWidth(370),
    },
    title: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
        marginLeft: windowWidth(4)
    },
    subTxt: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT17,
        color: Appcolor.content,
        marginLeft: windowWidth(4)
    },
    tag: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT16,
        color: Appcolor.primary,
        marginLeft: windowWidth(4),
        paddingHorizontal: windowWidth(10),
        height: windowHeight(24),
        textAlignVertical: 'center',
        borderRadius: windowWidth(6)
    },
    offerLeft: {
        marginHorizontal: windowWidth(10)
    },
})