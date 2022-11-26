import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default estimatedDeliveryViewLoader = (props) => {
    return (
        <View style={Styles.deliveryLoader}>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.deliveryTxtLoader} />
                }
            />
            <Loader
                context={props.context}
                view={
                    <View style={Styles.timeTxtLoader} />
                }
            />
        </View>
    )
}