import React from 'react'
import { View, Modal, TouchableOpacity } from 'react-native';
import Styles from './styles';

export function CommonModal(props) {
    return (
        props.showModal &&
        <View style={Styles.mainView}>
            <Modal transparent animationType='slide'>
                <TouchableOpacity style={Styles.subView} onPress={props.visibleModal} activeOpacity={1}>
                    {props.modal}
                </TouchableOpacity>
            </Modal>
        </View>
    )
}