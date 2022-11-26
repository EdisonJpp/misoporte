import React, { useState } from 'react'
import {
    View,
} from 'react-native'
import { Input } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import Atsign from '../../../assets/icons/atsign';
import Calendar from '../../../assets/icons/calendar';
import Call from '../../../assets/icons/call';
import Profile from '../../../assets/icons/profile';
import { useTranslation } from 'react-i18next';

export default detailsView = (props) => {

    const { colors } = useTheme();
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const hideNameError = (value) => {
        setName(value)
        props.hideNameError(value)
    }

    const hideEmailError = (value) => {
        setEmail(value)
        props.hideEmailError(value)
    }

    const hidePhoneNumberError = (value) => {
        setPhoneNumber(value)
        props.hidePhoneNumberError(value)
    }

    return (
        <View>
            <Input
                placeholder={t('orderTrackingPage.name')}
                value={name}
                onChangeText={(name) => hideNameError(name)}
                error={props.nameError}
                showError={props.showNameError}
                rightIcon={<Profile color />}
            />
            <Input
                placeholder={t('editprofilePage.demoemail')}
                value={email}
                onChangeText={(email) => hideEmailError(email)}
                error={props.emailError}
                showError={props.showEmailError}
                rightIcon={<Atsign />}
            />
            <Input
                placeholder={'9876543210'}

                value={phoneNumber}
                onChangeText={(phoneNumber) => hidePhoneNumberError(phoneNumber)}
                error={props.phoneNumberError}
                showError={props.showPhoneNumberError}
                rightIcon={<Call color={colors.text} />}
            />
            <Input value={props.date} editable={false} onPress={props.onPress} rightIcon={<Calendar color={colors.text} />} />
        </View>
    )
};