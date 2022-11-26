import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Loader from "./loader";

export default categoryView = (props) => {

    const [category] = useState(Data.category);
    const [categoryId, setCategoryId] = useState(1);

    useEffect(() => {
        matchValue(1)
    }, [])
    const matchValue = (id) => {
        setCategoryId(id)
        var subCategory = Data.subCategory
        var arr = [];
        subCategory.map((item) => {
            if (item.id === id) {
                arr.push(item)
            }
        })
        props.getValue(arr)
    }

    return (
        <View>
            {props.showLoader ? <Loader context={props.context} /> :
                category.map((item, key) =>
                    <View>
                        <TouchableOpacity onPress={() => matchValue(key)} activeOpacity={0.8} style={[Styles.nameView, {
                            backgroundColor: categoryId === key ? props.colors.background : props.colors.primary
                        }]}>
                            <Image source={item.image} style={Styles.image} resizeMode='cover' />
                            <Text style={[Styles.name, { color: props.colors.text }]}>{props.t(item.name)}</Text>
                        </TouchableOpacity>
                        <View style={Styles.line} />
                    </View>
                )}
        </View>
    )
}