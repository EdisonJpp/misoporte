import React from "react";
import { View } from "react-native";
import SearchStyle from "../styles";
import { Loader } from "../../../../../commonComponents";
import Appcolor from "../../../../../theme/colors";

const trendingCategory = [{}, {}, {}, {}];

export default trendingCategoryLoader = (props) => {
    return (
        trendingCategory.map(() =>
            <View style={[SearchStyle.image, , props.context.isDark ? { backgroundColor: Appcolor.darkDrawer } : { backgroundColor: Appcolor.gray }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={SearchStyle.img} />
                    }
                />
            </View>
        )
    )
}