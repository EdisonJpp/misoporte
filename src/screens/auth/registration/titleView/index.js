import React from 'react'
import { View, Image, Text } from 'react-native'
import Styles from './styles';
import Images from '../../../../utils/images/images';
import { fontSizes } from '../../../../theme/appConstant';

export default titleView = (props) => {
    return (
        <View>
            <Image source={props.context.isDark ? Images.fastKartDark : Images.fastkart} style={[Styles.fastkartImg, { alignSelf: props.selfAlign }]} />
            <Text style={[Styles.online, { fontSize: fontSizes.FONT18, textAlign: props.textAlign }]}>{props.t('loginNRegister.onlineSupermarket')}</Text>
        </View>

    )
}