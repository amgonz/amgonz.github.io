
Highcharts.chart('donut-chart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Cost Breakdown'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [
            ['FBA Fees', 983],
            ['Royalties', 392],
            ['Advertising', 1234],
            ['Landing Costs', 234]
        ]
    }]
});