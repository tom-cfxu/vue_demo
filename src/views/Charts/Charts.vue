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
    BorderBox,
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    trend() {
      let myChart = this.$echarts.init(document.getElementById("trend"));
      const lineColor = "#B9E1FC";
      const lineWidth = 2;
      let option = {
        color: [
          "#3398DB",
          "#feca57",
          "#1dd1a1",
          "#01a3a4",
          "#2e86de",
          "#341f97",
          "#8395a7",
          "#222f3e",
          "#48dbfb",
          "#ff6b6b",
          "#ff9ff3",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          bottom: "10%",
          left: "10%",
          top: "20%",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
          iconStyle: {
            borderColor: "#fff",
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
            textStyle: {
              color: "#fff",
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
              shadowOffsetY: 2,
            },
          },
        ],
        legend: {
          data: [],
          top: "20%",
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: lineColor,
              width: lineWidth,
            },
          },
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: lineColor,
              width: lineWidth,
            },
          },
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            symbolSize: 12,
            lineStyle: {
              width: 5,
            },
          },
          {
            data: [],
            type: "line",
            smooth: true,
            symbolSize: 12,
            lineStyle: {
              width: 5,
            },
          },
        ],
      };
      myChart.setOption(option);
      let legend = [];
      let timeArr = [];
      let dataArr1 = [];
      let dataArr2 = [];
      const self = this;
      const f = function () {
        const result = self.getData();
        result.then((res) => {
          dataArr1.push(res[0].value);
          legend = [res[0].desc, res[1].desc];
          dataArr2.push(res[1].value);
          timeArr.push(self.dateFormat("YYYY-mm-dd HH:MM:SS", new Date()));
        });

        myChart.setOption({
          xAxis: {
            data: timeArr,
          },
          legend: {
            data: legend,
          },
          series: [
            {
              data: dataArr1,
              name: legend[0],
            },
            {
              data: dataArr2,
              name: legend[1],
            },
          ],
        });
        return f;
      };
      this.timer = setInterval(f(), 5000);

      let sizeFun = function () {
        myChart.resize();
      };
      setTimeout(() => {
        window.addEventListener("resize", sizeFun);
      }, 200);
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
    async getData() {
      const res = await this.$axios.post(
        "/api/v1.0/getAllRDB",
        `token=${localStorage.getItem("token")}`
      );
      const datas = res.data.data.rows;
      if (res.data.code === "10005") {
        const result = datas.filter((data) => {
          return (
            data.uuid == "d1fb359d-62d2-456e-8278-8299b2e60895" ||
            data.uuid == "78eb33b4-f224-4f1d-9587-e47d88b7acda"
          );
        });
        // console.log(result);
        return result;
      } else {
        console.log("登录过期");
        this.$router.push({ path: "/" });
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.$message({
          message: `登录过期!`,
          type: "info",
          center: true,
        });
      }
    },
  },
  mounted() {
    this.trend();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="less">
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