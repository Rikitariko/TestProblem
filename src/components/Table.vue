<template>
  <div class="container">
    <b-table :items="getDataTable" :busy="isBusy" class="mt-3" outlined>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong> Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false
    };
  },
  computed: {
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
.container {
  width: 600px;
  margin: 0;
  box-sizing: content-box;
  padding: 50px;
  z-index: 5;
}
.table {
  background: white;
  border-radius: 10px;
  border-width: 0;
}
</style>
