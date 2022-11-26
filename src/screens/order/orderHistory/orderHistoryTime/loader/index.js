import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const orderHistoryTime = [{}, {}, {}, {}];

export default orderHistoryTimeLoader = (props) => {
    return (
        orderHistoryTime.map(() =>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.timeLoader} />
                }
            />
        )
    )
}