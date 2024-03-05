
var options = {
    series: [
        {
            data: [
                {
                    x: 'Jan',
                    y: [2800, 4500]
                },
                {
                    x: 'Feb',
                    y: [3200, 4100]
                },
                {
                    x: 'Mar',
                    y: [2950, 7800]
                },
                {
                    x: 'Apr',
                    y: [3000, 4600]
                },
                {
                    x: 'May',
                    y: [3500, 4100]
                },
                {
                    x: 'Jun',
                    y: [4500, 6500]
                },
                {
                    x: 'JUl',
                    y: [4500, 6500]
                },
                {
                    x: 'Aug',
                    y: [4100, 5600]
                }

            ]
        }
    ],
    chart: {
        height: 250,
        type: 'rangeBar',
        zoom: {
            enabled: false
        }
    },
    // here gradiant bar color 
    plotOptions: {
        bar: {
            isDumbbell: false,
            columnWidth: 7,
            dumbbellColors: [['#8c68cd', '#7958b5']]
        }
    },
    legend: {
        show: false,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Share', 'Like']
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            gradientToColors: ['rgb(92,74,145)'],
            inverseColors: true,
            stops: [50, 0]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    xaxis: {
        tickPlacement: 'off'
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();