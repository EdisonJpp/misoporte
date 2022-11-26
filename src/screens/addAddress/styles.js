import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../theme/appConstant";
import Appcolor from '../../theme/colors';
import Commonfonts from '../../theme/commonfonts';

export default AddAddressStyle = StyleSheet.create({
    mapImg: {
        width: '100%',
        height: '80%',
        marginTop: windowHeight(10)
    },
    truckView: {
        position: 'absolute',
        top: windowHeight(80),
        width: '94%',
        alignSelf: 'center',
        borderRadius: windowHeight(6),
        paddingVertical: windowHeight(10),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(16)
    },
    deliveryTime: {
        fontSize: fontSizes.FONT21,
        fontFamily: Commonfonts.mulish
    },
    mapView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: windowHeight(320),
    },
    map: {
        height: windowHeight(40),
        width: windowHeight(40),
        borderRadius: windowHeight(20),
        backgroundColor: Appcolor.white,
        alignItems: 'center',
        justifyContent: 'center',
        margin: windowHeight(20)
    },
    paymentView: {
        borderTopStartRadius: windowHeight(24),
        borderTopEndRadius: windowHeight(24),
        width: '100%',
        height: windowHeight(280),
        paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(10)
    },
    locationView: {
        marginTop: windowHeight(19),
        alignItems: 'center',
        marginBottom: windowHeight(20)
    },
    location: {
        backgroundColor: Appcolor.primary,
        width: windowWidth(48),
        height: windowHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(6)
    },
    locationTxt: {
        marginLeft: windowWidth(20),
        fontSize: fontSizes.FONT24,
        fontFamily: Commonfonts.mulish,
    },
    addView: {
        marginTop: windowHeight(10),
        marginLeft: windowWidth(6),
        paddingVertical: windowHeight(4),
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(20),
        borderBottomColor: Appcolor.placeholder
    },
    nameView: {
        alignItems: 'center'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        marginLeft: windowWidth(10)
    },
    add: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        marginTop: windowHeight(6)
    },
    btn: {
        width: '100%',
        backgroundColor: Appcolor.primary,
        marginBottom: windowHeight(60)
    },
    mapPin: {
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        left: windowWidth(60),
    },
});