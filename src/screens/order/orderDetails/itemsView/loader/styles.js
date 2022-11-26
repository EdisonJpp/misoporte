import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default itemsViewLoaderStyles = StyleSheet.create({
    quantityLoader: {
        height: windowHeight(26),
        width: windowWidth(30),
        borderRadius: windowWidth(4)
    },
    intoLoader: {
        height: windowHeight(20),
        width: windowWidth(24),
        borderRadius: windowWidth(4),
        marginHorizontal: windowWidth(10)
    },
    titleLoader: {
        height: windowHeight(20),
        width: windowWidth(240),
        borderRadius: windowWidth(4)
    },
    gramLoader: {
        height: windowHeight(20),
        width: windowWidth(60),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
    priceLoader: {
        width: windowWidth(80),
        height: windowHeight(30),
        borderRadius: windowWidth(4),
    },
    dataView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginLeft: windowWidth(10)
    },
});