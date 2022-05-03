<template>
  <Header />
  <router-link to="/home">&#129044; Go back</router-link>
  <div class="flex">
    <div v-if="film.poster">
      <img :src="'https://image.tmdb.org/t/p/w300' + film.poster" alt="" />
    </div>
    <div class="w-screen h-max flex flex-col justify-around p-10">
      <h1 class="font-bold text-2xl">{{ film.name }}</h1>
      <span class="font-medium">User Score: {{ film.userScore }}</span>
      <span class="text-lg font-bold">Overview</span>
      <span class="font-medium">{{ film.overview }}</span>
      <span class="text-base font-bold">Genres</span>
      <div class="flex">
        <span class="font-medium pr-2" v-for="gen in film.genres" :key="gen">{{
          gen.name
        }}</span>
      </div>
    </div>
  </div>
  <br>
  <hr>
  <span>Additional information </span>
  <br>
  <span @click="isCast = !isCast" class="text-xl pl-5 cursor-pointer">Cast</span> <br>
  <span @click="isReview = !isReview" class="text-xl pl-5 cursor-pointer">Reviews</span>
  <hr>
  <Cast v-if="isCast"/>
  <Reviews v-if="isReview"/>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Cast from "./Cast.vue";
import Reviews from "./Reviews.vue";
export default {
  data() {
    return {
      isCast: false,
      isReview: false,
      film: {
        poster: "",
        name: "",
        userScore: 0,
        overview: "",
        genres: [],
      },
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "?api_key=983f70f0eead5adafaa71ab6de6776c8"
      )
      .then((elem) => {
        this.film.poster = elem.data.poster_path;
        (this.film.name = elem.data.title),
          (this.film.userScore = elem.data.vote_average),
          (this.film.overview = elem.data.overview);
        this.film.genres = elem.data.genres;
      });
  },
  components: { Header, Cast, Reviews },
};
</script>