import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default itemsViewStyles = StyleSheet.create({
    orderDetailView: {
        width: '92%',
        alignSelf: 'center',
        backgroundColor: Appcolor.primary,
        borderRadius: windowHeight(10),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: windowWidth(10),
        marginTop: windowHeight(10),
        paddingVertical: windowHeight(20)
    },
    idView: {
        marginLeft: windowWidth(10)
    },
    id: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.white,
        fontFamily: Commonfonts.mulish
    },
    orderDetail: {
        fontSize: fontSizes.FONT22,
        color: Appcolor.white,
        fontFamily: Commonfonts.mulishBold
    },
    item: {
        fontSize: fontSizes.FONT22,
        marginHorizontal: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
        marginTop: windowHeight(26)
    },
    listView: {
        marginLeft: windowWidth(20),
        alignItems: 'center',
        marginTop: windowHeight(20)
    },
    quantityTxt: {
        fontSize: fontSizes.FONT18,
        color: Appcolor.white,
        backgroundColor: Appcolor.primary,
        width: windowWidth(30),
        borderRadius: windowWidth(5),
        height: windowHeight(26),
        textAlignVertical: 'center',
        textAlign: 'center',
        marginRight: windowWidth(6),
        fontFamily: Commonfonts.mulish
    },
    nameView: { marginLeft: windowWidth(4) },
    nameTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    gramTxt: {
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
    price: {
        fontSize: fontSizes.FONT24,
        fontFamily: Commonfonts.mulish,
        position: 'absolute',
        right: windowWidth(20)
    },
    dataView: {
        marginTop: windowHeight(10)
    },
    addTxt: {
        marginLeft: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
        fontSize: fontSizes.FONT24
    },
    name: {
        marginLeft: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT21,
        marginTop: windowHeight(10)
    },
    locationTxt: {
        marginLeft: windowWidth(20),
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        fontSize: fontSizes.FONT21
    },
    paymentView: {
        marginTop: windowHeight(20),
        marginBottom: windowHeight(80)
    },
    number: {
        flexDirection: 'row',
        marginLeft: windowWidth(20),
        alignItems: 'center'
    },
    masterCardImg: {
        height: windowHeight(60),
        width: windowWidth(60),
        resizeMode: 'contain'
    },
    cardNumber: {
        marginLeft: windowWidth(10),
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT21
    },
    btn: {
        width: '94%',
        backgroundColor: Appcolor.primary,
        position: 'absolute',
        bottom: windowHeight(10),
        alignSelf: 'center'
    },
})