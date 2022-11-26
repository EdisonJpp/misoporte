import { StyleSheet } from "react-native";
import Appcolor from '../../theme/colors';

export default optionButtonStyles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        width: '100%'
    },
    closeBtn: {
        width: '48%',
        backgroundColor: Appcolor.white,
        borderWidth: 1,
        borderColor: Appcolor.primary
    },
    applyBtn: {
        width: '48%',
        backgroundColor: Appcolor.primary,
    }
});