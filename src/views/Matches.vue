<template>
  <div>
    <!-- Loading Display -->
    <div v-if="matchInfo.loading">
      <progress
        class="progress is-large is-danger"
        value="70"
        max="100"
      ></progress>
    </div>

    <!-- Main Content after loading -->
    <div v-if="!matchInfo.loading" class="container">
      <!-- Team player's data -->
      <section class="columns">
        <!-- Radiant Players -->
        <div class="column">
          <div class="hero is-success ">
            <div class="hero-body ">
              <div class="container ">
                <p
                  class="title has-text-centered pulse"
                  v-if="matchInfo.data.players[0].radiant_win == true"
                >
                  Radiant
                </p>
                <p class="title has-text-centered" v-else>Radiant</p>
              </div>
            </div>
          </div>
          <div
            v-for="players in matchInfo.data.players"
            :key="players.account_id"
          >
            <div v-if="players.isRadiant">
              <div
                class="card m-3 card-height has-background-primary has-text-light"
              >
                <div class="content has-text-centered ">
                  <p class="is-size-5" v-if="players.account_id != null">
                    {{ players.personaname }}
                  </p>
                  <p class="is-size-5" v-else>No Account Id</p>
                </div>
                <!-- Player Hero -->
                <div class="content m-3">
                  <figure class="avatar">
                    <div class="rad">
                      <img :src="convertIdToImage(players.hero_id, heros)" />
                    </div>
                  </figure>
                </div>

                <!-- Player Game Info -->
                <div>
                  <p>Kills: {{ players.kills }}</p>
                  <p>Deaths: {{ players.deaths }}</p>
                  <p>Assists: {{ players.assists }}</p>
                </div>

                <!-- Player Items -->
                <div class="is-flex is-justify-content-space-between">
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_0, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_1, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_2, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_3, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_4, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_5, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_neutral, items)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div></div>
            </div>
          </div>
        </div>

        <!-- Dire Players -->
        <div class="column ">
          <div class="hero is-danger">
            <div class="hero-body">
              <div class="container">
                <p
                  class="title has-text-centered pulse"
                  v-if="matchInfo.data.players[0].radiant_win != true"
                >
                  Dire
                </p>
                <p class="title has-text-centered" v-else>Dire</p>
              </div>
            </div>
          </div>

          <div
            v-for="players in matchInfo.data.players"
            :key="players.account_id"
          >
            <div v-if="!players.isRadiant">
              <div
                class="card m-3 card-height has-background-primary has-text-light"
              >
                <div class="content has-text-centered">
                  <p class="is-size-5" v-if="players.account_id != null">
                    {{ players.personaname }}
                  </p>
                  <p class="is-size-5" v-else>No Account Id</p>
                </div>
                <!-- Player Hero -->
                <div class="content m-3">
                  <figure class="avatar">
                    <div class="dire">
                      <img :src="convertIdToImage(players.hero_id, heros)" />
                    </div>
                  </figure>
                </div>

                <!-- Player Game Info -->
                <div>
                  <p>Kills: {{ players.kills }}</p>
                  <p>Deaths: {{ players.deaths }}</p>
                  <p>Assists: {{ players.assists }}</p>
                </div>

                <!-- Player Items -->
                <div class="is-flex is-justify-content-space-between">
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_0, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_1, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_2, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_3, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_4, items)"
                    />
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_5, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items"
                      :src="convertIdToImage(players.item_neutral, items)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import makeAPICall from "../hooks/makeAPICall";
import { computed } from "vue";
import { useRoute } from "vue-router";
import json from "../assets/constants/apiUrls.json";
import heros from "../assets/constants/hero_names.json";
import items from "../assets/constants/items.json";

function convertIdToImage(id, list) {
  let entries = Object.entries(list[0]);
  for (let i = 0; i < entries.length; i++) {
    if (id == entries[i][1].id) {
      return entries[i][1].img;
    }
  }
}

export default {
  setup() {
    const route = useRoute();
    const matchId = route.params.id;
    const matchesCall = makeAPICall(matchId, json.matches);
    const matchInfo = computed(() => matchesCall);

    return {
      matchInfo,
      route,
      items,
      heros,
      convertIdToImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pulse {
  animation: makePulse 2s infinite;
}

.card-height {
  height: 27em;
}

//Item icons
.items {
  border-radius: 10px;
  margin: 2px;
  width: 6em;
}

//Hero Image Rad and Dire
.avatar {
  .dire {
    img {
      padding: 5px;
      background: rgb(110, 20, 20);
      border-radius: 20%;
      -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
    }
  }

  .rad {
    img {
      padding: 5px;
      background: green;
      border-radius: 20%;
      -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
    }
  }
}

@keyframes makePulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.5);
    box-shadow: 0 0 0 150px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
