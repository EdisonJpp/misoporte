import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default addressViewStyles = StyleSheet.create({
    option: {
        width: windowWidth(44),
        height: windowHeight(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
    },
    location: {
        height: windowHeight(120),
        marginTop: windowHeight(20)
    },
    sepratorImg: {
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'contain',
        height: windowHeight(120)
    },
    homeView: {
        justifyContent: 'space-between',
        height: windowHeight(120)
    },
    storeLocation: {
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(10)
    },
    storeLeft: {
        marginLeft: windowWidth(10)
    },
    storeRight: {
        marginRight: windowWidth(10)
    },
    locationTxt: {
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
    },
    storeLocationTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content
    },
    btn: {
        width: '100%',
        backgroundColor: Appcolor.primary,
        marginBottom: windowHeight(40)
    },
})