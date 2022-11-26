import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default orderHistoryLoaderStyles = StyleSheet.create({
    idLoader: {
        width: windowWidth(240),
        height: windowHeight(24),
        borderRadius: windowWidth(4)
    },
    addLoader: {
        height: windowHeight(20),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
    imageLoader: {
        width: windowWidth(110),
        height: windowHeight(80),
        borderRadius: windowHeight(10)
    },
    orderAgainLoader: {
        width: windowWidth(80),
        height: windowHeight(24),
        borderRadius: windowWidth(4)
    },
    rateLoader: {
        width: windowWidth(140),
        height: windowHeight(24),
        borderRadius: windowWidth(4)
    },
});