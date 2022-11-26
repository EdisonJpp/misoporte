import { StyleSheet } from "react-native";
import {
    windowHeight,
} from "../../../theme/appConstant";
import Colors from '../../../theme/colors';

export default homeStyles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    scrollView: {
        paddingTop: windowHeight(10)
    },
});