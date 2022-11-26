import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";

export default peopleViewStyles = StyleSheet.create({
    peopleWhoBuild: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold,
        margin: windowWidth(20),
        marginTop: windowHeight(40),
    },
    list: {
        marginBottom: windowHeight(20)
    },
    columnStyle: {
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
    },
    seprator: {
        height: windowHeight(10),
        width: windowWidth(10)
    },
    socialView: {
        height: windowHeight(196),
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 0.5
    },
    buildView: {
        width: windowWidth(200),
        height: windowHeight(110),
        alignItems: 'center',
        borderRadius: windowWidth(14)
    },
    buildImg: {
        width: windowWidth(120),
        height: windowHeight(140),
        position: 'absolute',
        top: windowHeight(-30)
    },
    buildTxt: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20,
        marginTop: windowHeight(10),
    },
    social: {
        flexDirection: 'row',
        width: windowWidth(80),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})