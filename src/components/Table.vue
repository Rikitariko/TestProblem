<template>
  <div class="container">
    <div>
      <b-table :items="getDataTable" :busy="isBusy" class="mt-3" outlined>
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong> Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>
    <div>
      <Chart
        :labels="getDataChart.labels"
        :data-chart="getDataChart.dataChart"
      ></Chart>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";

export default {
  data() {
    return {
      isBusy: false
    };
  },
  components: {
    Chart
  },
  computed: {
    getDataTable: function() {
      let data = this.$store.getters.getCurrencyTable;
      let items = [];
      let i = 0;
      for (let key in data)
        items.push({ id: ++i, Currency: key, Rate: data[key] });
      return items;
    },
    getDataChart: function() {
      return this.$store.getters.getDataChart;
    }
  },
  beforeMount() {
    this.isBusy = true;
  },
  mounted() {
    this.isBusy = false;
  }
};
</script>

<style scoped>
.container {
  padding: 50px;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  box-sizing: content-box;
}

.table {
  min-width: 600px;
  background: white;
  border-radius: 10px;
  border-width: 0;
}
/*
.chart {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background: white;
}*/
</style>
