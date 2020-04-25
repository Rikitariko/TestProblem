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
  mounted: function mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            smooth: false,
            label: "Data One",
            fill: "start",
            backgroundColor: "blue",
            data: [40, 39, 10, 40, 39, 80, 40]
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
.small {
  max-width: 800px;
  margin: 150px auto;
}

#line-chart.chartjs-render-monitor {
  height: 400px;
  width: 500px;
  margin: 20px;
}
</style>
