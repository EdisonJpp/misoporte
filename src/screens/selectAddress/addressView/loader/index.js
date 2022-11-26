import React from "react";
import { View } from "react-native";
import Appcolor from "../../../../theme/colors";
import { Loader } from "../../../../commonComponents";
import Styles from "./styles";

const address = [{}, {}, {}, {}]

export default addressViewLoader = (props) => {
    return (
        address.map((item, key) =>
            <View style={[Styles.mainView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
                <View>
                    <View style={{ flexDirection: props.viewAlign }}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.viewLoader} />
                            } />
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.titleLoader, props.context.isRTL ? Styles.titleLeft : Styles.titleRight]} />
                            } />
                        {key === 0 &&
                            <Loader
                                context={props.context}
                                view={
                                    <View style={[Styles.tagLoader, props.context.isRTL ? Styles.titleLeft : Styles.titleRight]} />
                                } />}
                    </View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.nameLoader, { alignSelf: props.selfAlign }]} />
                        } />
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.addressLoader} />
                        } />
                </View>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.imgLoader} />
                    } />
            </View>
        )
    )
}