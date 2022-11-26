import React from "react";
import { View, FlatList } from "react-native";
import CategoryStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const category = [{}, {}, {}, {}, {}, {}, {}, {}];

export default categoryLoader = (props) => {
    return (
        <FlatList
            data={category}
            numColumns={4}
            style={CategoryStyles.list}
            ItemSeparatorComponent={() => <View style={CategoryStyles.separator} />}
            renderItem={() =>
                <Loader
                    context={props.context}
                    view={
                        <View style={CategoryStyles.listView}>
                            <View style={CategoryStyles.imageView} />
                            <View style={Styles.categoryView} />
                        </View>
                    }
                />
            }
        />
    )
}