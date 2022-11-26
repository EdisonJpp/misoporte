import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default categoryLoaderStyles = StyleSheet.create({
    categoryView: {
        width: windowWidth(60),
        height: windowHeight(50),
        borderRadius: windowWidth(2)
    },
    categorySubview: {
        height: windowHeight(10),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    listView: {
        width: windowWidth(85),
        height: windowHeight(14),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(10)
    },

});