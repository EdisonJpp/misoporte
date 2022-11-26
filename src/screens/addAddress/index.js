import React, { useState, useEffect, useContext } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native'
import Styles from './styles';
import { Header, Input, Button } from "../../commonComponents";
import Data from '../../utils/json';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import MapPin from "../../assets/icons/pin";
import Images from '../../utils/images/images';
import Search from "../../assets/icons/search";
import VoiceSearch from '../../assets/icons/voiceSearch';
import CurrentLocation from '../../assets/icons/currentLocation';
import Location from '../../assets/icons/location';
import Map from '../../assets/icons/map';
import Truck from '../../assets/icons/truck';
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import { MapLoader, AddressLoader } from "./loader";
import { CommonContext } from '../../../App';

export function AddAddress({ navigation }) {

    const { colors } = useTheme();
    const [location] = useState(Data.location);
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const [showLoader, setShowLoader] = useState(true);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

    const goToPayment = () => {
        navigation.navigate('SelectPayment')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <View>
                <Header
                    onPress={() => navigation.goBack()}
                    image={<Search />}
                    isText
                    titleText={t('addAddressPage.addAddress')} />
                <View>
                    {showLoader ? <MapLoader context={commonContext} /> :
                        <Image source={Images.map} style={Styles.mapImg} resizeMode='stretch' />}
                </View>
            </View>
            {!showLoader &&
                <View style={[Styles.truckView, { backgroundColor: colors.background, flexDirection: viewAlign }]}>
                    <Truck />
                    <Text style={[Styles.deliveryTime, { color: colors.text }]}>{t('addAddressPage.deliverTime')}</Text>
                </View>}
            <View style={Styles.mapView}>
                <View style={[Styles.map, { alignSelf: selfAlign }]}>
                    <Map />
                </View>
                <View style={[Styles.paymentView, { backgroundColor: colors.background }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Input placeholder={t('addAddressPage.searchLocation')} rightIcon={<VoiceSearch />} leftIcon={<Search />} />
                        <View style={[Styles.locationView, { flexDirection: viewAlign }]}>
                            <View style={Styles.location}>
                                <CurrentLocation />
                            </View>
                            <Text style={[Styles.locationTxt, { color: colors.text }]}>{t('addAddressPage.useCurrentLocation')} </Text>
                        </View>
                        {showLoader ? <AddressLoader selfAlign={selfAlign} context={commonContext} viewAlign={viewAlign} /> :
                            location.splice(0, 2).map((item) =>
                                <View style={Styles.addView}>
                                    <View style={[Styles.nameView, { flexDirection: viewAlign }]}>
                                        <Location />
                                        <Text style={[Styles.name, { color: colors.text, }]}>{t(item.name)}  </Text>
                                    </View>
                                    <Text style={[Styles.add, { textAlign: textAlign }]}>{t(item.address)}</Text>
                                </View>
                            )}
                        {!showLoader &&
                            <Button text={'addAddressPage.confirmLocation'} style={Styles.btn}
                                color={Appcolor.white} onPress={goToPayment} />}
                    </ScrollView>
                </View>
                <View style={Styles.map}>
                    <MapPin />
                </View>
            </View>
        </SafeAreaView>
    )
}