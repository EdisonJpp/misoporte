import React from "react";
import { View } from "react-native";
import SliderStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default sliderLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={[SliderStyles.image, Styles.view]} />
            } />
    )
}