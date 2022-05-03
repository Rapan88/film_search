<template>
  <div>
    <Header />
    <input v-model="text" type="text" class="w-2/12 h-7 mt-3 border" />
    <button class="border bg-gray-300 w-16" @click="searchFilms">Search</button>
    <Films :films="filmList"/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Films from "./Films.vue";
export default {
  data() {
    return {
      text: "",
      filmList: [],
    };
  },
  components: {
    Header,
    Films
},
  methods: {
    searchFilms() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie" +
            "?api_key=983f70f0eead5adafaa71ab6de6776c8&query=" +
            this.text
        )
        .then((elem) => {
          elem.data.results.forEach((element) => {
            this.filmList.push(element);
          });
          console.log(this.filmList);
        });
    },
  },
};
</script>