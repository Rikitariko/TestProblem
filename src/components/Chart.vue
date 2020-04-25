<template>
  <div class="chart">
    <div class="title">Currency Change Chart</div>
    <div>
      <LineChart :chart-data="dataPoints"></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      dataPoints: null,
      height: 20
    };
  },
  mounted() {
    setInterval(() => {
      this.fillData();
    }, 2000);
  },
  computed: {
    getDataChart: function() {
      return this.$store.getters.getDataChart;
    }
  },
  methods: {
    fillData() {
      this.dataPoints = {
        labels: this.getDataChart.labels,
        datasets: [
          {
            label: "EUR to RUB",
            backgroundColor: "#f87979",
            data: this.getDataChart.dataChart
          }
        ]
      };
    }
  }
};
</script>

<style>
.chart {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background: white;
  box-sizing: content-box;
  overflow: hidden;
  padding: 20px;
  width: 85%;
}
.title {
  font-size: 19px;
  padding: 0 0 10px;
}
#line-chart {
  height: 300px;
  width: 100%;
}
</style>
