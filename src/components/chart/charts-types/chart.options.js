const options = {
  chart: {
    type: 'line'
},
title: {
    text: 'Fruit Consumption'
},
xAxis: {
    title: {
        text: 'Fruit Number'
    },
    tickInterval: 1
},
yAxis: {
    title: {
        text: 'Fruit eaten'
    },
},
series: [{
    name: 'Jane',
    data: [1, 0, 4]
}, {
    name: 'John',
    data: [5, 7, 3]
}]
};

export default options;