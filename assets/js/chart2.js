var options = {
    series: [{
        name: "Artwork",
        data: [10, 40, 35, 51, 49, 62, 69, 91, 148]
    },
    {
        name: "Auction",
        data: [40, 120, 83, 45, 31, 74, 35, 45, 78]
    },
    {
        name: 'Creators',
        data: [95, 35, 20, 120, 64, 22, 43, 45, 31]
    }
    ],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [4, 4, 4],
        curve: 'smooth',
        dashArray: [0, 0, 0]
    },

    legend: {
        tooltipHoverFormatter: function (val, opts) {
            return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 8
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept',
        ],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val + " (mins)"
                    }
                }
            },

            {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
};

var chart = new ApexCharts(document.querySelector("#line-chart"), options);
chart.render();