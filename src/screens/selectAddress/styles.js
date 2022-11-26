import { StyleSheet } from "react-native";
import {
    windowHeight,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';

export default selectAddressStyle = StyleSheet.create({
    btn: {
        width: '90%',
        backgroundColor: Appcolor.primary,
        marginBottom: windowHeight(20),
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
});