<template>
  <div class="container">
    <div class="table-container">
      <div
        style="display: flex; flex-direction: row; font-size: 19px; justify-content: space-between"
      >
        <div>Latest foreign exchange reference rates with base:</div>
        <b-form-select
          style="width: 100px;"
          v-model="selected2"
          :options="this.getCurrencyName"
          @input="setNewCurrency($event)"
        >
        </b-form-select>
      </div>
      <b-table :items="getDataTable" :busy="isBusy" class="mt-3" outlined>
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong> Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>
    <div class="side-container">
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
      isBusy: false,
      selected2: "RUB"
    };
  },
  components: {
    Chart,
    Converter
  },
  methods: {
    setNewCurrency(currency) {
      console.log("Sdsdg");
      this.$store.dispatch("setInitialCurrency", currency);
      this.$store.dispatch("setInitialTable");
    }
  },
  computed: {
    getCurrencyName: function() {
      let data = this.$store.getters.getCurrency;
      console.log(data);
      let options = [];
      for (let i = 0; i < data.length; i++)
        options.push({ value: data[i], text: data[i] });
      console.log(options);
      return options;
    },
    getDataTable: function() {
      let data = this.$store.getters.getCurrencyTable;
      let items = [];
      let i = 0;
      for (let key in data)
        items.push({ id: ++i, Currency: key, Rate: data[key] });
      return items;
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
.side-container {
  display: flex;
  flex-direction: column;
}
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
