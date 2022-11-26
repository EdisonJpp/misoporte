import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';

export default totalViewStyles = StyleSheet.create({
    total: {
        marginBottom: windowHeight(80),
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(20)
    },
    btn: {
        width: '100%',
        backgroundColor: Appcolor.primary
    },
});