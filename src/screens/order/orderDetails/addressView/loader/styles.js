import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default addressLoaderStyles = StyleSheet.create({
    addLoader: {
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(20)
    },
    nameLoader: {
        width: windowWidth(160),
        borderRadius: windowHeight(4),
        height: windowHeight(20),
    },
    addressLoader: {
        width: windowWidth(260),
        borderRadius: windowHeight(4),
        marginTop: windowHeight(10),
        height: windowHeight(20),
    },
});