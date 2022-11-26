import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default categoryLoaderStyles = StyleSheet.create({
    categoryView: {
        width: windowWidth(100),
        height: windowHeight(20),
        marginTop: windowHeight(8),
        borderRadius: windowWidth(4)
    },
});