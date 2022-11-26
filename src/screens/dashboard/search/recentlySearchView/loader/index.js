import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";
import Appcolor from "../../../../../theme/colors";

const recentSearch = [{}, {}, {}, {}];

export default recentlySearchLoader = (props) => {
    return (
        recentSearch.map(() =>
            <View style={[Styles.nameView, props.context.isDark ? { backgroundColor: Appcolor.darkDrawer } : { backgroundColor: Appcolor.gray }]} >
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.view} />
                    }
                />
            </View>
        )
    )
}