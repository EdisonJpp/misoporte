import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Loader from "./loader";

export default recentlySearch = (props) => {

    const [recentlySearch] = useState(Data.recentlySearch);

    return (
        <View>
            <Text style={[Styles.txt, { color: props.colors.text, textAlign: props.textAlign, }]}>{props.t('searchPage.recentlySearch')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={Styles.scrollView} contentContainerStyle={{ flexDirection: props.viewAlign }}>
                {props.showLoader ? <Loader context={props.context} /> :
                    recentlySearch.map((item) =>
                        <Text style={[Styles.name, { backgroundColor: props.colors.primary, color: props.colors.text }]}>{props.t(item.name)}</Text>
                    )}
            </ScrollView>
        </View>

    )
}