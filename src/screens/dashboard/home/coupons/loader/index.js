import React from "react";
import { View } from "react-native";
import CouponsStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";
import colors from "../../../../../theme/colors";

const coupons = [{}, {}, {}, {}];

export default couponsLoader = (props) => {
    return (
        coupons.map(() =>
            <View style={{ backgroundColor: props.context.isDark ? colors.dark : colors.drawer }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={[CouponsStyles.dataView, Styles.couponView]} />
                    }
                />
            </View>
        )
    )
}