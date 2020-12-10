<template>
  <div>
    <h2>Enter your steam Id to login</h2>
    <input v-model="id" />
    <button @click="login(id)">Sign In</button>
    <p>{{ id }}</p>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    login(steam) {
      this.$store.dispatch("loggedIn", {
        steamId: steam,
        JWT: "yupp",
      });
      this.redirect();
    },
    redirect() {
      router.push("/dashboard");
    },
  },
};
</script>

<style scoped lang="scss"></style>
