import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import { windowHeight } from "../../../../../theme/appConstant";
import Styles from "./styles";
import Appcolor from "../../../../../theme/colors";

export default orderDetailLoader = (props) => {
    return (
        <View style={[Styles.orderLoader, { flexDirection: props.viewAlign, backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.img} />
                }
            />
            <View style={Styles.detailView}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.title} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.title, { marginTop: windowHeight(4) }]} />
                    }
                />
            </View>
        </View>
    )
}