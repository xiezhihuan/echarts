
/*
* 输入数据*/
var input = [
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 136},
        {province: '北京市', count: 3205},
        {province: '河北省', count: 227},
        {province: '浙江省', count: 49},
        {province: '江西省', count: 89},
        {province: '河南省', count: 117},
        {province: '山西省', count: 189},
        {province: '安徽省', count: 131},
        {province: '黑龙江省', count: 53},
        {province: '内蒙古自治区', count: 40},
        {province: '辽宁省', count: 59},
        {province: '云南省', count: 126},
        {province: '湖南省', count: 85},
        {province: '天津市', count: 43},
        {province: '四川省', count: 18},
        {province: '贵州省', count: 123},
        {province: '吉林省', count: 24},
        {province: '江苏省', count: 946},
        {province: '陕西省', count: 950},
        {province: '青海省', count: 438},
        {province: '新疆维吾尔自治区', count: 424},
        {province: '湖北省', count: 419},
        {province: '广东省', count: 396},
        {province: '重庆市', count: 365},
        {province: '香港', count: 180},
        {province: '澳门', count: 392},
        {province: '宁夏回族自治区', count: 243},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 136},
        {province: '北京市', count: 3205},
        {province: '河北省', count: 227},
        {province: '浙江省', count: 49},
        {province: '江西省', count: 89},
        {province: '河南省', count: 117},
        {province: '山西省', count: 189},
        {province: '安徽省', count: 131},
        {province: '黑龙江省', count: 53},
        {province: '内蒙古自治区', count: 40},
        {province: '辽宁省', count: 59},
        {province: '云南省', count: 126},
        {province: '湖南省', count: 85},
        {province: '天津市', count: 43},
        {province: '四川省', count: 18},
        {province: '贵州省', count: 89},
        {province: '吉林省', count: 117},
        {province: '江苏省', count: 189},
        {province: '陕西省', count: 131},
        {province: '青海省', count: 53},
        {province: '新疆维吾尔自治区', count: 40},
        {province: '湖北省', count: 59},
        {province: '广东省', count: 126},
        {province: '重庆市', count: 365},
        {province: '香港', count: 180},
        {province: '澳门', count: 392},
        {province: '宁夏回族自治区', count: 243},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 136},
        {province: '北京市', count: 3205},
        {province: '河北省', count: 227},
        {province: '浙江省', count: 49},
        {province: '江西省', count: 89},
        {province: '河南省', count: 117},
        {province: '山西省', count: 189},
        {province: '安徽省', count: 131},
        {province: '黑龙江省', count: 53},
        {province: '内蒙古自治区', count: 40},
        {province: '辽宁省', count: 59},
        {province: '云南省', count: 126},
        {province: '湖南省', count: 85},
        {province: '天津市', count: 43},
        {province: '四川省', count: 18},
        {province: '贵州省', count: 89},
        {province: '吉林省', count: 117},
        {province: '江苏省', count: 189},
        {province: '陕西省', count: 131},
        {province: '青海省', count: 53},
        {province: '新疆维吾尔自治区', count: 40},
        {province: '湖北省', count: 59},
        {province: '广东省', count: 126},
        {province: '重庆市', count: 85},
        {province: '香港', count: 43},
        {province: '澳门', count: 18},
        {province: '宁夏回族自治区', count: 89},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 136},
        {province: '北京市', count: 3205},
        {province: '河北省', count: 227},
        {province: '浙江省', count: 49},
        {province: '江西省', count: 89},
        {province: '河南省', count: 117},
        {province: '山西省', count: 189},
        {province: '安徽省', count: 131},
        {province: '黑龙江省', count: 53},
        {province: '内蒙古自治区', count: 40},
        {province: '辽宁省', count: 59},
        {province: '云南省', count: 126},
        {province: '湖南省', count: 85},
        {province: '天津市', count: 43},
        {province: '四川省', count: 18},
        {province: '贵州省', count: 89},
        {province: '吉林省', count: 49},
        {province: '江苏省', count: 89},
        {province: '陕西省', count: 117},
        {province: '青海省', count: 189},
        {province: '新疆维吾尔自治区', count: 131},
        {province: '湖北省', count: 53},
        {province: '广东省', count: 40},
        {province: '重庆市', count: 59},
        {province: '香港', count: 126},
        {province: '澳门', count: 85},
        {province: '宁夏回族自治区', count: 43},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 126},
        {province: '北京市', count: 85},
        {province: '河北省', count: 43},
        {province: '浙江省', count: 18},
        {province: '江西省', count: 89},
        {province: '河南省', count: 49},
        {province: '山西省', count: 189},
        {province: '安徽省', count: 131},
        {province: '黑龙江省', count: 53},
        {province: '内蒙古自治区', count: 40},
        {province: '辽宁省', count: 59},
        {province: '云南省', count: 126},
        {province: '湖南省', count: 85},
        {province: '天津市', count: 43},
        {province: '四川省', count: 18},
        {province: '贵州省', count: 89},
        {province: '吉林省', count: 49},
        {province: '江苏省', count: 89},
        {province: '陕西省', count: 117},
        {province: '青海省', count: 189},
        {province: '新疆维吾尔自治区', count: 131},
        {province: '湖北省', count: 53},
        {province: '广东省', count: 40},
        {province: '重庆市', count: 59},
        {province: '香港', count: 126},
        {province: '澳门', count: 85},
        {province: '宁夏回族自治区', count: 43},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
    [
        {province: '甘肃省', count: 57},
        {province: '山东省', count: 126},
        {province: '北京市', count: 85},
        {province: '河北省', count: 43},
        {province: '浙江省', count: 18},
        {province: '江西省', count: 89},
        {province: '河南省', count: 49},
        {province: '山西省', count: 40},
        {province: '安徽省', count: 59},
        {province: '黑龙江省', count: 126},
        {province: '内蒙古自治区', count: 85},
        {province: '辽宁省', count: 43},
        {province: '云南省', count: 18},
        {province: '湖南省', count: 89},
        {province: '天津市', count: 49},
        {province: '四川省', count: 89},
        {province: '贵州省', count: 117},
        {province: '吉林省', count: 189},
        {province: '江苏省', count: 131},
        {province: '陕西省', count: 117},
        {province: '青海省', count: 189},
        {province: '新疆维吾尔自治区', count: 131},
        {province: '湖北省', count: 53},
        {province: '广东省', count: 40},
        {province: '重庆市', count: 59},
        {province: '香港', count: 126},
        {province: '澳门', count: 85},
        {province: '宁夏回族自治区', count: 43},
        {province: '广西壮族自治区', count: 170},
        {province: '福建省', count: 154},
        {province: '西藏自治区', count: 5},
        {province: '上海市', count: 10},
        {province: '海南省', count: 5},
        {province: '台湾省', count: 5}
    ],
];
var element = document.getElementById('main');
var center = [116.4551, 40.2539]; //北京的经纬度
renderMap(input, element,center);

