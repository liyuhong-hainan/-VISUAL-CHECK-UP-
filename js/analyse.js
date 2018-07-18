$(function () {

var scaleW = window.innerWidth;

$('.container').css("minWidth",scaleW+'px');

    $('#container1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
       
            text: '各个年龄视觉检测结果'
        },
        subtitle: {
            text: '柱状图分布'
        },
        xAxis: {
            categories: [
                '10以下',
                '10-20',
                '20-30',
                '30-40',
                '40-50',
                '50-60',
                '60-70',
                '70-80',
                '80-100岁'
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数(人次)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 人次</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '色盲',
            data: [149, 71, 106, 129, 144, 76, 135, 88, 116]

        }, {
            name: '近视',
            data: [183, 178, 98, 93, 106, 84, 51, 40, 10]

        }, {
            name: '散光',
            data: [178, 188, 169, 111, 97, 88, 59, 59, 52]

        }, {
            name: '眼抑制',
            data: [142, 133, 124, 99, 152, 75, 57, 60, 27]

        }]
    });




 $('#container2').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '曲线分布图',
            x: -20
        },
        xAxis: {
            categories: [
               '10以下',
                '10-20',
                '20-30',
                '30-40',
                '40-50',
                '50-60',
                '60-70',
                '70-80',
                '80-100岁'
            ]
        },
        yAxis: {
            title: {
                text: '人数(人次)'
            },
            plotLines: [{
                value: 0,
                width: 0,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '色盲',
            data: [149, 71, 106, 129, 144, 76, 135, 88, 116]

        }, {
            name: '近视',
            data: [183, 178, 98, 93, 106, 84, 51, 40, 10]

        }, {
            name: '散光',
            data: [178, 188, 169, 111, 97, 88, 59, 59, 52]

        }, {
            name: '眼抑制',
            data: [142, 133, 124, 99, 152, 75, 57, 60, 27]

        }]
    });



 $('#container3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '色盲患者男女比例'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '色盲患者',
            data: [
  
                ['男性',      56],

                ['女性',      44]
               
            ]
        }]
    });



});     