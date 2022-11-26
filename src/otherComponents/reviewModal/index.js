import React, { useState, useContext } from 'react'
import {
    Text, Image, View, TouchableOpacity,
} from 'react-native'
import Styles from './styles';
import Data from '../../utils/json';
import Appcolor from '../../theme/colors';
import { useTheme } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../App';
import Images from '../../utils/images/images';
import { GlobalStyle } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import { fontSizes, windowHeight, windowWidth } from '../../theme/appConstant';
import Into from '../../assets/icons/into';
import commonfonts from '../../theme/commonfonts';

export function ReviewModal(props) {

    const { colors } = useTheme();
    const [reviewList] = useState(Data.reviewList);
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const reviewStar = Data.reviewStar;

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background, flex: 1 }]}>
            <View style={{ flexDirection: props.viewAlign, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: colors.text, fontFamily: commonfonts.mulish, fontSize: fontSizes.FONT20 }}>All Review</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Into width={windowWidth(44)} height={windowHeight(44)} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ height: windowHeight(300) }} showsVerticalScrollIndicator={false}>
                {reviewList.map((item) =>
                    <View style={[Styles.review, {
                        backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray,
                    }]}>
                        <View style={[Styles.reviewDetail, { flexDirection: props.viewAlign }]}>
                            <Image source={Images.demoProfile} style={Styles.demoProfile} />
                            <View style={[commonContext.isRTL ? Styles.reviewNameViewRight : Styles.reviewName]}>
                                <Text style={[Styles.reviewName, { color: colors.text }]}>{t(item.reviewName)}</Text>
                                <View style={{ flexDirection: props.viewAlign }}>
                                    {reviewStar.map((item, key) =>
                                        <Image source={key === 4 ? Images.star1 : Images.star} style={Styles.star} />
                                    )}
                                </View>
                            </View>
                        </View>
                        <Text style={[Styles.reviewTxt, { textAlign: props.textAlign }]}>{t(item.review)}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}