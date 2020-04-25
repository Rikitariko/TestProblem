<template>
  <div id="app">
    <div class="intro"></div>
    <Table></Table>
  </div>
</template>

<script>
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Table
  },
  beforeCreate() {
    this.$store.dispatch("setInitialCurrency", "EUR");
    this.$store.dispatch("setInitialTable");
    this.$store.dispatch("setInitialChart", "RUB");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  background: #f7f7f7;
  height: 100%;
  width: 100%;
}
.intro {
  width: 100%;
  height: 100px;
  background: darkblue;
}
</style>
