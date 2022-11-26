import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth
} from "../../../theme/appConstant";

export default totalLoaderStyles = StyleSheet.create({
    mainView: {
        width: windowWidth(120),
        height: windowHeight(20),
        borderRadius: windowWidth(4)
    },
})