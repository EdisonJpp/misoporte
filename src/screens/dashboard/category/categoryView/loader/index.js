import React from "react";
import { View } from "react-native";
import { windowWidth } from "../../../../../theme/appConstant";
import Appcolor from "../../../../../theme/colors";
import CategoryStyle from "../styles";
import { Loader } from "../../../../../commonComponents/loader";
import Styles from "./styles";

const category = [{}, {}, {}, {}]

export default CategoryLoader = (props) => {
    return (
        category.map(() =>
            <View style={[CategoryStyle.nameView, props.context.isDark ? { backgroundColor: Appcolor.darkDrawer } : { backgroundColor: Appcolor.gray }]} >
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.categoryView} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.categorySubview, { width: windowWidth(90) }]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.categorySubview, { width: windowWidth(60) }]} />
                    }
                />
            </View>
        )
    )
}