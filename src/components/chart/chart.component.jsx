import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './chart.styles.scss';


const Chart = ({ chartOptions }) => {
    return(<div className='chart-wrapper'>
        <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
    </div>)
}

export default Chart;