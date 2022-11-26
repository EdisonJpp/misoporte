import React from "react";
import { View } from "react-native";
import CategoryStyle from "../styles";
import { Loader } from "../../../../../commonComponents/loader";

export default BannerLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={CategoryStyle.bannerImg} />
            }
        />
    )
}