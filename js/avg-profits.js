
Highcharts.chart('avg-profits', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Profits'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '${value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Units Sold',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Profit',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '${value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'profit',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' dollars'
        }

    }, {
        name: 'units sold',
        type: 'spline',
        data: [7.0, 6, 10, 15, 18, 21, 25, 26, 23, 18, 13, 9],
    }]
});