import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default orderDataViewLoaderStyles = StyleSheet.create({
    dataLoader: {
        width: windowWidth(50),
        borderRadius: windowHeight(6),
        height: windowHeight(44)
    },
    titleLoader: {
        width: windowWidth(120),
        height: windowHeight(22),
        borderRadius: windowWidth(4)
    },
    subTxtLoader: {
        width: windowWidth(120),
        height: windowHeight(18),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(2)
    },
});