<template>
  <div>
    <h2>Logged In</h2>
    <p>{{ $store.state }}</p>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  created() {
    this.$store.dispatch("loggedIn", {
      steamId: this.$route.query.steamid,
      JWT: this.$route.query.JWT,
    });
    this.redirect();
  },
  methods: {
    redirect() {
      router.push("/dashboard");
    },
  },
};
</script>
