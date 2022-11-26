import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Styles from './styles';
import Increase from '../../assets/icons/+';
import Decrease from '../../assets/icons/_';
import colors from '../../theme/colors';

export function Counter(props) {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count != 0) {
            setCount(count - 1)

        }
    }

    return (
        <View style={[Styles.mainView, { backgroundColor: props.bgColor, height: props.height, width: props.width, flexDirection: props.viewAlign }]}>
            <TouchableOpacity style={[props.context.isRTL ? Styles.increase : Styles.decrease]} onPress={decreaseCount}>
                <Decrease color={props.color} />
            </TouchableOpacity>
            <Text style={[Styles.txt, { color: props.textColor ? props.textColor : colors.primary }]}>{count}</Text>
            <TouchableOpacity style={[props.context.isRTL ? Styles.decrease : Styles.increase]} onPress={increaseCount}>
                <Increase color={props.color} />
            </TouchableOpacity>
        </View>
    )
}