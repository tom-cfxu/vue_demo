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
        timeArr.push(data.data.time);
        dataArr.push(data.data.test);
        if (timeArr.length > 20) {
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
      });
      setInterval(() => {
        window.onresize = function() {
          myChart.resize();
        };
      }, 2000);
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