import { StyleSheet } from "react-native";
import {
    windowHeight
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';

export default orderSuccessStyles = StyleSheet.create({
    orderSuccess: {
        width: '100%',
        height: windowHeight(250),
        resizeMode: 'contain',
        marginTop: windowHeight(30)
    },
    btn: {
        width: '94%',
        backgroundColor: Appcolor.primary,
        position: 'absolute',
        bottom: windowHeight(10),
        alignSelf: 'center'
    },
})