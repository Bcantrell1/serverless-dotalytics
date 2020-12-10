<template>
  <div class="has-background-light" id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar,
  },
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit("SET_LOGGED_IN", userData);
    }
  },
};
</script>

<style lang="scss"></style>
