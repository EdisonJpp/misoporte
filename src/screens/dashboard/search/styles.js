import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";

export default searchStyles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginHorizontal: windowWidth(24),
        marginBottom: windowHeight(10),
        marginTop: windowHeight(30)
    },
    scrollView: {
        marginTop: windowHeight(10)
    },
    name: {
        fontSize: fontSizes.FONT20,
        paddingHorizontal: windowWidth(20),
        marginLeft: windowWidth(20),
        borderRadius: windowWidth(10),
        paddingVertical: windowHeight(10),
    },
    image: {
        height: windowHeight(70),
        width: windowWidth(140),
        alignItems: 'center',
        borderRadius: windowHeight(10),
        justifyContent: 'center',
        marginLeft: windowWidth(20)
    },
    img: {
        height: windowHeight(50),
        width: windowWidth(50),
        resizeMode: 'contain'
    },
})