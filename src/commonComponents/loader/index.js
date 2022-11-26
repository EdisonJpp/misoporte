import React from "react";
import Skeleton from "react-native-skeleton-placeholder";
import Appcolor from "../../theme/colors";

export function Loader(props) {
    return (
        <Skeleton backgroundColor={props.context.isDark ? '#1c1c1c' : Appcolor.loaderBackground} highlightColor={props.context.isDark ? Appcolor.loaderDarkHighlight : Appcolor.loaderLightHighlight}>
            {props.view}
        </Skeleton>
    )
}