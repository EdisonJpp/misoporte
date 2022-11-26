import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default orderDetailLoaderStyles = StyleSheet.create({
    orderLoader: {
        width: '92%',
        borderRadius: windowHeight(10),
        marginTop: windowHeight(10),
        height: windowHeight(90),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: windowWidth(20)
    },
    detailView: {
        alignItems: 'center',
        marginHorizontal: windowWidth(10)
    },
    img: {
        width: windowWidth(60),
        height: windowHeight(50),
        borderRadius: windowWidth(2),
    },
    title: {
        width: windowWidth(120),
        height: windowHeight(24),
        borderRadius: windowWidth(2)
    },
});