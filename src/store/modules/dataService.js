import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
  headers: { "Content-Type": "application/json; charset=UTF-8" }
});

const state = {
  initialCurrency: "USD",
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
  setInitialTable: (state, payload) => {
    state.table = payload.rates;
  },
  setInitialCurrency: (state, payload) => {
    state.initialCurrency = payload;
  }
};

const actions = {
  setInitialTable: async context => {
    await AXIOS.get("latest?base=" + state.initialCurrency).then(response => {
      context.commit("setInitialTable", response.data);
    });
  },
  setInitialCurrency: async (context, payload) => {
    await context.commit("setInitialCurrency", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
