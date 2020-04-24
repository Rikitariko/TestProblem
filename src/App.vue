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
    this.$store.dispatch("setInitialValue");
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
  box-sizing: content-box;
  background: #f0f0f0;
  height: 100%;
}
.intro {
  width: 100%;
  height: 100px;
  background: darkblue;
}
</style>
