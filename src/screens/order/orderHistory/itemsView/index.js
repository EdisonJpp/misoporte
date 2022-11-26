import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Appcolor from '../../../../theme/colors';
import Images from '../../../../utils/images/images';
import Loader from "./loader";

export default itemsView = (props) => {

    const [orderHistory, setorderHistory] = useState(Data.orderHistory);

    const goToAddress = () => {
        props.navigation.navigate('SelectAddress');
    }

    const goToDetail = () => {
        props.navigation.navigate('OrderDetails');
    }

    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.containerStyle}
                data={orderHistory}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={goToDetail} style={[Styles.listView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                        <View style={[Styles.subView, { borderBottomColor: props.colors.text, flexDirection: props.viewAlign }]}>
                            <View>
                                <View style={Styles.idView}>
                                    <Text style={[Styles.data, { color: props.colors.text }]}>{props.t('orderHistoryPage.idTxt')}: {props.t(item.id)}, </Text>
                                    <Text style={[Styles.data, { color: props.colors.text }]}>{props.t('orderHistoryPage.dt')}: {props.t(item.date)}</Text>
                                </View>
                                <Text style={Styles.add}>{props.t(item.add)}</Text>
                                <View style={[Styles.paidView, { flexDirection: props.viewAlign }]}>
                                    <Text style={[Styles.data, { color: props.colors.text }]}>{props.t('orderHistoryPage.paid')}: <Text style={Styles.paid}>{props.context.currSymbol}{(props.context.currValue * item.paid).toFixed(2)},</Text> </Text>
                                    <Text style={[Styles.data, { color: props.colors.text }]}>{props.t('orderDetailPage.items')} <Text style={Styles.paid}>{props.t(item.item)}</Text></Text>
                                </View>
                            </View>
                            <Image source={Images.orderHistoryMap} />
                        </View>
                        <View style={[Styles.orderAgain, { flexDirection: props.viewAlign }]}>
                            <Text style={[Styles.data, { color: props.colors.text }]} onPress={goToAddress}>{props.t('orderHistoryPage.orderAgain')}</Text>
                            <Text style={Styles.rateNReview}>{props.t('orderHistoryPage.rateNReviewProduct')}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
    )
}