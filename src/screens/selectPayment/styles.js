import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from "../../theme/commonfonts";

export default selectPaymentStyle = StyleSheet.create({
    separator: {
        width: '100%',
        height: windowHeight(1),
        backgroundColor: Appcolor.placeholder
    },
    list: {
        marginHorizontal: windowWidth(24),
        marginTop: windowHeight(10)
    },
    listView: {
        paddingVertical: windowHeight(20),
    },
    arrowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    type: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulishBold
    },
    arrow: {
        height: windowHeight(26),
        width: windowHeight(26),
        borderRadius: windowHeight(13),
        alignItems: 'center',
        justifyContent: 'center'
    },
    select: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: windowHeight(6),
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(10),
        borderColor: Appcolor.primary
    },
    icon: {
        height: windowHeight(50),
        width: windowWidth(50),
        resizeMode: 'contain'
    },
    value: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginLeft: windowWidth(14)
    },
    selectView: {
        backgroundColor: Appcolor.primary,
        paddingHorizontal: windowWidth(6),
        position: 'absolute',
        right: 0,
        top: 0,
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
        paddingVertical: windowHeight(3)
    },
    valueList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderColor: Appcolor.primary,
        width: '50%'
    },
    valueTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginLeft: windowWidth(14),
    },
    btn: {
        width: '94%',
        backgroundColor: Appcolor.primary,
        position: 'absolute',
        bottom: windowHeight(10),
        alignSelf: 'center'
    },
})