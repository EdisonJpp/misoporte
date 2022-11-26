import React from 'react'
import { View, Image, Text } from 'react-native'
import Styles from './styles';
import Images from '../../../../utils/images/images';

export default titleView = (props) => {
    return (
        <View>
            <Image source={props.context.isDark ? Images.fastKartDark : Images.fastkart} style={[Styles.fastkartImg, { alignSelf: props.selfAlign }]} />
            <Text style={[Styles.online, { textAlign: props.textAlign }]}>{props.t('loginNRegister.onlineSupermarket')}</Text>
        </View>

    )
}