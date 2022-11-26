import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Styles from './styles';
import Data from '../../../utils/json';
import Appcolor from '../../../theme/colors';
import { windowHeight } from '../../../theme/appConstant';
import Images from '../../../utils/images/images';
import Work from "../../../assets/icons/work";
import Home from "../../../assets/icons/home";
import Loader from "./loader";

export default addressView = (props) => {

    const [location] = useState(Data.location);
    const [isDefault, setIsDefault] = useState(0);

    const setDefault = (value) => {
        setIsDefault(value)
    }

    return (
        <ScrollView contentContainerStyle={Styles.scrollView} showsVerticalScrollIndicator={false}>
            {props.showLoader ? <Loader viewAlign={props.viewAlign} selfAlign={props.selfAlign} textAlign={props.textAlign} context={props.context} /> : location.map((item, key) =>
                <TouchableOpacity onPress={() => setDefault(key)} activeOpacity={0.8} style={[Styles.list, { borderWidth: key === isDefault ? windowHeight(2) : 0, backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
                    <View>
                        <View style={[Styles.optionView, { flexDirection: props.viewAlign }]}>
                            {item.isWork ? <Work /> : <Home />}
                            <Text style={[Styles.optionTxt, { color: props.colors.text, }]}>{item.isWork ? props.t('selectDeliveryAddressPage.work') : props.t('tabBar.home')}  </Text>
                            {key === 0 &&
                                <Text style={Styles.default}>{props.t('selectDeliveryAddressPage.default')}</Text>}
                        </View>
                        <Text style={[Styles.name, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t(item.name)}</Text>
                        <Text style={[Styles.add, { textAlign: props.textAlign }]}>{props.t(item.address)}</Text>
                    </View>
                    <Image source={Images.addressMap} style={Styles.addMap} />
                </TouchableOpacity>)}
        </ScrollView>
    )
}