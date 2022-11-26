import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default subCategoryLoaderLoaderStyles = StyleSheet.create({
    listView: {
        width: windowWidth(85),
        height: windowHeight(14),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(10)
    },

});