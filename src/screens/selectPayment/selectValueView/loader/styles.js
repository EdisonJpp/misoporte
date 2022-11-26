import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";

export default selectValueViewLoaderStyles = StyleSheet.create({
    titleView: {
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(20),
        alignItems: 'center'
    },
    mainView: {
        marginTop: windowHeight(6),
        width: '94%',
        alignSelf: 'center',
        padding: windowWidth(20),
        borderRadius: windowWidth(8),
    },
    viewLoader: {
        width: windowWidth(46),
        height: windowHeight(40),
        borderRadius: windowHeight(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleLoader: {
        width: windowWidth(200),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
        marginHorizontal: windowWidth(20)
    },
    cardView: {
        width: windowWidth(200),
        height: windowHeight(20)
    },
    numberView: {
        width: windowWidth(26),
        height: windowHeight(20),
        borderRadius: windowHeight(4)
    },
    selectedView: {
        width: windowWidth(26),
        height: windowHeight(20),
        borderRadius: windowHeight(4),
        position: 'absolute',
        top: windowHeight(-15)
    },
    selectedRight: {
        right: windowWidth(-15),
    },
    selectedLeft: {
        left: windowWidth(-15),
    }
});