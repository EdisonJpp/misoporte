import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../theme/appConstant";
import Commonfonts from "../../theme/commonfonts";
import Appcolor from '../../theme/colors';

export default orderHistoryStyles = StyleSheet.create({
    listView: {
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(20)
    },
    dayTxt: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20,
        color: Appcolor.content,
        marginLeft: windowWidth(4),
        marginBottom: windowHeight(16),
        marginTop: windowHeight(10)
    },
    columnWrapperStyle: {
        justifyContent: 'space-between'
    },
    separator: {
        height: windowHeight(10)
    },
    dataView: {
        width: '48%',
        height: windowHeight(46),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        borderWidth: 0.5,
        borderColor: Appcolor.primary,
    },
    txt: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginBottom: windowHeight(20)
    },
})