import echarts from "echarts"
import Vue from "vue"
import country from "../utils/country"

const install = function() {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    chinaMap(id, data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true,
                                formatter(data) {
                                    return "<a href='/city/" + data.name + "' style='color:#fff'><div><p>省:" + data.name + "</p><p>现存确诊:" + data.value + "</p></div></a>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 10, color: "#FDFDCF" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 100, max: 500, color: "#E55A4E" },
                                    { min: 500, max: 10000, color: "#4F070D" }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map",
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                // data: [
                                //     { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#f00' } } }
                                // ]
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    provinceMap(id, data, cityName) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            tooltip: {
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>总确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 10, color: "#FDFDCF" },
                                    { min: 10, max: 100, color: "#FE9E83" },
                                    { min: 100, max: 500, color: "#E55A4E" },
                                    { min: 500, max: 100000, color: "#4F070D" }
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map",
                                map: cityName, // 城市的名称
                                roam: false, // 是否允许自动缩放
                                zoom: 1.2, // 地图缩放比例
                                label: { // 配置字体
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: { // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    worldMap(id, data) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true,
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{
                                orient: "vertical",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFFF" },
                                    { min: 1, max: 1000, color: "#FDFDCF" },
                                    { min: 1000, max: 10000, color: "#FE9E83" },
                                    { min: 10000, max: 100000, color: "#E55A4E" },
                                    { min: 100000, max: 10000000, color: "#4F070D" }
                                ]
                            }],
                            series: [{
                                name: "国",
                                type: "map",
                                map: "world",
                                roam: true,
                                zoom: 1.5,
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap: country,
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    }
                }
            }
        }
    })
}

export default install