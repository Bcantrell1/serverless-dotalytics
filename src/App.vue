<template>
  <div class="has-background-dark has-text-light" id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  components: {
    NavBar,
    Footer,
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

<style lang="scss">
body::-webkit-scrollbar {
  width: 17px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #0d1117; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #21262d; /* color of the scroll thumb */
  border-radius: 10px; /* roundness of the scroll thumb */
  border: 3px solid #ed7899; /* creates padding around scroll thumb */
}
</style>
