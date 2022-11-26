import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowWidth,
    windowHeight,
    IsIOS
} from "../../../theme/appConstant";
import Commonfonts from "../../../theme/commonfonts";
import Appcolor from '../../../theme/colors';

export default notificationStyles = StyleSheet.create({
    offersView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(10)
    },
    alertView: {
        paddingLeft: windowWidth(20),
        height: windowHeight(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        width: windowWidth(90),
        height: windowHeight(2),
        backgroundColor: Appcolor.primary,
        alignSelf: 'center',
        bottom: 0,
        borderRadius: windowWidth(10)
    },
    alert: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        textAlignVertical: 'center',
        height: IsIOS ? windowHeight(50) : windowHeight(60),
        paddingTop: IsIOS ? windowHeight(15) : 0,
        width: windowWidth(90),
        textAlign: 'center'
    },
    lineViewLeft: {
        marginLeft: windowWidth(30)
    },
    lineViewRight: {
        marginRight: windowWidth(30)
    },
    readView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    readTxt: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20,
        color: Appcolor.primary,
        marginLeft: windowWidth(4)
    },
})