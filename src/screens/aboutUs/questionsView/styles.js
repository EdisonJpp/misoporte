import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";
import Appcolor from '../../../theme/colors';

export default questionsViewStyles = StyleSheet.create({
    whoWeAre: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold,
        marginLeft: windowWidth(20),
        marginBottom: windowHeight(10)
    },
    whoAreWe: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginHorizontal: windowWidth(20),
        color: Appcolor.content
    },
    howIOrder: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold,
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(30)
    },
    questionView: {
        justifyContent: 'center',
        marginTop: windowHeight(10)
    },
    answerView: {
        marginTop: windowHeight(10),
        marginLeft: windowWidth(40),
        marginRight: windowWidth(20),
        paddingVertical: windowHeight(20),
        borderRadius: windowHeight(7),
        paddingLeft: windowWidth(40),
        paddingRight: windowWidth(20)
    },
    question: {
        fontFamily: Commonfonts.mulish,
        color: colors.text,
        fontSize: fontSizes.FONT22
    },
    answer: {
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        fontSize: fontSizes.FONT20
    },
    keyView: {
        position: 'absolute',
        width: windowWidth(40),
        height: windowHeight(30),
        backgroundColor: Appcolor.primary,
        borderRadius: windowHeight(4),
        alignItems: 'center',
        justifyContent: 'center',
        left: windowWidth(20)
    },
    key: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.white
    },
})