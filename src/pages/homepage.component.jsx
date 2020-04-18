import React from 'react';

import './homepage.styles.scss';

import Filter from '../components/filter/filter.component';
import Chart from '../components/chart/chart.component'

import getChartOptions from '../components/chart/charts-types/';

import covidData from '../assets/dummy.data'

class HomePage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            chartOptions: '',
            selectedChart: 'casesPerDay',
            startDate: '',
            endDate: '',
            options: [{
                value: 'casesPerDay',
                optionLabel: 'Cases Per Day'
            }, {
                value: 'deathsPerDay',
                optionLabel: 'Deaths Per Day'
            }, {
                value: 'casesAndDeathsPerDay',
                optionLabel: 'Cases And Deaths Per Day'
            },{
                value: 'throughput',
                optionLabel: 'Throughput'
            }]
         };

    }

    handleFilterChanges = (newState) => {
        this.setState(newState);
    }

    handleStartDateChanges = (startDate) => {
        this.setState({ startDate: startDate })
    }

    handleEndDateChanges = (endDate) => {
        this.setState({ endDate: endDate }) 
    }

    handleFilterSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submit');
        this.setState({ chartOptions: getChartOptions(this.state.selectedChart, covidData) });
    }

    componentDidMount() {
        //Fetch the data and process
        this.setState({ chartOptions:  getChartOptions(this.state.selectedChart, covidData) }); 
    }

    render() {
        return (
            <div className='home-page'>
                <Filter 
                    options={this.state.options}
                    selectedChart={this.state.selectedChart}
                    handleChanges={this.handleFilterChanges}
                    handleStartDateChanges={this.handleStartDateChanges}
                    handleEndDateChanges={this.handleEndDateChanges}
                    handleSubmit={this.handleFilterSubmit}/>    
                <Chart chartOptions={this.state.chartOptions}/>    
            </div>
        );
    }
}

export default HomePage;