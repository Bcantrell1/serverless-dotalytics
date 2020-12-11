<template>
  <nav
    class="navbar has-background-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <img src="../assets/images/dota_nav.svg" />

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
        <router-link class="navbar-item" v-if="isLoggedIn" to="/dashboard">
          Dashboard
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="m-2">
          <div class="buttons">
            <router-link class="button is-light" v-if="!isLoggedIn" to="/login"
              >Login</router-link
            >
            <button
              class="button is-primary"
              v-if="isLoggedIn"
              @click="logOut"
              to="/"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { authComputed } from "../store/helpers";

document.addEventListener("DOMContentLoaded", function() {
  let $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

export default {
  computed: {
    ...authComputed,
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-item {
  background-color: #21262d;
}
.navbar-item:hover {
  color: #ed7899;
  background-color: #0d1117;
}
.navbar-item:focus {
  border-style: inset;
  color: #ed7899;
  border-color: #ed7899;
  background-color: #0d1117;
}

router-link {
  background-color: #21262d;
}
</style>
