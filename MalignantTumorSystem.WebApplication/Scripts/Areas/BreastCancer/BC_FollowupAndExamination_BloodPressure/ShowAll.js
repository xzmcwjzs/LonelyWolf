﻿$(function () {
    $.ajax({
        cache: false,
        async: false,
        url: "/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowAllBasic",
        type: "post",
        data: { id: id },
        dataType: "json",
        success: function (data) { 
            if (data != "" && data != null) {
                $('#Td1').html(data[0].name);
                if (data[0].sex == "01") {
                    $('#Td2').html("男");
                }
                else {
                    $('#Td2').html("女");
                }

                $('#Td3').html(data[0].id_card_number);

                if (data[0].birth_date != "" && data[0].birth_date != null) {
                    var date = new Date(parseInt(data[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                    $('#Td4').html(date.getFullYear() + '-' + a1 + '-' + a2);
                    var dates = new Date();
                    var year = dates.getFullYear() - date.getFullYear();
                    if (year > 0) {
                        $("#Td5").html(year + "岁");
                    } else if (year == 0) {
                        var month = dates.getMonth() - a1;
                        if (month > 0) {
                            $("#Td5").html(month + "月");
                        } else if (month == 0) {
                            var day = dates.getDay() - a2;
                            if (day > 0) {
                                $("#Td5").html(day + "天");
                            }
                        }
                    }
                }

                var codes = data[0].community_code;
                var address = data[0].permanent_address;
                $.post("/Data/ProvinceName?code=" + codes.substring(0, 2),
                   function (data1) {
                       $.post("/Data/CityName?code=" + codes.substring(0, 4),
                     function (data2) {
                         $.post("/Data/CountyName?code=" + codes.substring(0, 6),
                     function (data3) {
                         $.post("/Data/StreetName?code=" + codes.substring(0, 9),
                     function (data4) {
                         $.post("/Data/CommunityName?code=" + codes.substring(0, 12),
                   function (data5) {

                       $("#Td6").html(data1 + data2 + data3 + data4 + data5 + address);

                   })
                     })
                     })
                     })
                   })

                $('#Td8').html(data[0].phone);
            }
        }
    })

    $.ajax({
        cache: false,
        async: false,
        url: "/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowAllTime",
        type: "post",
        data: { id: id },
        dataType: "json",
        success: function (data) {
            if (data != "" && data != null) { 
                for (var i = 0; i < data.length; i++) { 
                    var str=data[i].split('-');
                    var year = str[0];
                    var month = str[1]; 
                    if (i >= 1) {
                        $("#tdDiv").append('<div id="container' + i + '" style="width:1000px;height:500px"></div><br/>');
                    } 
                    //添加 图表
                    $.ajax({
                        cache: false,
                        async: false,
                        url: "/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowAllText",
                        type: "post",
                        data: { id: id,i:i ,year:year,month:month},
                        dataType: "json",
                        success: function (data) {
                            var startDate = data.start;
                            var endDate = data.end;
                            var dateArr = new Array();

                            var ssyArr = new Array(); var szyArr = new Array(); var xlArr = new Array(); var timeArr = new Array();

                            for (var i = 0; i < 7; i++) {
                                var dd = new Date(startDate);
                                dd.setDate(dd.getDate() + i);
                                var y = dd.getFullYear();
                                var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;//获取当前月份的日期
                                var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
                                dateArr[i] = y + "-" + m + "-" + d;
                            }
                            var seriesData = data.res;
                            var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");

                            for (var i = 0; i < seriesData.length; i++) {
                                ssyArr.push(parseInt(seriesData[i].ssy));
                                szyArr.push(parseInt(seriesData[i].szy));
                                xlArr.push(parseInt(seriesData[i].heart));

                                var date = new Date(parseInt(seriesData[i].data.replace("/Date(", "").replace(")/", ""), 10));
                                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                timeArr.push(date.getFullYear() + "-" + a1 + "-" + a2 );
                            }
                            var myChart = echarts.init(document.getElementById('container'+data.i));
                            var legendArr = new Array("收缩压", "舒张压", "心率");


                            myChart.showLoading({
                                text: '图表数据正在努力加载...'
                            });

                            option = {
                                title: {
                                    text: '血压监测',
                                    subtext: '最近一周内的数据'
                                },
                                tooltip: {
                                    trigger: 'axis'
                                },
                                legend: {
                                    data: []
                                },
                                grid: {
                                    x: 80,
                                    y: 60,
                                    x2: 80,
                                    y2: 100,
                                    width: 850,
                                    height: 350,
                                    borderWidth: 1,
                                    borderColor: '#ccc'
                                },
                                toolbox: {
                                    show: true,
                                    orient: 'horizontal',
                                    x: 'right',
                                    y: 'top',
                                    color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderColor: '#ccc',
                                    borderWidth: 0,
                                    padding: 5,
                                    showTitle: true,
                                    feature: {
                                        mark: {
                                            show: true,
                                            title: {
                                                mark: '辅助线-开关',
                                                markUndo: '辅助线-删除',
                                                markClear: '辅助线-清空'
                                            },
                                            lineStyle: {
                                                width: 1,
                                                color: '#1e90ff',
                                                type: 'dashed'
                                            }
                                        },
                                        saveAsImage: {
                                            show: true,
                                            title: '保存为图片',
                                            type: 'png',
                                            lang: ['点击保存']
                                        }
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: true,
                                    data: [],
                                    name: '日期',
                                    axisLabel: {
                                        interval: 0,
                                        rotate:60
                                    }
                                },
                                yAxis: {
                                    type: 'value',
                                    min: 0,
                                    max: 200,
                                    splitNumber: 20,
                                    name: 'mmHg',
                                    nameLocation: 'start'
                                },
                                series: [
                                    {
                                        name: '收缩压',
                                        type: 'line',
                                        data: [],
                                        markPoint: {
                                            data: [
                                                { type: 'max', name: '最大值' },
                                                { type: 'min', name: '最小值' }
                                            ]
                                        },
                                        markLine: {
                                            data: [
                                                { type: 'average', name: '平均值' }
                                            ]
                                        }
                                    },
                                    {
                                        name: '舒张压',
                                        type: 'line',
                                        data: [],
                                        markPoint: {
                                            data: [
                                                { type: 'max', name: '最大值' },
                                                { type: 'min', name: '最小值' }
                                            ]
                                        },
                                        markLine: {
                                            data: [
                                                { type: 'average', name: '平均值' }
                                            ]
                                        }
                                    },
                                    {
                                        name: '心率',
                                        type: 'line',
                                        data: [],
                                        markPoint: {
                                            data: [
                                                { type: 'max', name: '最大值' },
                                                { type: 'min', name: '最小值' }
                                            ]
                                        },
                                        markLine: {
                                            data: [
                                                { type: 'average', name: '平均值' }
                                            ]
                                        }
                                    }
                                ]
                            };
                            option.title.subtext = data.year + "年" + data.month+ "月";
                            option.legend.data = legendArr;
                            option.xAxis.data = timeArr;
                            option.series[0].data = ssyArr;
                            option.series[1].data = szyArr;
                            option.series[2].data = xlArr;
                            myChart.hideLoading();
                            myChart.setOption(option);
                        }
                    })

                }
                  
            }
        }
    });

})
