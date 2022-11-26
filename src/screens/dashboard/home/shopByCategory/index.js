import React, { useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import Data from '../../../../utils/json';
import Styles from "./styles";
import Loader from "./loader";

export default shopByCategory = (props) => {

    const [category] = useState(Data.category);
    const categoryColors = Data.colors;

    const goToList = () => {
        props.navigation.navigate('ProductsList')
    }

    return (
        <View>
            <View style={Styles.category}>
                <View style={Styles.line} />
                <Text style={[Styles.shopByCategory, { backgroundColor: props.colors.background, color: props.colors.text }]}>{props.t('homepage.shopByCategory')}</Text>
            </View>
            {props.showLoader ? <Loader context={props.context} /> :
                <FlatList
                    data={category}
                    numColumns={4}
                    style={Styles.list}
                    ItemSeparatorComponent={() => <View style={Styles.separator} />}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={Styles.listView} activeOpacity={0.7} onPress={goToList}>
                            <View style={[Styles.imageView, {
                                backgroundColor: categoryColors[index % categoryColors.length],
                            }]}>
                                <Image source={item.image} style={Styles.image} resizeMode='contain' />
                            </View>
                            <Text style={[Styles.name, { color: props.colors.text }]}>{props.t(item.name)}</Text>
                        </TouchableOpacity>
                    }
                />
            }
        </View>
    )
}