import { StyleSheet } from "react-native";
import {
    windowHeight
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';

export default orderDetailsStyles = StyleSheet.create({
    btn: {
        width: '94%',
        backgroundColor: Appcolor.primary,
        position: 'absolute',
        bottom: windowHeight(10),
        alignSelf: 'center'
    },
})