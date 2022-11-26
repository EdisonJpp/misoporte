import React, { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
} from 'react-native'
import Styles from './styles';
import { Header, Button } from "../../commonComponents";
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import { GlobalStyle } from "../../style";
import { useTranslation } from 'react-i18next';
import ProfileView from "./profileView";
import DetailsView from "./detailsView";
import { checkValue } from "./validations";
import DatePickerView from "./datePickerView";
import ChangePasswordView from "./changePasswordView";

export function EditProfile({ navigation }) {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('28-12-1990');
    const [nameError, setNameError] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false)

    const getData = () => {
        var result = checkValue(name, email, phoneNumber)
        if (result === 1) {
            setNameError('editProfilePage.nameError');
            setShowNameError(true)
        } if (result === 2) {
            setEmailError('loginNRegister.emailError');
            setShowEmailError(true)
        } if (result === 3) {
            setPhoneNumberError('editProfilePage.phoneNumberError');
            setShowPhoneNumberError(true)
        } if (result === 4) {
            setPhoneNumberError('editProfilePage.validPhoneNumberError')
            setPhoneNumberError(true)
        } if (result === 5) {
            setEmailError('loginNRegister.validEmailError')
            setShowEmailError(true)
        } else {
        }
    }

    const hideNameError = (value) => {
        setName(value)
        setShowNameError(false)
    }
    const hideEmailError = (value) => {
        setEmail(value)
        setShowEmailError(false)
    }
    const hidePhoneNumberError = (value) => {
        setPhoneNumber(value)
        setShowPhoneNumberError(false)
    }
    const openDatePicker = () => {
        setShowDatePicker(true)
    }

    const onCancel = () => {
        setShowDatePicker(false)
    }

    const onConfirm = (value, date) => {
        setShowDatePicker(value)
        setDate(date)
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('editProfilePage.editProfile')} />
                <ProfileView colors={colors} t={t} />
                <DetailsView
                    date={date}
                    onPress={openDatePicker}
                    hideNameError={hideNameError}
                    hideEmailError={hideEmailError}
                    hidePhoneNumberError={hidePhoneNumberError}
                    showNameError={showNameError}
                    showEmailError={showEmailError}
                    showPhoneNumberError={showPhoneNumberError}
                    nameError={nameError}
                    emailError={emailError}
                    phoneNumber={phoneNumberError}
                />
                <ChangePasswordView colors={colors} t={t} />
                <Button
                    text={'editProfilePage.updateSettings'}
                    style={Styles.btn}
                    color={Appcolor.white}
                    onPress={getData} />
                <DatePickerView onCancel={onCancel} onConfirm={onConfirm} showDatePicker={showDatePicker} colors={colors} />
            </ScrollView>
        </SafeAreaView>
    )
}