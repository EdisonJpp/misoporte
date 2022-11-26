import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";

export default couponLoaderStyles = StyleSheet.create({
    mainView: {
        width: '90%',
        marginTop: windowHeight(10),
        alignSelf: 'center',
        height: windowHeight(90),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: windowWidth(10)
    },
    percentView: {
        height: windowHeight(44),
        width: windowWidth(70),
        borderRadius: windowWidth(2)
    },
    dataView: {
        marginLeft: windowWidth(20)
    },
    dataViewRight: {
        marginRight: windowWidth(20)
    },
    titleView: {
        height: windowHeight(20),
        width: windowWidth(120),
        borderRadius: windowWidth(2)
    },
    subTitleView: {
        height: windowHeight(20),
        width: windowWidth(150),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(2)
    },
    useCodeView: {
        height: windowHeight(24),
        width: windowWidth(80),
        borderRadius: windowWidth(2)
    },
    codeView: {
        height: windowHeight(26),
        width: windowWidth(80),
        borderRadius: windowWidth(16),
        marginTop: windowHeight(4)
    },
})