import moment from 'moment';

const CasesAndDeathsPerDayChart = (data) => {
    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Cases per Day'
        },
        xAxis: {
            categories: data.map(({ date }) =>  moment(date).format('DD-MM-YYYY') )
        },
        yAxis: {
            title: {
                text: 'Total'
            },
        },
        series: [{
            name: 'Cases per Day',
            data: data.map(({ cases }) => cases)
        }, {
            name: 'Deaths per day',
            data: data.map(({ deaths }) => deaths)
        }]
    }

    return options;
}

export default CasesAndDeathsPerDayChart;