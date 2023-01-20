Highcharts.chart('KPI', {
    chart: {
        backgroundColor: '#FAFEFF',
    },
    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2012
        }
    },

    series: [{
        name: 'KPI',
        data: [10, 22, 31, 38, 44, 56, 79, 85]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

var mainObj = "#E36537",
    blueColor = "#6da0bf";

Highcharts.chart('obj', {

    chart: {
        type: 'networkgraph',
        marginTop: 0,
        backgroundColor: '#FAFEFF',
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                integration: 'verlet',
                linkLength: 100
            }
        }
    },

    series: [{
        marker: {
            radius: 13,
        },
        dataLabels: {
            enabled: true,
            linkFormat: '',
            allowOverlap: true
        },
        data: [
            ['Object name goes here', 'Object1'],
            ['Object name goes here', 'Object2'],
            ['Object name goes here', 'Object3'],
            ['Object name goes here', 'Object4'],
            ['Object name goes here', 'Object5'],
            ['Object name goes here', 'Object6'],
            ['Object name goes here', 'Object7'],
            ['Object name goes here', 'Object8']
        ],
        nodes: [{
            id: 'Object name goes here',
            color: mainObj
        },
        {
            id: 'Object1',
            color: blueColor
        }, {
            id: 'Object2',
            color: blueColor
        }, {
            id: 'Object3',
            color: blueColor
        }, {
            id: 'Object4',
            color: blueColor
        }, {
            id: 'Object5',
            color: blueColor
        }, {
            id: 'Object6',
            color: blueColor
        }, {
            id: 'Object7',
            color: blueColor
        }, {
            id: 'Object8',
            color: blueColor
        }]
    }]
});

Highcharts.SparkLine = function (a, b, c) {
    var hasRenderToArg = typeof a === 'string' || a.nodeName,
        options = arguments[hasRenderToArg ? 1 : 0],
        defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || this,
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },

                // small optimalization, saves 1-2 ms each sparkline
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                hideDelay: 0,
                outside: true,
                shared: true
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            }
        };

    options = Highcharts.merge(defaultOptions, options);

    return hasRenderToArg ?
        new Highcharts.Chart(a, options, c) :
        new Highcharts.Chart(options, b);
};

var start = +new Date(),
    $tds = $('td[data-sparkline]'),
    fullLen = $tds.length,
    n = 0;

// Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
// can take some seconds, so we split the input into chunks and apply them in timeouts
// in order avoid locking up the browser process and allow interaction.
function doChunk() {
    var time = +new Date(),
        i,
        len = $tds.length,
        $td,
        stringdata,
        arr,
        data,
        chart;

    for (i = 0; i < len; i += 1) {
        $td = $($tds[i]);
        stringdata = $td.data('sparkline');
        arr = stringdata.split('; ');
        data = $.map(arr[0].split(', '), parseFloat);
        chart = {};

        if (arr[1]) {
            chart.type = arr[1];
        }
        $td.highcharts('SparkLine', {
            series: [{
                data: data,
                pointStart: 1
            }],
            tooltip: {
                headerFormat: '<span style="font-size: 10px"> Q{point.x}:</span><br />',
                pointFormat: '<b>{point.y}.000</b> USD'
            },
            chart: chart
        });

        n += 1;

        // If the process takes too much time, run a timeout to allow interaction with the browser
        if (new Date() - time > 500) {
            $tds.splice(0, i + 1);
            setTimeout(doChunk, 0);
            break;
        }

        // Print a feedback on the performance
        if (n === fullLen) {
            $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
        }
    }
}
doChunk();
