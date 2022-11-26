import { StyleSheet } from "react-native";
import {
    windowHeight,
} from "../../theme/appConstant";
import Appcolor from "../../theme/colors";

export default selectedStyles = StyleSheet.create({
    selectView: {
        backgroundColor: Appcolor.primary,
        paddingHorizontal: windowHeight(6),
        position: 'absolute',
        top: 0,
        paddingVertical: windowHeight(3),
        right: 0
    },
    selectLeft: {
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
    },
    selectRight: {
        borderTopStartRadius: windowHeight(5),
        borderBottomEndRadius: windowHeight(5),
    },
})