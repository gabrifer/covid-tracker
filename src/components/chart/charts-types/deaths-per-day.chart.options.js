import moment from 'moment'

const DeathsPerDay = (data) => {
    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Deaths per Day'
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
            name: 'Deaths per Day',
            data: data.map(({ deaths }) => deaths)
        }]
    }

    return options;
}

export default DeathsPerDay;