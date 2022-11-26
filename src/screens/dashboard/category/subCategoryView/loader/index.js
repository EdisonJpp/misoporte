import React from "react";
import { View, FlatList } from "react-native";
import { windowWidth } from "../../../../../theme/appConstant";
import CategoryStyle from "../styles";
import { Loader } from "../../../../../commonComponents/loader";
import Styles from "./styles";

const subCate = [{}, {}, {}, {}, {}, {}]

export default subCategoryLoader = (props) => {
    return (
        <FlatList
            numColumns={3}
            data={subCate}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            ItemSeparatorComponent={() => <View style={CategoryStyle.separator} />}
            contentContainerStyle={CategoryStyle.containerStyle}
            renderItem={() =>
                <Loader
                    context={props.context}
                    view={
                        <View>
                            <View style={[CategoryStyle.itemImg, { borderRadius: windowWidth(4) }]} />
                            <View style={Styles.listView} />
                        </View>
                    }
                />
            }
        />
    )
}