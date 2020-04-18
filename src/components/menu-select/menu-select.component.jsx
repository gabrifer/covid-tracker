import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import './menu-select.styles.scss';


const MenuSelect = ({ handleChange, label, options, ...otherProps }) => (
    <div className='menu-select'>
        <InputLabel>{label}</InputLabel>
        <Select
            native
            onChange={handleChange}
            {...otherProps}
            className='selector'
            >
            {
                options.map(({ value, optionLabel }) => (
                    <option key={value} value={value} >{optionLabel}</option>
                ))

            }
        </Select>
    </div>
);

export default MenuSelect;