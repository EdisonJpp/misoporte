import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default shopByCategoryStyles = StyleSheet.create({
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: windowHeight(20),
        paddingHorizontal: windowWidth(20)
    },
    line: {
        width: '100%',
        height: windowHeight(0.3),
        backgroundColor: Appcolor.text,
        marginTop: windowHeight(20)
    },
    shopByCategory: {
        position: 'absolute',
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold,
        top: windowHeight(6),
        width: windowWidth(220),
        textAlign: 'center',
    },
    list: {
        paddingHorizontal: windowWidth(20)
    },
    separator: {
        height: windowHeight(20)
    },
    listView: {
        width: windowWidth(100),
        marginLeft: windowWidth(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        height: windowHeight(60),
        width: windowWidth(100),
        alignItems: 'center',
        borderRadius: windowHeight(20),
        justifyContent: 'center'
    },
    image: {
        width: windowWidth(60),
        height: windowHeight(60),
    },
    name: {
        width: windowWidth(100),
        fontFamily: Commonfonts.mulishBold,
        textAlign: 'center',
        marginTop: windowHeight(10)
    },
})