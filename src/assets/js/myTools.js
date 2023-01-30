import echarts from 'echarts'
export default {
    getCookie: function(name) { //获取cookie
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    getQueryString: function(name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        if (window.location.href.indexOf('?') <= 0) {
            return null;
        } else {
            const searchurl = window.location.href.split('?')[1];
            const r = searchurl.match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    },
    getEcharts: function(color, chartObj, id, rotates) {
        var myLine1 = echarts.init(document.getElementById(id));
        myLine1.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [chartObj.title],
                icon: 'circle',
                x: 'center',
                y: 'bottom',
                itemWidth: 12,
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '26%',
                top: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: chartObj.x,
                axisLabel: {
                    interval: chartObj.x.length > 7 ? 'auto' : 0,
                    rotate: rotates || 35, //倾斜度 -90 至 90 默认为0  
                    margin: 5,
                    textStyle: {
                        color: '#ccc',
                    }
                },
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: chartObj.title,
                type: chartObj.y.length > 7 ? 'line' : 'bar',
                barWidth: '15px',
                data: chartObj.y,
                itemStyle: {
                    normal: {
                        color: '#76b3d2'
                    }
                }
            }, ],
        });
    },
}