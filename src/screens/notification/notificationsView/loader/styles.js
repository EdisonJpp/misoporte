import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";

export default notificationLoaderStyles = StyleSheet.create({
    titleLoader: {
        width: windowWidth(80),
        height: windowHeight(20),
        marginTop: windowHeight(20),
        marginHorizontal: windowWidth(20)
    },
    mainView: {
        justifyContent: 'space-between',
        marginTop: windowHeight(10),
        width: '94%',
        alignSelf: 'center',
        padding: windowWidth(20),
        borderRadius: windowWidth(14),
    },
    imgLoader: {
        height: windowHeight(50),
        width: windowWidth(60),
        borderRadius: windowHeight(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtLoader: {
        width: windowWidth(200),
        height: windowHeight(20)
    },
    subTxtLoader: {
        width: windowWidth(160),
        height: windowHeight(20),
        marginTop: windowHeight(4)
    },
    txtLeft: {
        marginHorizontal: windowWidth(10)
    },
});