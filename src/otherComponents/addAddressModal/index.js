import React, { useState, useContext } from 'react';
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Input, OptionButton } from "../../commonComponents";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import Data from "../../utils/json";
import PickerView from "./pickerView";
import { GlobalStyle } from '../../style';

export function AddAddressModal(props) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [street, setStreet] = useState('');
    const [apartment, setApartment] = useState('');
    const [zip, setZip] = useState('');
    const [streetError, setStreetError] = useState('');
    const [showStreetError, setShowStreetError] = useState(false);
    const [apartmentError, setApartmentError] = useState('');
    const [showApartmentError, setShowApartmentError] = useState(false);
    const [zipError, setZipError] = useState('');
    const [showZipError, setShowZipError] = useState(false);
    const [city, setCity] = useState('City');
    const [showCity, setShowCity] = useState(false);
    const [state, setState] = useState('State');
    const [showState, setShowState] = useState(false);

    const commonContext = useContext(CommonContext);

    const checkValue = () => {
        if (street === '') {
            setStreetError('addAddressPage.streetError')
            setShowStreetError(true)
        } if (apartment === '') {
            setApartmentError('addAddressPage.apartmentError')
            setShowApartmentError(true)
        } if (zip === '') {
            setZipError('addAddressPage.zipError')
            setShowZipError(true)
        } else {
            props.showModal()
        }
    }

    const hideStreetError = (value) => {
        setStreet(value)
        setShowStreetError(false)
    }

    const hideApartmentError = (value) => {
        setApartment(value)
        setShowApartmentError(false)
    }

    const hideZipError = (value) => {
        setZip(value)
        setShowZipError(false)
    }

    const getCityValue = (item) => {
        setShowCity(!showCity)
        setCity(item)
    }

    const getStateValue = (item) => {
        setShowState(!showState)
        setState(item)
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[Styles.address, { color: colors.text, textAlign: props.textAlign }]}>{t('addAddressPage.addAddress')}</Text>
            <Input
                placeholder={t('addAddressModal.street')}
                value={street}
                onChangeText={(street) => hideStreetError(street)}
                showError={showStreetError}
                error={streetError}
            />
            <Input
                placeholder={t('addAddressModal.apart')}
                value={apartment}
                onChangeText={(apartment) => hideApartmentError(apartment)}
                showError={showApartmentError}
                error={apartmentError}
            />
            <PickerView
                value={city}
                showValue={showCity}
                context={commonContext}
                data={Data.cityArr}
                t={t}
                onPress={() => {
                    setShowState(false)
                    setShowCity(!showCity)
                }}
                setInputValue={getCityValue}
                pointerEvents={showState ? 'none' : null}
                colors={colors}
                textAlign={props.textAlign}
            />
            <PickerView
                value={state}
                showValue={showState}
                context={commonContext}
                data={Data.stateArr}
                t={t}
                onPress={() => {
                    setShowCity(false)
                    setShowState(!showState)
                }}
                setInputValue={getStateValue}
                colors={colors}
                textAlign={props.textAlign}
            />
            <Input
                placeholder={t('addAddressModal.zip')}
                value={zip}
                onChangeText={(zip) => hideZipError(zip)}
                showError={showZipError}
                error={zipError}
            />
            <OptionButton
                txt1={'commonText.close'}
                txt2={'productDetailsPage.add'}
                onPress1={props.showModal}
                onPress2={checkValue}
            />
        </View>
    )
} 