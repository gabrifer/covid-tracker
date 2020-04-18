import CasesPerDayChart from './cases-per-day.chart.options';
import DeathsPerDayChart from './deaths-per-day.chart.options';
import CasesAndDeathsPerDayChart from './cases-and-deaths-per-day.options';

const getChartOptions = (selectedChart, data) => {
    console.log(selectedChart)
    if (selectedChart === 'casesPerDay') {
        return CasesPerDayChart(data)
    } else if (selectedChart === 'deathsPerDay') {
        return DeathsPerDayChart(data)
    } else if (selectedChart === 'casesAndDeathsPerDay') {
        return CasesAndDeathsPerDayChart(data)
    }
}


export default getChartOptions;