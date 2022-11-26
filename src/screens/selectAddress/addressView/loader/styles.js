import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";

export default addressViewLoaderStyles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        marginTop: windowHeight(20),
        width: '94%',
        alignSelf: 'center',
        padding: windowWidth(20),
        borderRadius: windowWidth(14)
    },
    viewLoader: {
        width: windowWidth(26),
        height: windowHeight(20)
    },
    titleLoader: {
        width: windowWidth(50),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
    },
    titleLeft: {
        marginLeft: windowWidth(20)
    },
    titleRight: {
        marginRight: windowWidth(20)
    },
    tagLoader: {
        width: windowWidth(60),
        height: windowHeight(20),
        borderRadius: windowWidth(10),
    },
    nameLoader: {
        width: windowWidth(160),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(20)
    },
    addressLoader: {
        width: windowWidth(260),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    imgLoader: {
        width: windowWidth(100),
        height: windowHeight(80),
        borderRadius: windowWidth(10)
    },
});