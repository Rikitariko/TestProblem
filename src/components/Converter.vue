<template>
  <div class="converter">
    <div class="input-container">
      <b-form-input v-model="currency1"></b-form-input>
      <b-form-input v-model="currency2"></b-form-input>
    </div>

    <div class="input-container">
      <b-form-select v-model="selected1" :options="options"> </b-form-select>
      <b-form-select v-model="selected2" :options="options"> </b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Converter",
  data() {
    return {
      currency1: 1,
      currency2: 1,
      selected1: 1,
      selected2: 2,
      options: this.getCurrencyName
    };
  },
  computed: {
    getCurrencyName: function() {
      let data = this.$store.getters.getDataChart;
      let options = [];
      for (let i = 0; i < data.length; i++)
        options.push({ value: i, text: data[i] });
      return options;
    }
  }
};
</script>

<style scoped>
.converter {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input-container {
  width: 45%;
  display: flex;
  flex-direction: column;
}
</style>
