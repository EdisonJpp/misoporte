import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";

export default recentlyBoughtStyles = StyleSheet.create({
    mainView: {
        width: '97%',
        height: windowHeight(140),
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    recentlyBought: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold,
        marginLeft: windowWidth(16),
    },
    imageView: {
        width: windowWidth(410),
        marginTop: windowHeight(10)
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recentlyImage: {
        height: windowHeight(70),
        width: windowWidth(80),
        borderRadius: windowHeight(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: windowWidth(60),
        height: windowHeight(60)
    },
});