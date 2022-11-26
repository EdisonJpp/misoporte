import React from "react";
import { View } from "react-native";
import OrderStyles from "../styles";
import Appcolor from "../../../theme/colors";
import { Loader } from "../../../commonComponents";
import Styles from "./styles";
import { windowWidth } from "../../../theme/appConstant";

const productArr = [{}, {}, {}, {}]

export const ProductLoader = (props) => {
    return (
        productArr.map(() =>
            <View style={[Styles.mainView, { backgroundColor: props.context.isDark ? Appcolor.dark : Appcolor.gray, flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.txtLoader} />
                    }
                />
                <View style={OrderStyles.lineView} />
                <View style={OrderStyles.counterView}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.longTxtLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.imgLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                    <View style={[Styles.listView, { flexDirection: props.viewAlign }]}>
                        <View style={[Styles.subView, { flexDirection: props.viewAlign }]}>
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.view} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={[Styles.imageLoader, props.context.isRTL ? { marginRight: windowWidth(10) } : {
                                        marginLeft: windowWidth(10)
                                    }]} />
                                }
                            />
                        </View>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.view} />
                            }
                        />
                    </View>
                </View>
            </View>
        )
    )
}