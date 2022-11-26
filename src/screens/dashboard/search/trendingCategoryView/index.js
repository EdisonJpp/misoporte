import React, { useState } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import TrendingCategoryLoader from "./loader";

export default trendingCategory = (props) => {

    const [trendingCategory] = useState(Data.category);
    const categoryColors = Data.colors;

    return (
        <View>
            <Text style={[Styles.txt, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('searchPage.trendingCategory')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.scrollView} contentContainerStyle={{ flexDirection: props.viewAlign }}>
                {props.showLoader ? <TrendingCategoryLoader context={props.context} /> :
                    trendingCategory.map((item, key) =>
                        <View style={[Styles.image, { backgroundColor: categoryColors[key % categoryColors.length], }]}>
                            <Image source={item.image} style={Styles.img} />
                        </View>
                    )}
            </ScrollView>
        </View>
    )
}