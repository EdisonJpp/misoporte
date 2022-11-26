import React, { useContext } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native'
import Styles from './styles';
import { Header } from "../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { CommonContext } from '../../../App';
import Images from '../../utils/images/images';
import { useTranslation } from 'react-i18next';
import QuestionsView from "./questionsView";
import PeopleView from "./peopleView";

export function AboutUs({ navigation }) {

    const { colors } = useTheme();
    const commonContext = useContext(CommonContext);
    const { t } = useTranslation();

    return (
        <SafeAreaView style={[Styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('aboutUsPage.aboutUsTxt')} />
                <Image source={Images.aboutUs} style={Styles.img} resizeMode='contain' />
                <QuestionsView context={commonContext} t={t} colors={colors} />
                <PeopleView t={t} colors={colors} />
            </ScrollView>
        </SafeAreaView>
    )
}