import React, { useState } from 'react';
import { View, Text } from "react-native";
import { windowWidth } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";
import { Input, OptionButton } from "../../commonComponents";
import Calendar from '../../assets/icons/calendar';
import Styles from "./styles";
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from '../../style';

export function AddNewCard(props) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [holderName, setHolderName] = useState('');
    const [number, setNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [holderNameError, setHolderNameError] = useState('');
    const [showHolderNameError, setShowHolderNameError] = useState(false);
    const [numberError, setNumberError] = useState('');
    const [showNumberError, setShowNumberError] = useState(false);
    const [expiryDateError, setExpiryDateError] = useState('');
    const [showExpiryDateError, setShowExpiryDateError] = useState(false);
    const [cvvError, setCvvError] = useState('');
    const [showCvvError, setShowCvvError] = useState(false);

    const checkValue = () => {
        if (holderName === '') {
            setHolderNameError('addCard.holderNameError');
            setShowHolderNameError(true)
        } if (number === '') {
            setNumberError('addCard.numberError');
            setShowNumberError(true);
        } if (expiryDate === '') {
            setExpiryDateError('addCard.expriryError');
            setShowExpiryDateError(true)
        } if (cvv === '') {
            setCvvError('addCard.cvvError');
            setShowCvvError(true)
        } else if (cvv.length != 3) {
            setCvvError('addCard.validCvvError');
            setShowCvvError(true)
        } else {
            props.showModal();
        }
    }

    const hideHolderNameError = (value) => {
        setHolderName(value)
        setShowHolderNameError(false)
    }

    const hideNumberError = (value) => {
        setNumber(value)
        setShowNumberError(false)
    }

    const hideExpiryDateError = (value) => {
        setExpiryDate(value)
        setShowExpiryDateError(false)
    }

    const hideCvvError = (value) => {
        setCvv(value)
        setShowCvvError(false)
    }

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[Styles.addCard, { color: colors.text, textAlign: props.textAlign }]}>{t('addCard.addCard')}</Text>
            <Input
                placeholder={t('addCard.cardHolderName')}
                value={holderName}
                onChangeText={(holderName) => hideHolderNameError(holderName)}
                error={holderNameError}
                showError={showHolderNameError}
            />
            <Input
                placeholder={t('addCard.cardNum')}
                value={number}
                onChangeText={(number) => hideNumberError(number)}
                error={numberError}
                showError={showNumberError}
                type
            />
            <View style={Styles.inputView}>
                <Input
                    placeholder={t('addCard.expiryDate')}
                    value={expiryDate}
                    onChangeText={(expiryDate) => hideExpiryDateError(expiryDate)}
                    error={expiryDateError}
                    showError={showExpiryDateError}
                    width={windowWidth(210)}
                    rightIcon={<Calendar color={colors.text} />}
                    type
                />
                <Input
                    placeholder={t('addCard.cvv')}
                    value={cvv}
                    onChangeText={(cvv) => hideCvvError(cvv)}
                    error={cvvError}
                    showError={showCvvError}
                    width={windowWidth(210)}
                    type
                />
            </View>
            <OptionButton
                txt1={'commonText.close'}
                txt2={'productDetailsPage.add'}
                onPress1={props.showModal}
                onPress2={checkValue}
            />
        </View>
    )
}