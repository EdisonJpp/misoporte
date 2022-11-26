import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default userDetailViewLoader = (props) => {
    return (
        <View style={[Styles.nameViewLoader, { flexDirection: props.viewAlign }]}>
            <View style={{ flexDirection: props.viewAlign }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.imgLoader} />
                    }
                />
                <View style={Styles.dataLoader}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.nameLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.tagLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                </View>

            </View>
            <View style={{ flexDirection: props.viewAlign }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.typeLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.typeLoader} />
                    }
                />
            </View>
        </View>
    )
}