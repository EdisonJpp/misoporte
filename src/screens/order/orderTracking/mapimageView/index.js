import React from 'react'
import {
    Image,
} from 'react-native'
import Styles from './styles';
import Images from '../../../../utils/images/images';
import Loader from './loader';

export default mapImageView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} /> :
            <Image source={Images.orderTracking} style={Styles.img} />
    )
}