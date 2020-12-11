<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="login">
        <div class="field">
          <div class="control">
            <input
              placeholder="Your Steam Id"
              class="input is-medium is-rounded"
              v-model="id"
              required
            />
          </div>
        </div>
        <br />
        <button
          class="button is-block is-fullwidth is-primary is-medium is-rounded"
          @click="login(id)"
        >
          Login
        </button>
      </div>
    </div>
  </section>
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

<style scoped lang="scss">
.hero-body {
  justify-content: center;
}

.login {
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
}

a {
  font-weight: 600;
}
</style>
