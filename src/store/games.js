import * as API from "../API/games";

import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [],
    filteredGames: [],
  }),
  getters: {
    getFilteredGames() {
      return this.filteredGames;
    },
  },
  actions: {
    async getGames() {
      const response = await API.getGames();

      this.games = response;
      this.searchGames("");
      this.sortGames('savings', 'bigger')
    },
    searchGames(inputText) {
      if (inputText === "") {
        this.filteredGames = this.games;
        return;
      }

      const games = this.games.filter((elm) => {
        return elm.internalName.includes(inputText.toUpperCase());
      });

      this.filteredGames = games;
    },
    sortGames(sortValue, classification) {
      function compareGames(a, b) {
        if (sortValue === "title") {
          if (a[sortValue] < b[sortValue]) {
            return -1;
          }
          if (a[sortValue] > b[sortValue]) {
            return 1;
          }
          return 0;
        } else {
          return Number(a[sortValue]) - Number(b[sortValue]);
        }
      }
      const sortResult = this.filteredGames.sort(compareGames);
      if (classification) {
        this.filteredGames = sortResult.reverse();
        return;
      }
      this.filteredGames = sortResult;
    },
  },
});
