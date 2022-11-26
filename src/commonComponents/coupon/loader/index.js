import React from "react";
import { View } from "react-native";
import { Loader } from "../../../commonComponents";
import Styles from "./styles";
import Appcolor from "../../../theme/colors";

export const CouponLoader = (props) => {
    return (
        <View style={[Styles.mainView, { flexDirection: props.viewAlign }, props.context.isDark ? { backgroundColor: '#1b1bd1e' } : { backgroundColor: Appcolor.gray }]}>
            <View style={{ flexDirection: props.viewAlign }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.percentView} />
                    }
                />
                <View style={[props.context.isRTL ? Styles.dataViewRight : Styles.dataView]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.titleView, { alignSelf: props.selfAlign }]} />
                        } />

                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.subTitleView} />
                        } />
                </View>
            </View>
            <View>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.useCodeView} />
                    } />

                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.codeView} />
                    } />
            </View>
        </View>
    )
}