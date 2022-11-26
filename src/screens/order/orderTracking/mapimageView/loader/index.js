import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default mapImageViewLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={Styles.mapLoader} />
            }
        />
    )
}