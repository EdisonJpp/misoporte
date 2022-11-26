import { StyleSheet } from "react-native";
import {
    windowWidth,
    windowHeight
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';

export default orderTrackingStyles = StyleSheet.create({
    subView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: windowHeight(260),
    },
    view: {
        borderTopStartRadius: windowHeight(24),
        borderTopEndRadius: windowHeight(24),
        width: '100%',
        height: windowHeight(280),
        paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(10),
    },
    btn: {
        width: '100%',
        backgroundColor: Appcolor.primary,
        marginBottom: windowHeight(40)
    },
})