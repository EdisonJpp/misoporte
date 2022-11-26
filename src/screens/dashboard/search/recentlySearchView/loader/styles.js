import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default recentlySearchLoaderStyles = StyleSheet.create({
    view: {
        width: windowWidth(120),
        height: windowHeight(20),
        borderRadius: windowWidth(4),
    },
    nameView: {
        width: windowWidth(170),
        height: windowHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: windowWidth(20),
        borderRadius: windowWidth(4),
    }
});