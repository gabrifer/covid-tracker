import moment from 'moment';

const CasesPerDayChart = (data) => {
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
        }]
    }

    return options;
}

export default CasesPerDayChart;