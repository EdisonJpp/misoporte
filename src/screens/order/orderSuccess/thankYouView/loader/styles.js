import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default thankYouViewLoaderStyles = StyleSheet.create({
    txtLoader: {
        alignSelf: 'center',
        height: windowHeight(20),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
});