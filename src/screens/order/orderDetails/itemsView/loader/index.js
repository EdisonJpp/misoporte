import React from "react";
import { View } from "react-native";
import OrderStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const items = [{}, {}, {}, {}];

export default ItemsLoader = (props) => {
    return (
        items.map(() =>
            <View style={[OrderStyles.listView, { flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.quantityLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.intoLoader} />
                    }
                />
                <View style={[Styles.dataView, { flexDirection: props.viewAlign }]}>
                    <View style={OrderStyles.nameView}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.titleLoader} />
                            }
                        />
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.gramLoader, { alignSelf: props.selfAlign }]} />
                            }
                        />
                    </View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.priceLoader} />
                        }
                    />
                </View>
            </View >
        )
    )
}