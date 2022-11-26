import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default orderHistoryTimeLoaderStyles = StyleSheet.create({
    timeLoader: {
        width: windowWidth(120),
        height: windowHeight(40),
        borderRadius: windowWidth(4),
        marginLeft: windowWidth(10)
    },
});