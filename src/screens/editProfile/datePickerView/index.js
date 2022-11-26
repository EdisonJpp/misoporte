import React from 'react'
import Appcolor from '../../../theme/colors';
import DatePicker from 'react-native-neat-date-picker';

export default datePickerView = (props) => {

    const onConfirm = (output) => {
        var data = output.dateString.split('-');
        var originalDate = data[2] + '-' + data[1] + '-' + data[0]
        props.onConfirm(false, originalDate)
    }
    return (
        <DatePicker
            isVisible={props.showDatePicker}
            mode={'single'}
            onCancel={props.onCancel}
            onConfirm={onConfirm}
            colorOptions={{
                backgroundColor: props.colors.background,
                selectedDateBackgroundColor: Appcolor.primary,
                headerColor: Appcolor.primary,
                confirmButtonColor: Appcolor.primary,
                weekDaysColor: Appcolor.primary,
                changeYearModalColor: Appcolor.primary
            }}
        />
    )
}