import React from 'react';

import { SingleDatePicker } from 'react-google-flight-datepicker/';
import InputLabel from '@material-ui/core/InputLabel'

import 'react-google-flight-datepicker/dist/main.css';
import './date-picker.styles.scss';

const DatePicker = ({ handleChange, label, ...otherProps }) => (
    <div className='date-picker'>
        <InputLabel>{label}</InputLabel>
        <SingleDatePicker       
            onChange={handleChange}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2100, 0, 1)}
            dateFormat="DD/MM/YYYY"
            monthFormat="MMM YYYY"
            startDatePlaceholder={label}
            startWeekDay="monday"
            {...otherProps}
            />
    </div>
);

export default DatePicker;