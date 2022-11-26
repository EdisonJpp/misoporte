import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default orderDetailsViewStyles = StyleSheet.create({
    orderDetailView: {
        width: '92%',
        alignSelf: 'center',
        backgroundColor: Appcolor.primary,
        borderRadius: windowHeight(10),
        alignItems: 'center',
        paddingHorizontal: windowWidth(10),
        marginTop: windowHeight(10),
        paddingVertical: windowHeight(20)
    },
    idView: {
        marginLeft: windowWidth(10)
    },
    id: {
        fontSize: fontSizes.FONT18,
        color: Appcolor.white,
        fontFamily: Commonfonts.mulish
    },
    orderDeliver: {
        fontSize: fontSizes.FONT24,
        color: Appcolor.white,
        fontFamily: Commonfonts.mulish
    }
})