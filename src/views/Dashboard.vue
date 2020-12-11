<template>
  <div class="container">
    <br />
    <!-- Loading section -->
    <div v-if="profileInfo.loading && heroInfo.loading && matchInfo.loading">
      <progress
        class="progress is-large is-danger"
        value="70"
        max="100"
      ></progress>
    </div>
    <p v-if="profileInfo.error">{{ info.error }}</p>

    <!-- Main Content after loading -->
    <div v-if="!profileInfo.loading && !heroInfo.loading && !matchInfo.loading">
      <!-- Player Info Section -->
      <section>
        <div class="hero is-primary welcome is-small">
          <div class="hero-body">
            <div class="level">
              <img :src="profileInfo.data.profile.avatarmedium" />
              <p class="is-size-3">
                {{ profileInfo.data.profile.personaname }}
              </p>
              <p>
                MMR estimate : {{ profileInfo.data.mmr_estimate.estimate }}
                <br />
                Rank tier: {{ profileInfo.data.rank_tier }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Games: {{ wlInfo.data.win + wlInfo.data.lose }}
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Wins: {{ wlInfo.data.win }}</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Loses: {{ wlInfo.data.lose }}</p>
            </article>
          </div>
        </div>
      </section>
      <br />

      <br />
      <!-- Most Played Section -->
      <section>
        <div class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title has-text-centered">
                Most Played Heros
              </h1>
            </div>
          </div>
        </div>

        <br />

        <div class="columns is-multiline is-centered">
          <div
            v-for="hero in heroInfo.data.splice(0, 6)"
            :key="hero.hero_id"
            class="column is-4"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img
                    class="is-square"
                    :src="convertIdToImage(hero.hero_id, heros)"
                  />
                </figure>
              </div>
              <div class="block">
                <p>Games {{ hero.games }}</p>
                <p>Win {{ hero.win }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <!-- Recent Matches Section -->
      <section>
        <div class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title has-text-centered">
                Recent Matches
              </h1>
            </div>
          </div>
        </div>
        <br />
        <table
          class="table is-fullwidth is-hoverable has-background-dark has-text-light"
        >
          <thead>
            <tr class="is-size-5 has-background-light">
              <th>Match Id</th>
              <th><SwordCross></SwordCross></th>
              <th><EmoticonDead></EmoticonDead></th>
              <th><Handshake></Handshake></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="match in matchInfo.data" :key="match.data">
              <td>
                <router-link
                  class="has-text-link"
                  :to="'/matches/' + match.match_id"
                >
                  {{ match.match_id }}
                </router-link>
              </td>
              <td>{{ match.kills }}</td>
              <td>{{ match.deaths }}</td>
              <td>{{ match.assists }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import { SwordCross, EmoticonDead, CheckBold, Handshake } from "mdue";
import makeAPICall from "../hooks/makeAPICall";
import { computed } from "vue";
import store from "../store/index";
import json from "../assets/constants/apiUrls.json";
import heros from "../assets/constants/hero_names.json";

function convertIdToImage(id, list) {
  let entries = Object.entries(list[0]);
  for (let i = 0; i < entries.length; i++) {
    if (id == entries[i][1].id) {
      return entries[i][1].img;
    }
  }
}

export default {
  components: { SwordCross, EmoticonDead, CheckBold, Handshake },
  setup() {
    //Player info
    const playerCall = makeAPICall(store.state.accountId, json.player.data);
    const profileInfo = computed(() => playerCall);

    //Players Heros
    const heroCall = makeAPICall(store.state.accountId, json.player.heros);
    const heroInfo = computed(() => heroCall);

    //Recent Matches
    const matches = makeAPICall(store.state.accountId, json.player.recent);
    const matchInfo = computed(() => matches);

    //Win loss
    const winLoss = makeAPICall(store.state.accountId, json.player.winLoss);
    const wlInfo = computed(() => winLoss);

    return {
      profileInfo,
      heroInfo,
      matchInfo,
      wlInfo,
      heros,
      convertIdToImage,
    };
  },
};
</script>

<style lang="scss">
.info {
  min-height: 300px;
  max-height: 300px;
}
</style>
