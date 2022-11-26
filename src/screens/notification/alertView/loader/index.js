import React from "react";
import { View } from "react-native";
import Appcolor from "../../../theme/colors";
import { Loader } from "../../../commonComponents/loader";
import Styles from "./styles";

const notifications = [{}, {}, {}, {}]

export const DataLoader = (props) => {
    return (
        <View>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.titleLoader} />
                }
            />
            {notifications.map(() =>
                <View style={[Styles.mainView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.imgLoader} />
                        }
                    />
                    <View>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.txtLoader} />
                            }
                        />
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.subTxtLoader} />
                            }
                        />
                    </View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.tagLoader} />
                        }
                    />
                </View>
            )}
        </View>
    )
}