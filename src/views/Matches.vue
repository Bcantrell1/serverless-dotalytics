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
                      <img
                        :src="helper.convertIdToImage(players.hero_id, heros)"
                      />
                    </div>
                  </figure>
                </div>

                <!-- Player Game Info -->
                <div
                  class="is-flex m-3 is-size-5 is-justify-content-space-between"
                >
                  <div class="ml-5">
                    <p>Kills: {{ players.kills }}</p>
                    <p>Deaths: {{ players.deaths }}</p>
                    <p>Assists: {{ players.assists }}</p>
                  </div>
                  <div>
                    <p>GPM {{ players.gold_per_min }}</p>
                    <p>XPM {{ players.xp_per_min }}</p>
                  </div>
                  <div class="mr-5">
                    <p>Hero Dmg: {{ players.hero_damage }}</p>
                    <p>Tower Dmg: {{ players.tower_damage }}</p>
                    <p>Healing: {{ players.hero_healing }}</p>
                  </div>
                </div>

                <!-- Player Items -->
                <div class="is-flex  mx-5 is-justify-content-space-between">
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_0, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_1, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_2, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_3, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_4, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_5, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="
                        helper.convertIdToImage(players.item_neutral, items)
                      "
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
                      <img
                        :src="helper.convertIdToImage(players.hero_id, heros)"
                      />
                    </div>
                  </figure>
                </div>

                <!-- Player Game Info -->
                <div
                  class="is-flex m-3 is-size-5 is-justify-content-space-between"
                >
                  <div class="ml-5">
                    <p>Kills: {{ players.kills }}</p>
                    <p>Deaths: {{ players.deaths }}</p>
                    <p>Assists: {{ players.assists }}</p>
                  </div>
                  <div>
                    <p>GPM {{ players.gold_per_min }}</p>
                    <p>XPM {{ players.xp_per_min }}</p>
                  </div>
                  <div class="mr-5">
                    <p>Hero Dmg: {{ players.hero_damage }}</p>
                    <p>Tower Dmg: {{ players.tower_damage }}</p>
                    <p>Healing: {{ players.hero_healing }}</p>
                  </div>
                </div>

                <!-- Player Items -->
                <div class="is-flex  mx-5 is-justify-content-space-between">
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_0, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_1, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_2, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_3, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_4, items)"
                    />
                    <img
                      class="items m-2"
                      :src="helper.convertIdToImage(players.item_5, items)"
                    />
                  </div>
                  <div class="image">
                    <img
                      class="items m-2"
                      :src="
                        helper.convertIdToImage(players.item_neutral, items)
                      "
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
  <div class="is-hidden">
    {{ APIChartData() }}
  </div>
  <div class="container">
    <canvas id="game-chart"></canvas>
  </div>
</template>

<script>
import makeAPICall from "../hooks/makeAPICall";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import json from "../assets/constants/apiUrls.json";
import heros from "../assets/constants/hero_names.json";
import items from "../assets/constants/items.json";
import Chart from "chart.js";
import ChartData from "../helpers/chart-data";
import helper from "../helpers/functions";

export default {
  setup() {
    const route = useRoute();
    const matchId = route.params.id;
    const matchesCall = makeAPICall(matchId, json.matches);
    const matchInfo = computed(() => matchesCall);

    function APIChartData() {
      let chartObject = {
        type: "line",
        data: {
          //Minutes in game
          labels: [],
          datasets: [
            {
              // GPM line graph
              label: "GPM",
              data: [],
              backgroundColor: [
                "rgba(54,73,93,.5)", // Blue
              ],
              borderColor: ["#36495d"],
              borderWidth: 3,
            },
            {
              // XPM line graph
              label: "XPM",
              data: [],
              backgroundColor: [
                "rgba(71, 183,132,.5)", // Green
              ],
              borderColor: ["#47b784"],
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      };
      let matchData = JSON.parse(JSON.stringify(matchInfo));
      ///Minutes to labels
      for (let i = 0; i < matchData._value.data.radiant_gold_adv.length; i++) {
        chartObject.data.labels.push(i);
        chartObject.data.datasets[0].data.push(
          matchData._value.data.radiant_gold_adv[i]
        );
        chartObject.data.datasets[1].data.push(
          matchData._value.data.radiant_xp_adv[i]
        );
      }
      return chartObject;
    }

    onMounted(() => helper.createChart("game-chart", APIChartData()));

    return {
      helper,
      matchInfo,
      route,
      items,
      heros,
      APIChartData,
    };
  },
};
</script>

<style lang="scss" scoped>
.pulse {
  animation: makePulse 2s infinite;
}

.card-height {
  height: 29em;
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
