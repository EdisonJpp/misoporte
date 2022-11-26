import React from "react";
import { View } from "react-native";
import RecentlyBoughtStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const recentlyBought = [{}, {}, {}, {}, {}];

export default recentlyBoughtLoader = (props) => {
    return (
        recentlyBought.map(() =>
            <Loader
                context={props.context}
                view={
                    <View style={[RecentlyBoughtStyles.recentlyImage, Styles.view]} />
                }
            />
        )
    )
}