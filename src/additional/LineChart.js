import { Line } from "vue-chartjs/es/BaseCharts";
import { reactiveProp } from "vue-chartjs/es/mixins";

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: function data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
}