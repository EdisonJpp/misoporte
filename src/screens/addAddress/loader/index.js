import React from "react";
import { View } from "react-native";
import { Loader } from "../../../commonComponents";
import Styles from "./styles";

const locations = [{}, {}];

export const MapLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={Styles.mapLoader} />
            }
        />
    )
}

export const AddressLoader = (props) => {
    return (
        <View style={Styles.addressView}>
            {locations.map(() =>
                <View style={Styles.locationView}>
                    <View style={[Styles.contentView, { flexDirection: props.viewAlign }]}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.txtLoader} />
                            }
                        />
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.longTxtLoader, props.context.isRTL ? Styles.txtLeft : Styles.txtRight]} />
                            }
                        />
                    </View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.addressLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                </View>
            )}
        </View>
    )
}