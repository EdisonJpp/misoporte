import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default paymentMethodLoader = (props) => {
    return (
        <View style={[Styles.paymentLoader, { flexDirection: props.viewAlign }]}>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.cardIconLoader} />
                }
            />
            <Loader
                context={props.context}
                view={
                    <View style={Styles.cardNumberLoader} />
                }
            />
        </View>
    )
}
