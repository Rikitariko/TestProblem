<template>
  <div class="container">
    <div class="table-container">
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
      <Converter></Converter>
      <Chart></Chart>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
import Converter from "./Converter";

export default {
  data() {
    return {
      isBusy: false
    };
  },
  components: {
    Chart,
    Converter
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
  padding: 40px;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  box-sizing: content-box;
}

.table-container {
  background: white;
  box-sizing: content-box;
  padding: 20px;
  border-radius: 5px;
}

.table {
  min-width: 550px;
  background: white;
  margin: 0;
  border-radius: 10px !important;
}
</style>
