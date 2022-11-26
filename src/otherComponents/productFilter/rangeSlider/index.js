import React, { useCallback } from 'react';
import RangeSlider from 'rn-range-slider';
import Thumb from "../sliderComponents/Thumb";
import Rail from "../sliderComponents/Rail";
import RailSelected from "../sliderComponents/RailSelected";
import Styles from "./styles";

export default rangslider = (props) => {

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const handleValueChange = useCallback((low, high) => {
        props.setValue(low, high);
    }, []);

    return (
        <RangeSlider
            style={Styles.slider}
            min={props.t('productFilter.minValue')}
            max={props.t('productFilter.maxValue')}
            step={1}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
        />
    )
}