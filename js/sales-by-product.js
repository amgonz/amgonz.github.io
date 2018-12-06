Highcharts.chart('sales-by-product', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Daily Sales by Product'
  },
  xAxis: {
    categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Thousands'
    },
    labels: {
      formatter: function () {
        return this.value / 1000;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [{
    name: 'Profits',
    data: [312, 324, 300, 350, 300, 245, 200]
  }, {
    name: 'Expenses',
    data: [163, 203, 185, 208, 232, 242, 288]
  }]
});