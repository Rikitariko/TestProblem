import axios from "axios";

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear();

  return yy + "-" + mm + "-" + dd;
}

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
  table: [],
  chart: []
};

const getters = {
  getCurrency: state => {
    return state.currency;
  },
  getCurrencyTable: state => {
    return state.table;
  },
  getDataChart: state => {
    return state.chart;
  },
};

const mutations = {
  setInitialTable: (state, payload) => {
    state.table = payload.rates;
  },
  setInitialCurrency: (state, payload) => {
    state.initialCurrency = payload;
  },
  setInitialChart: (state, payload) => {
    let date = new Date();
    let data = payload.data.rates;

    let max = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let key in data) {
      max[+key.substr(5, 2)] = Math.max(
        data[key]["RUB"],
        max[+key.substr(5, 2)]
      );
    }

    let dataChart = [];
    let labels = [];
    for (let i = date.getMonth() + 1; i <= 12; i++) {
      labels.push(i);
      dataChart.push(max[i]);
    }
    for (let i = 1; i < date.getMonth() + 1; i++) {
      labels.push(i);
      dataChart.push(max[i]);
    }
    state.chart = { labels: labels, dataChart: dataChart };
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
  },
  setInitialChart: async (context, payload) => {
    let date = new Date();
    let formatedDate = formatDate(date);
    let newDate = formatDate(
      new Date(date.getFullYear() - 1, date.getMonth() + 1, date.getDay())
    );
    console.log(newDate.toString());
    await AXIOS.get(
      "history?start_at=" +
        newDate +
        "&end_at=" +
        formatedDate +
        "&symbols=" +
        payload
    ).then(response => {
      context.commit("setInitialChart", response);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
