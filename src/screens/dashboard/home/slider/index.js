import React, { useState } from 'react'
import { View, Image, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import Styles from './styles';
import { windowWidth } from '../../../../theme/appConstant';
import colors from '../../../../theme/colors';
import Data from '../../../../utils/json';
import Loader from "./loader";

export default slider = (props) => {

    const [swiperData] = useState(Data.swiperData);

    const goToList = () => {
        props.navigation.navigate('ProductsList')
    }

    return (
        <View style={Styles.mainView}>
            <FlatList
                data={swiperData}
                renderItem={({ item, index }) =>
                    props.showLoader ? <Loader context={props.context} /> :
                        <View style={[Styles.sliderView, {
                            marginLeft: index != 0 ? windowWidth(20) : 0,
                        }]}>
                            <Image source={item.image} style={[Styles.image,
                            {
                                transform: [{ scaleX: props.imageAlign }]
                            }]} />
                            <View style={Styles.contentView}>
                                <Text style={[Styles.title, { color: index != 0 ? colors.white : colors.title, textAlign: props.textAlign }]}>{props.t(item.title)}</Text>
                                <Text style={[Styles.subTitle, { color: index != 0 && colors.white, textAlign: props.textAlign }]}>{props.t(item.subTitle)}</Text>
                                <TouchableOpacity activeOpacity={0.7} onPress={goToList} style={[Styles.shopNowView, { backgroundColor: index === 0 ? colors.primary : colors.white, alignSelf: props.selfAlign }]}>
                                    <Text style={[Styles.shopNow, { color: index === 0 ? colors.white : colors.primary }]}>{props.t(item.shopNow)}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={Dimensions.get("window").width - 60}
                snapToAlignment={"center"}
                centerContent={true}
                contentInset={Styles.content}
            />
        </View>
    )
}