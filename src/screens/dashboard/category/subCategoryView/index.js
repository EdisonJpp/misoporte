import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Styles from './styles';
import Loader from "./loader";

export default subCategory = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} /> :
            <FlatList
                data={props.subCategory}
                numColumns={3}
                ItemSeparatorComponent={() => <View style={Styles.separator} />}
                contentContainerStyle={Styles.containerStyle}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('ProductsList')} style={Styles.imgView}>
                        <View style={[Styles.itemImg, { backgroundColor: props.colors.primary }]}>
                            <Image resizeMode='contain' source={item.image} style={Styles.img} />
                        </View>
                        <Text style={Styles.nameTxt}>{props.t(item.name)}</Text>
                    </TouchableOpacity>
                }
            />
    )
}