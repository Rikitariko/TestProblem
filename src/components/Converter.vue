<template>
  <div class="converter">
    <div class="title">
      1 {{ this.selected1 }} equals {{ this.validCurrency }}
      {{ this.selected2 }}
    </div>
    <div class="converter-container">
      <div class="input-container">
        <b-form-input v-model="currency1"></b-form-input>
        <b-form-input v-model="this.changeValue"></b-form-input>
      </div>

      <div class="input-container">
        <b-form-select
          v-model="selected1"
          :options="this.getCurrencyName"
          @input="setNewCurrency($event, 1)"
        >
        </b-form-select>
        <b-form-select
          v-model="selected2"
          :options="this.getCurrencyName"
          @input="setNewCurrency($event, 2)"
        >
        </b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
  headers: { "Content-Type": "application/json; charset=UTF-8" }
});

export default {
  name: "Converter",
  data() {
    return {
      validCurrency: 1,
      currency1: 1,
      currency2: 1,
      selected1: "RUB",
      selected2: "RUB",
      options: this.getCurrencyName
    };
  },
  methods: {
    async setNewCurrency(currency, version) {
      console.log(currency);
      if (version === 1) {
        await AXIOS.get("latest?base=" + currency).then(response => {
          this.validCurrency = response.data["rates"][this.selected2];
        });
      } else {
        await AXIOS.get("latest?base=" + this.selected1).then(response => {
          this.validCurrency = response.data["rates"][currency];
        });
      }
    }
  },
  computed: {
    changeValue() {
      return this.validCurrency * this.currency1;
    },
    getCurrencyName: function() {
      let data = this.$store.getters.getCurrency;
      console.log(data);
      let options = [];
      for (let i = 0; i < data.length; i++)
        options.push({ value: data[i], text: data[i] });
      console.log(options);
      return options;
    }
  }
};
</script>

<style scoped>
.converter {
  width: 85%;
  min-height: 120px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.converter-container {
  font-size: 19px;
  width: 100%;
  height: 120px;
  padding: 10px 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
}

.input-container {
  width: 45%;
  display: flex;
  flex-direction: column;
}
.form-control,
.custom-select {
  margin-bottom: 10px;
}
</style>
