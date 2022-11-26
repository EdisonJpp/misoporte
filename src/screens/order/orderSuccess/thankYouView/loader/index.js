import React from "react";
import { View } from "react-native";
import { windowWidth } from "../../../../../theme/appConstant";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default thankYouViewLoader = (props) => {
    return (
        <View>
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.txtLoader, { width: windowWidth(180) }]} />
                }
            />
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.txtLoader, { width: windowWidth(280) }]} />
                }
            />
        </View>
    )
}