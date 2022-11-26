import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";

export default notificationLoaderStyles = StyleSheet.create({
    titleLoader: {
        width: windowWidth(80),
        height: windowHeight(20),
        marginTop: windowHeight(20),
        marginLeft: windowWidth(20)
    },
    mainView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: windowHeight(10),
        width: '94%',
        alignSelf: 'center',
        padding: windowWidth(20),
        borderRadius: windowWidth(14),
    },
    imgLoader: {
        height: windowHeight(50),
        width: windowWidth(60),
        borderRadius: windowHeight(8)
    },
    txtLoader: {
        width: windowWidth(200),
        height: windowHeight(20)
    },
    subTxtLoader: {
        width: windowWidth(160),
        height: windowHeight(20),
        marginTop: windowHeight(10)
    },
    tagLoader: {
        height: windowHeight(24),
        borderRadius: windowWidth(6),
        width: windowWidth(60)
    },
});