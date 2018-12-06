
Highcharts.chart('acos-graph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'PPC Advertising Effectiveness'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Average Cost of Sales (%)'
      },
      labels: {
        format: '{value}%'
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'ACOS',
      data: [20, 23, 19, 24, 22, 13, 14, 15, 21, 19, 20, 19]
    }]
  });