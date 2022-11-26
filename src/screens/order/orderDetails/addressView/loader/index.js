import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default addressLoader = (props) => {
    return (
        <View style={Styles.addLoader}>
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.nameLoader, { alignSelf: props.selfAlign }]} />
                }
            />
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.addressLoader, { alignSelf: props.selfAlign }]} />
                }
            />
        </View>
    )
}