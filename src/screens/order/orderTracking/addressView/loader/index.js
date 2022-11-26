import React from "react";
import { View } from "react-native";
import { windowHeight } from "../../../../../theme/appConstant";
import OrderStyles from "../styles";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default addressViewLoader = (props) => {
    return (
        <View style={[OrderStyles.location, { marginBottom: windowHeight(40), flexDirection: props.viewAlign }]}>
            <View>
                <View style={OrderStyles.sepratorImg} />
                <View style={OrderStyles.homeView}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.locationTypeLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.locationTypeLoader} />
                        }
                    />
                </View>
            </View>
            <View style={OrderStyles.storeLocation}>
                <View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.locationTxtLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.locationLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                </View>
                <View>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.locationTxtLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.locationLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                </View>
            </View>
        </View>
    )
}