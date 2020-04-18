import React from 'react';

import './filter.styles.scss';

import Button from '@material-ui/core/Button';
import MenuSelect from '../menu-select/menu-select.component';
import DatePicker from '../date-picker/date-picker.component';
import moment from 'moment';


class Filter extends React.Component {

    handleChanges = (event) => {
        const { value, name } = event.target

        //this.setState( { [name]: value })
        this.props.handleChanges({ [name]: value })
    }

    handleStartDateChanges = (startDate) => {
        //this.setState( { startDate:  moment(startDate.$d).format('YYYY-MM-DD') })
        this.props.handleStartDateChanges(moment(startDate.$d).format('YYYY-MM-DD'))
    }

    handleEndDateChanges = (endDate) => {
        //this.setState( { endDate:  moment(endDate.$d).format('YYYY-MM-DD') })
        this.props.handleEndDateChanges(moment(endDate.$d).format('YYYY-MM-DD'))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submetendo o form')
    }

    render() {
        return(
            <div className='filter-wrapper'>

                <h2>Select Filter</h2>
                <form onSubmit={this.props.handleSubmit}>

                    <DatePicker label='From Date' handleChange={this.handleStartDateChanges}/>

                    <DatePicker label='To Date' handleChange={this.handleEndDateChanges}/>

                    <MenuSelect 
                        label='Chart Type' 
                        handleChange={this.handleChanges} 
                        options={this.props.options}
                        value={this.props.selectedChart}
                        name='selectedChart'
                    /> 
                
                    <Button className='submit-button' type='submit' variant='contained' color='primary'>Filter</Button>         
                </form>
            </div>
        )
    }
}

export default Filter;