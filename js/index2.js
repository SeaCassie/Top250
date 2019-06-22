window.addEventListener("load",function () {
    console.log(data,categories)

    let divbar=document.querySelector(".divbar");
    let bar=echarts.init(divbar);
     let option = {
        backgroundColor: 'rgba(51,51,51,0.5)',

        title: {
            text: '豆瓣250',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
         legend: {
             type: 'scroll',
             orient: 'vertical',
             right: 10,
             top: 20,
             bottom: 20,
             x: 'right',
             // data:['全部','武侠','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']、
             data:[]
         },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        // visualMap: {
        //     show: false,
        //     min: 80,
        //     max: 600,
        //     inRange: {
        //         colorLightness: [0, 1]
        //     }
        // },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[].sort(function (a, b) { return a.value - b.value; }),
                // roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                // itemStyle: {
                //     normal: {
                //         color: '#c23531',
                //         shadowBlur: 200,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };


     let arr=[];
     for (let i=1;i<categories.length;i++){
            let name=categories[i];
            let value=data.filter(elem=>elem[4].includes(name)).length;
            arr.push({value,name})
     }
     option.series[0].data=arr;
    option.legend.data=categories;


    bar.setOption(option);








})