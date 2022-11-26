import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";

export default AddAddressLoaderStyles = StyleSheet.create({
    mapLoader: {
        width: '100%',
        height: '100%'
    },
    txtLoader: {
        width: windowWidth(48),
        height: windowHeight(40),
        borderRadius: windowWidth(4)
    },
    longTxtLoader: {
        width: windowWidth(120),
        height: windowHeight(20),
        borderRadius: windowWidth(4)
    },
    txtLeft: {
        marginLeft: windowWidth(10),
    },
    txtRight: {
        marginRight: windowWidth(10),
    },
    addressLoader: {
        width: windowWidth(320),
        height: windowHeight(20),
        marginTop: windowWidth(10),
        borderRadius: windowWidth(4)
    },
    addressView: {
        marginBottom: windowHeight(60)
    },
    locationView: {
        marginTop: windowHeight(20)
    },
    contentView: {
        alignItems: 'center'
    },
});