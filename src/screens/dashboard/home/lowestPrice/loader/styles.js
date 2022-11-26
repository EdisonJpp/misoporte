import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default lowestPriceLoaderStyles = StyleSheet.create({
    priceView: {
        height: windowHeight(200),
        width: windowWidth(170),
        marginLeft: windowWidth(10),
        borderRadius: windowWidth(10)
    },
});