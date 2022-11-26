import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, LayoutAnimation,
    NativeModules,
} from "react-native";
import Data from '../../../utils/json';
import Dropdown from "../../../assets/icons/dropDown";
import Styles from "./styles";
import { useTranslation } from 'react-i18next';

export default picker = (props) => {

    const [category] = useState(Data.category);
    const [selected, setSelected] = useState(category[0].name);
    const [show, setShow] = useState(false);
    const { UIManager } = NativeModules;
    const { t } = useTranslation();

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    const setValue = (name) => {
        setSelected(name)
        showValue()
    }

    const showValue = () => {
        LayoutAnimation.easeInEaseOut();
        setShow(!show)
    }
    return (
        <View style={Styles.mainView}>
            <TouchableOpacity activeOpacity={0.8} onPress={showValue} style={[Styles.dropDownView, { flexDirection: props.viewAlign }]}>
                <Text style={Styles.selectedTxt}>{t(selected)}</Text>
                <Dropdown />
            </TouchableOpacity>
            {show && <View style={Styles.view}>
                {category.map((item) =>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setValue(item.name)}>
                        <Text style={[Styles.name, { textAlign: props.textAlign }]}>{t(item.name)}</Text>
                    </TouchableOpacity>
                )}
            </View>}
        </View>
    )
}