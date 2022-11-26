import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default addressViewLoaderStyles = StyleSheet.create({
    locationTypeLoader: {
        width: windowWidth(50),
        height: windowHeight(44),
        borderRadius: windowHeight(4)
    },
    locationTxtLoader: {
        width: windowWidth(240),
        height: windowHeight(20),
        borderRadius: windowWidth(4)
    },
    locationLoader: {
        width: windowWidth(100),
        height: windowHeight(20),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
})