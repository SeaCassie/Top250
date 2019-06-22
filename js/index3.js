window.addEventListener("load",function () {
    let line=document.querySelector(".content");
    let content=echarts.init(line);
    let selected={};
    let option={
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#cdd0d5'
        }]),
        title: {
            text: '豆瓣top250'
        },
        legend: {
            type:'scroll',
            left: 300,
            data: categories,
            selectedMode:'single',
            selected
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },

        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: []
            }



categories.forEach(categories=>{
    let movies= data.filter(elem=>elem[4].includes(categories));
    if (categories=='全部'){
        selected[categories]=true;
    } else {
        selected[categories]=false;
    }
    let obj={
        name:categories,
        data:categories=="全部"?data:movies,
        type:"scatter",
        symbolSize: function (data) {
           console.log(data[2])
            return Math.ceil(data[1]*2);
        },
        label:{
            emphasis: {
                show: true,
                formatter: function (param) {
                 return param.data[3];
                },
                position: 'top'
            }
        }
    }
    option.series.push(obj);
})


    content.setOption(option);
})