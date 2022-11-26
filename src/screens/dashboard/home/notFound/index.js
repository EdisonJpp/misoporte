import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles';
import colors from '../../../../theme/colors';

export default notFound = (props) => {
    return (
        <View style={Styles.mainView}>
            <Text style={[Styles.didntFind, { textAlign: props.textAlign }]}>{props.t('homepage.didntFind')}</Text>
            <TouchableOpacity style={[Styles.textView, { backgroundColor: colors.primary, alignSelf: props.selfAlign }]}>
                <Text style={Styles.text}>{props.t('homepage.browseCategory')}</Text>
            </TouchableOpacity>
        </View>
    )
}