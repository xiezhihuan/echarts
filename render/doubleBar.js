/**
 * 双向柱状图
 *
 * */

/*var input = [
    [//某年
        {//某学院
            name: '机器人学院',
            femaleCount: 200,
            maleCount: 100
        },
        {//某学院
            name: '管理学院',
            femaleCount: 200,
            maleCount: 100
        }
    ],
    [//某年
        {//某学院
            name: '机器人学院',
            femaleCount: 200,
            maleCount: 100
        },
        {//某学院
            name: '管理学院',
            femaleCount: 200,
            maleCount: 100
        }
    ]
];*/

var renderDoubleBar = function (input,element) {

// var categoryArray = ['一审服', '撤诉率', '调解率', '实际', '裁判率', '执行标', '再审'];
    var categoryArray = (function (input) {
        var categoryArray = [];
        for (var i = 0; i < input.length; i++) {
            var nameArray = [];
            for (var j = 0; j < input[i].length; j++) {
                nameArray.push(input[i][j].name);
            }
            categoryArray.push(nameArray);
        }
        return categoryArray;
    })(input)[0];//[0]  //拿其中某一年的学院名单就行了，学院名称基本上每年都一样


    /*
    * 从数据数据中获取各学院男女人数count*/
    var getCount = function (input, field) {
        var data = [];
        for (var i = 0; i < input.length; i++) {
            var count = [];
            for (var j = 0; j < input[i].length; j++) {
                count.push(input[i][j][field]);
            }
            data.push(count)
        }
        return data;
    };
// var maleData = [
//     [3, 20, 62, 34, 55, 65, 33]
//     ...
// ];
    var maleData = getCount(input, 'maleCount');
// var femaleData = [
//     [11, 38, 23, 39, 66, 66, 79]
//     ...
// ];
    var femaleData = getCount(input, 'femaleCount');

    var background = '#0e2147'; //背景
    var year = ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'];


    var staticData = {
        defaultOption: {
            baseOption: {
                backgroundColor: background,
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    left: '10%',
                    right: '10%',
                    bottom: '3%',
                    width: '80%',
                    label: {normal: {textStyle: {color: '#ddd'}}, emphasis: {textStyle: {color: '#fff'}}},
                    symbolSize: 10,
                    lineStyle: {color: '#555'},
                    checkpointStyle: {borderColor: '#777', borderWidth: 2},
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {color: '#666', borderColor: '#666'},
                        emphasis: {color: '#aaa', borderColor: '#aaa'}
                    }
                },
                tooltip: {  //鼠标停留时的提示框
                    show: true,
                    trigger: 'axis',
                    formatter: '{b} <br/>{a}: {c}人',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
                legend: {
                    data: ['男生', '女生'],
                    top: 4,
                    right: '10%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                title: {
                    top: 4,
                    left: 4,
                    text:'北京联合大学新生数据',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    subtext: '各学院男女人数',
                },
                grid: [
                    {
                        show: false,
                        left: '5%',
                        top: '10%',
                        bottom: '12%',
                        containLabel: true,
                        width: '37%'
                    },
                    {
                        show: false,
                        left: '51%',
                        top: '10%',
                        bottom: '15%',
                        width: '0%'
                    },
                    {
                        show: false,
                        right: '2%',
                        top: '10%',
                        bottom: '12%',
                        containLabel: true,
                        width: '37%'
                    }],
                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'bottom',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    show: false,
                }, {
                    gridIndex: 2,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'bottom',
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: categoryArray
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20
                        }

                    },
                    data: categoryArray.map(function (value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: categoryArray
                }],
                series: []

            },
            options: []
        },
        defaultSeries: [
            {
                type: 'pictorialBar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                barWidth: 10,
                data: [],
                barGap: '-100%',
                barCategoryGap: 0,
                label: {
                    normal: {
                        show: true,
                        position: 'insideTopLeft',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20,
                        },
                        offset: [0, -10],
                    }
                },
                z: -100,
                animationEasing: 'elasticOut',
                animationDelay: function (dataIndex, params) {
                    return params.index * 30;
                }
            }, {
                name: '男生',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#08C7AE',
                    },
                    emphasis: {
                        barBorderRadius: 5,
                        color: '#659F83',
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                    emphasis: {
                        show: false,
                    },
                },
                data: [],//maleData[n] 动态配置
            },
            {
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                barWidth: 10,
                symbolRepeat: true,
                symbolSize: 14,
                data: [],
                barGap: '-100%',
                barCategoryGap: 0,
                label: {
                    normal: {
                        show: true,
                        // formatter: (series) => {
                        //     return femaleData[timeLineData[0]][series.dataIndex] + '%'
                        // },
                        position: 'insideTopRight',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20,
                        },
                        offset: [0, -10],
                    }
                },
                z: -100,
                animationEasing: 'elasticOut',
                animationDelay: function (dataIndex, params) {
                    return params.index * 30;
                }
            }, {
                name: '女生',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#c76b85',
                    },
                    emphasis: {
                        barBorderRadius: 5,
                        color: '#be92c7',
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                    emphasis: {
                        show: false,
                    },
                },
                data: [], //femaleData[n] 动态配置
            }
        ]
    };

    var option = (function (staticData, input, maleData) {
        var defaultOption = JSON.parse(JSON.stringify(staticData.defaultOption));
        for (var i = 0; i < input.length; i++) {
            staticData.defaultSeries[1].data = maleData[i];
            staticData.defaultSeries[3].data = femaleData[i];
            var newSeries = JSON.parse(JSON.stringify(staticData.defaultSeries));
            defaultOption.options.push({series: newSeries});
        }
        return defaultOption;
    })(staticData, input, maleData, femaleData);

    var myChart = echarts.init(element);
    myChart.setOption(option);
};
