import React from "react";
import { View } from "react-native";
import OrderStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default orderDataViewLoader = (props) => {
    return (
        <View style={[OrderStyles.totalView, { flexDirection: props.viewAlign }]}>
            <View style={{ alignSelf: props.selfAlign, flexDirection: props.viewAlign, width: '50%' }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.dataLoader} />
                    }
                />
                <View style={props.context.isRTL ? OrderStyles.optionRight : OrderStyles.option}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.titleLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.subTxtLoader} />
                        }
                    />
                </View>
            </View>
            <View style={{ alignSelf: props.selfAlign, flexDirection: props.viewAlign, width: '50%' }}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.dataLoader} />
                    }
                />
                <View style={props.context.isRTL ? OrderStyles.optionRight : OrderStyles.option}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.titleLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.subTxtLoader} />
                        }
                    />
                </View>
            </View>
        </View>
    )
}