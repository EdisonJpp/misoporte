import React from "react";
import { View } from "react-native";
import { Loader } from "../..";
import Styles from "./styles";

export default totalLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={Styles.mainView} />
            }
        />
    )
}