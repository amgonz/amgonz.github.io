
Highcharts.chart('organicAdChart', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Total vs. Organic Sales'
  },
  xAxis: {
    categories: [
      'Product 1',
      'Product 2',
      'Product 3',
      'Product 4'
    ]
  },
  yAxis: [{
    min: 0,
    title: {
      text: 'Sales ($)'
    },  
    labels: {
  format: '${value}'
   },
  }],
  legend: {
    shadow: false
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Organic',
    color: 'rgba(165,170,217,1)',
    data: [150, 73, 20, 43],
    pointPadding: 0.3,
    pointPlacement: 0,
    tooltip: {
      valuePrefix: '$'
  }

  }, {
    name: 'Total Sales',
    color: 'rgba(126,86,134,.9)',
    data: [140, 90, 40, 73],
    pointPadding: 0.4,
    pointPlacement: 0,
    tooltip: {
      valuePrefix: '$'
  }

  }]
});