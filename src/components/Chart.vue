<div class="Chart">
  <h1 style="text-align:center;">Barchart</h1>
  <Line />
</div>

<script>
import { Line } from "vue-chartjs/es/BaseCharts";
import { reactiveData } from "vue-chartjs/es/mixins/index";

import Vue from "vue";
Vue.component("Line", Line);

export default {
  extends: Line,
  mixins: [reactiveData],
  props: {
      // eslint-disable-next-line vue/require-valid-default-prop
    labels: { type: Array, default: [1, 2] },
      // eslint-disable-next-line vue/require-valid-default-prop
    dataChart: { type: Array, default: [1, 2] }
  },
  mounted: function mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            smooth: false,
            label: "EUR to RUB",
            fill: "start",
            backgroundColor: "blue",
            data: this.dataChart
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      }
    );
  }
};
</script>

<style>
#line-chart.chartjs-render-monitor {
  height: 300px;
  width: 300px;
  margin: 20px;
}
</style>
