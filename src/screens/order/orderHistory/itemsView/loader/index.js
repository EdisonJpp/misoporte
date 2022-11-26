import React from "react";
import { View } from "react-native";
import { windowWidth } from "../../../../../theme/appConstant";
import Appcolor from "../../../../../theme/colors";
import OrderStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const orderHistory = [{}, {}, {}, {}];

export default itemsLoader = (props) => {
    return (
        orderHistory.map(() =>
            <View style={[OrderStyles.listView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                <View style={[OrderStyles.subView, { borderBottomWidth: 0, flexDirection: props.viewAlign }]}>
                    <View>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.idLoader} />
                            }
                        />
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.addLoader, { width: windowWidth(200), alignSelf: props.selfAlign }]} />
                            }
                        />
                        <Loader
                            context={props.context}
                            view={
                                <View style={[Styles.addLoader, { width: windowWidth(160), alignSelf: props.selfAlign }]} />
                            }
                        />
                    </View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.imageLoader} />
                        }
                    />
                </View>
                <View style={[OrderStyles.orderAgain, { flexDirection: props.viewAlign }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.orderAgainLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.rateLoader} />
                        }
                    />
                </View>
            </View>
        )
    )
}