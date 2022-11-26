import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default orderHistoryViewStyles = StyleSheet.create({
    listView: {
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(20),
        paddingVertical: windowHeight(10),
        paddingHorizontal: windowWidth(10),
        borderRadius: windowWidth(12)
    },
    subView: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10)
    },
    idView: {
        flexDirection: 'row'
    },
    data: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
    },
    add: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT18,
        color: Appcolor.content,
        marginTop: windowHeight(4)
    },
    paidView: {
        marginTop: windowHeight(4)
    },
    orderAgain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: windowHeight(10)
    },
    reteNReview: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT17,
        color: Appcolor.content
    },
    paid: {
        color: Appcolor.primary
    },
    containerStyle: {
        paddingBottom: windowHeight(220)
    },
})