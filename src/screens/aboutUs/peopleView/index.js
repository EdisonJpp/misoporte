import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'
import Styles from './styles';
import Data from '../../../utils/json';
import Facebook from '../../../assets/icons/facebook';
import Twitter from '../../../assets/icons/twitter';
import LinkedIn from '../../../assets/icons/linkedIn';
import Images from '../../../utils/images/images';

export default peopleView = (props) => {

    const categoryColors = Data.colors;

    return (
        <View>
            <Text style={[Styles.peopleWhoBuild, { color: props.colors.text, }]}>{props.t('aboutUsPage.peopleWhoBuild')}</Text>
            <FlatList
                data={[{}, {}, {}, {}]}
                numColumns={2}
                style={Styles.list}
                columnWrapperStyle={Styles.columnStyle}
                ItemSeparatorComponent={() => <View style={Styles.seprator} />}
                renderItem={({ item, index }) =>
                    <View style={Styles.socialView}>
                        <View style={[Styles.buildView, { backgroundColor: categoryColors[index % categoryColors.length] }]}>
                            <Image source={Images.fastKartbuild} style={Styles.buildImg} resizeMode='contain' />
                        </View>
                        <Text style={[Styles.buildTxt, { color: props.colors.text }]}>{props.t('aboutUsPage.builtFastkart')}</Text>
                        <View style={Styles.social}>
                            <Facebook />
                            <LinkedIn />
                            <Twitter />
                        </View>
                    </View>
                }
            />
        </View>
    )
}