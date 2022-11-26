import React from 'react';
import { View, Text, Image } from "react-native";
import Images from '../../../utils/images/images';
import Styles from "./styles";

export default profileView = (props) => {
    return (
        <View style={Styles.profileView}>
            <Image source={Images.demoProfile} resizeMode='contain' style={Styles.profileImg} />
            <View style={Styles.dataView}>
                <Text style={[Styles.name, { color: props.colors.text }]}>{props.t('orderTrackingPage.name')}</Text>
                <Text style={Styles.email}>{props.t('editprofilePage.demoemail')}</Text>
            </View>
        </View>
    )
}