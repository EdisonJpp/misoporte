import React from "react";
import { View } from "react-native";
import Appcolor from "../../../../theme/colors";
import { Loader } from "../../../../commonComponents";
import Styles from "./styles";

const address = [{}, {}, {}]

export default selectValueViewLoader = (props) => {
    return (
        <View>
            <View style={[Styles.titleView, { flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.cardView} />
                    } />
                <View style={[Styles.viewLoader, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.numberView} />
                        } />
                </View>
            </View>
            {address.map((item, key) =>
                <View style={[Styles.mainView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, }]}>
                    {key === 0 &&
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.selectedView, props.context.isRTL ? Styles.selectedLeft : Styles.selectedRight]} />
                            } />}
                    <View style={{ flexDirection: props.viewAlign, alignItems: 'center' }}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.viewLoader} />
                            } />
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.titleLoader} />
                            } />
                    </View>
                </View>
            )}
            {address.map(() =>
                <View style={[Styles.titleView, { flexDirection: props.viewAlign }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.cardView} />
                        } />
                    <View style={[Styles.viewLoader, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.numberView} />
                            } />
                    </View>
                </View>)}
        </View>
    )
}