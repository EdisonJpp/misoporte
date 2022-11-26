import React, { useState } from 'react'
import {
    View,
    Text,
} from 'react-native'
import Styles from './styles';
import Data from '../../../utils/json';
import Appcolor from '../../../theme/colors';

export default questionsView = (props) => {

    const [howIOrder] = useState(Data.howIOrder)

    return (
        <View>
            <Text style={[Styles.whoWeAre, { color: props.colors.text }]}>{props.t('aboutUsPage.whoWeAre')}</Text>
            <Text style={Styles.whoAreWe}>{props.t('aboutUsPage.whoArewe')}</Text>
            <Text style={[Styles.howIOrder, { color: props.colors.text }]}>{props.t('aboutUsPage.howIOrder')}</Text>
            {howIOrder.map((item, key) =>
                <View style={Styles.questionView}>
                    <View style={[Styles.answerView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                        <Text style={Styles.question}>{props.t(item.question)}</Text>
                        <Text style={Styles.answer}>{props.t(item.answer)}</Text>
                    </View>
                    <View style={Styles.keyView}>
                        <Text style={Styles.key}>{key + 1}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}