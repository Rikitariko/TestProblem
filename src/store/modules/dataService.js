import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
  headers: { "Content-Type": "application/json; charset=UTF-8" }
});

const state = {
  currency: [
    "CAD",
    "HKD",
    "ISK",
    "PHP",
    "DKK",
    "HUF",
    "CZK",
    "GBP",
    "RON",
    "SEK",
    "IDR",
    "INR",
    "BRL",
    "RUB",
    "HRK",
    "JPY",
    "THB",
    "CHF",
    "EUR",
    "MYR",
    "BGN",
    "TRY",
    "CNY",
    "NOK",
    "NZD",
    "ZAR",
    "USD",
    "MXN",
    "SGD",
    "AUD",
    "ILS",
    "KRW",
    "PLN"
  ],
  table: []
};

const getters = {
  getCurrencyTable: state => {
    return state.table;
  }
};

const mutations = {
  setInitialCurrency: (state, payload) => {
    //console.log(payload.rates);
    state.table = payload.rates;
  }
};

const actions = {
  setInitialValue: async context => {
    await AXIOS.get("latest").then(response => {
      context.commit("setInitialCurrency", response.data);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
