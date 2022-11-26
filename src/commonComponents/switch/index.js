import React from 'react';
import { View } from "react-native";
import Appcolor from '../../theme/colors';
import MenuItem from '../../otherComponents/drawerComponents/menuItem';
import SwitchToggle from "toggle-switch-react-native";
import Styles from "./styles";
import RTL from '../../assets/icons/rtl';
import Dark from '../../assets/icons/dark';

export function Switch(props) {

    const viewAlign = props.context.isRTL ? 'row-reverse' : 'row'

    return (
        <View style={[Styles.switchView, { flexDirection: viewAlign }]}>
            <MenuItem
                text={props.t(props.from ? 'drawer.rtl' : 'drawer.dark')}
                icon={props.from ? <RTL /> : <Dark />}
                showSwitch={true}
                width={props.width}
            />
            <SwitchToggle
                isOn={props.isOn}
                onToggle={props.onToggle}
                icon={props.switchIcon}
                onColor={Appcolor.gray}
                thumbOnStyle={props.from ? Styles.onStyle : Styles.trackOnStyle}
                trackOnStyle={Styles.trackOnStyle}
            />
        </View>
    )
}