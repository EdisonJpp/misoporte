import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Colors from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default onBoardingStyles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        height: windowHeight(320),
        backgroundColor: 'lightgray',
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    contentView: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        paddingTop: windowHeight(30),
        paddingBottom: windowHeight(5)
    },
    safeDelivery: {
        fontSize: fontSizes.FONT22,
        width: windowWidth(220),
        textAlign: 'center',
        marginTop: windowHeight(18),
        fontFamily: Commonfonts.quickSand
    },
    onlineSupermarket: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(410),
        textAlign: 'center',
        color: Colors.content,
        marginTop: windowHeight(10),
        fontFamily: Commonfonts.nunitoSans
    },
});