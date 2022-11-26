import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";
import Appcolor from "../../../../../theme/colors";

export default userDetailViewLoaderStyles = StyleSheet.create({
    nameViewLoader: {
        width: '100%',
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        borderBottomColor: Appcolor.placeholder,
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    imgLoader: {
        width: windowHeight(50),
        height: windowHeight(50),
        borderRadius: windowHeight(25)
    },
    dataLoader: {
        marginHorizontal: windowWidth(10)
    },
    dataLoaderRight: {
        marginRight: windowWidth(10)
    },
    nameLoader: {
        width: windowWidth(140),
        height: windowHeight(20),
        borderRadius: windowWidth(4)
    },
    tagLoader: {
        width: windowWidth(80),
        height: windowHeight(20),
        borderRadius: windowWidth(4),
        marginTop: windowHeight(4)
    },
    typeLoader: {
        width: windowWidth(44),
        height: windowHeight(38),
        borderRadius: windowWidth(4),
        marginHorizontal: windowWidth(4)
    },
})