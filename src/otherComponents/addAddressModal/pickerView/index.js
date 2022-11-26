import React from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import Appcolor from '../../../theme/colors';
import Styles from './styles';
import { windowWidth } from '../../../theme/appConstant';

export default picker = (props) => {
    const setValue = (item) => {
        props.setInputValue(item.title);
    }
    return (
        <View pointerEvents={props.pointerEvents}>
            <TouchableOpacity activeOpacity={1} onPress={props.onPress} style={[Styles.inputView, {
                width: props.width ? props.width : windowWidth(440),
                borderColor: props.showValue ? Appcolor.primary : props.colors.primary, justifyContent: 'center',
                backgroundColor: props.context.isDark || props.showValue ? props.colors.primary : Appcolor.gray,
            }]}>
                <Text style={[Styles.txt, { textAlign: props.textAlign, color: props.colors.text }]}>{props.t(props.value)}</Text>
            </TouchableOpacity>
            {props.showValue &&
                <View style={[Styles.list, { width: props.width ? props.width : windowWidth(440), backgroundColor: props.colors.background, }]}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={Styles.contentStyle}
                        data={props.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={Styles.lstView} onPress={() => setValue(item)} activeOpacity={0.7}>
                                <Text style={[Styles.listTxt, { textAlign: props.textAlign, color: props.colors.text }]}>{props.t(item.title)}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>}
        </View>
    )
}