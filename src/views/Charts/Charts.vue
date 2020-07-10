<template>
  <div class="charts">
    <BorderBox title="趋势图表">
      <div id="trend"></div>
    </BorderBox>
  </div>
</template>
<script>
import BorderBox from "../../components/BorderBox";
export default {
  components: {
    BorderBox
  },
  data() {
    return {};
  },
  methods: {
    trend() {
      let myChart = this.$echarts.init(document.getElementById("trend"));
      const lineColor = "#B9E1FC";
      const lineWidth = 2;
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          bottom: "10%",
          left: "10%",
          top: "15%"
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100,
            textStyle: {
              color: "#fff"
            },
            borderColor: lineColor,
            borderWidth: lineWidth,
            fillerColor: "rgba(23, 54, 143,0.5)",
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "100%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: lineColor,
              width: lineWidth
            }
          },
          boundaryGap: false
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: lineColor,
              width: lineWidth
            }
          }
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            symbolSize: 12,
            lineStyle: {
              width: 5
            }
          }
        ]
      };
      myChart.setOption(option);
      let timeArr = [],
        dataArr = [];
      this.sockets.listener.subscribe("event2", data => {
        if (data.data === undefined) {
          return console.log("数据为空");
        } else {
          timeArr.push(data.data.time);
          dataArr.push(data.data.test);
          if (timeArr.length > 100) {
            timeArr.shift();
            dataArr.shift();
          }
          myChart.setOption({
            xAxis: {
              data: timeArr
            },
            series: [
              {
                data: dataArr
              }
            ]
          });
        }
      });
      let sizeFun = function() {
        myChart.resize();
      };
      setTimeout(() => {
        window.addEventListener("resize", sizeFun);
      }, 200);
    }
  },
  mounted() {
    this.trend();
  }
};
</script>

<style lang="less">
.charts {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  #trend {
    width: 100%;
    height: 100%;
  }
}
</style>