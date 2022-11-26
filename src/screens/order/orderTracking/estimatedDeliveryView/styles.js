import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default estimatedDeliveryViewStyles = StyleSheet.create({
    deliveryTime: {
        color: Appcolor.content,
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        alignSelf: 'center',
        marginTop: windowHeight(10)
    },
    trackingTime: {
        color: Appcolor.primary,
        fontSize: fontSizes.FONT26,
        fontFamily: Commonfonts.mulishBold,
        alignSelf: 'center',
        width: '100%',
        textAlign: 'center',
        borderBottomWidth: 0.7,
        paddingBottom: windowHeight(16),
        borderBottomColor: Appcolor.placeholder
    },
})