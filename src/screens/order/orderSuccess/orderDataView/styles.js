import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default orderDataViewStyles = StyleSheet.create({
    totalView: {
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: windowHeight(20)
    },
    optionView: {
        backgroundColor: Appcolor.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth(44),
        borderRadius: windowHeight(6),
        height: windowHeight(40)
    },
    option: {
        marginLeft: windowWidth(10)
    },
    optionRight: {
        marginRight: windowWidth(10)
    },
    orderDate: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish
    },
    date: {
        fontSize: fontSizes.FONT18,
        color: Appcolor.content,
        fontFamily: Commonfonts.mulish
    },
})