secondOption={
    backgroundColor: '#013954',
    title: [
    {
        text: '北京联合大学',
        subtext: '数据由数据资源中心、招生办提供',
        left: '35%',
        top: '5%',
        textStyle: {
            color: '#fff',
            fontSize: 25
        }
    },
    {
        id: 'statistic',
        text: "某年新生人数",//动态配置
        left: '75%',
        top: '8%',
        textStyle: {
            color: '#fff',
            fontSize: 25
        }
    }
],
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
            nameGap: 16,
            axisLine: {
            show: true,
                lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
                lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
                textStyle: {
                color: '#ddd'
            }
        },
        data: [] //动态配置
    },

    series: [
        //文字和标志
        {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [], //动态配置
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '' //动态配置
                }
            }
        },
        //地图
        {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: input
        },
        //地图点的动画效果
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [], //动态配置
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '', //动态配置
                    shadowBlur: 10,
                    shadowColor: '' //动态配置
                }
            },
            zlevel: 1
        },
        //地图线的动画效果
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 3, //图标大小
            },
            lineStyle: {
                normal: {
                    color: '',//动态配置
                    width: 0.1, //尾迹线条宽度
                    opacity: 0.5, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: [] //动态配置
        },
        //柱状图
        {
            zlevel: 1.5,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '' //动态配置
                }
            },
            data: []  //动态配置
        }
    ]
}