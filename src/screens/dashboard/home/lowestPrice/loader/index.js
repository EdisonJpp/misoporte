import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const lowestPrice = [{}, {}, {}, {}];

export default lowestPriceLoader = (props) => {
    return (
        lowestPrice.map(() =>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.priceView} />
                }
            />
        )
    )
}