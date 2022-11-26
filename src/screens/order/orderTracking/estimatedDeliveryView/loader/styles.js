import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";
import Appcolor from "../../../../../theme/colors";

export default estimatedDeliveryViewLoaderStyles = StyleSheet.create({
    deliveryLoader: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        borderBottomColor: Appcolor.placeholder
    },
    deliveryTxtLoader: {
        alignSelf: 'center',
        width: windowWidth(180),
        height: windowHeight(20),
        borderRadius: windowWidth(4)
    },
    timeTxtLoader: {
        alignSelf: 'center',
        width: windowWidth(280),
        height: windowHeight(20),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
})