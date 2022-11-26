import React from "react";
import { View } from "react-native";
import Appcolor from "../../../../theme/colors";
import { Loader } from "../../../../commonComponents/loader";
import Styles from "./styles";

const notifications = [{}, {}, {}, {}]

export default dataLoader = (props) => {
    return (
        <View>
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.titleLoader, { alignSelf: props.selfAlign }]} />
                }
            />
            {notifications.map(() =>
                <View style={[Styles.mainView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
                    <View style={{ flexDirection: props.viewAlign, alignItems: 'center' }}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.imgLoader} />
                            }
                        />
                        <View style={Styles.txtLeft}>
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.txtLoader} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={[Styles.subTxtLoader, { alignSelf: props.selfAlign }]} />
                                }
                            />
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}