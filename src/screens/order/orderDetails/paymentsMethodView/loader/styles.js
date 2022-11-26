import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default paymentMethodLoaderStyles = StyleSheet.create({
    paymentLoader: {
        marginTop: windowHeight(10),
        marginLeft: windowWidth(20)
    },
    cardIconLoader: {
        width: windowWidth(60),
        borderRadius: windowHeight(4),
        height: windowHeight(54),
    },
    cardNumberLoader: {
        width: windowWidth(160),
        borderRadius: windowHeight(4),
        marginTop: windowHeight(10),
        height: windowHeight(20),
        marginLeft: windowWidth(20)
    },
});