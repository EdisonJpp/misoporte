import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonContext } from "../../../App";
import SelectedTab from "../../assets/icons/selectedTab";
import { windowHeight } from "../../theme/appConstant";
import Styles from "./styles";

export default tabComponents = ({ state, descriptors, navigation }) => {

    const commonContext = useContext(CommonContext);

    return (
        <View
            style={[Styles.mainView, { flexDirection: commonContext.isRTL ? 'row-reverse' : 'row' }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel
                const Icon = options.tabBarIcon
                const isFocused = state.index === index;
                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onPress}
                        style={Styles.button}>
                        {isFocused &&
                            <SelectedTab />}
                        <View style={{ marginTop: isFocused ? windowHeight(2) : windowHeight(4) }}>
                            <Icon />
                        </View>
                        <Text style={Styles.label}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
