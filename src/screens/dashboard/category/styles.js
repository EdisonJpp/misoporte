import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";

export default categoryStyles = StyleSheet.create({
    darkStyle: {
        height: windowHeight(24),
        width: windowWidth(160),
        resizeMode: 'stretch'
    },
    scrollView: {
        marginBottom: windowHeight(60)
    },
    dataView: {
        marginTop: windowHeight(20),
        justifyContent: 'space-between'
    },
    vegies: {
        marginLeft: windowWidth(16)
    },
    vegiesRight: {
        marginRight: windowWidth(16)
    },
});