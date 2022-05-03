<template>
  <div>
    <ul>
      <li v-for="cas in cast" :key="cas">
        <img
          :src="'https://image.tmdb.org/t/p/w92' + cas.profile_path"
          v-if="cas.profile_path"
          alt=""
          class="p-5"
        />
        <span v-if="cas.profile_path" class="p-5">{{ cas.name }}</span>
        <br>
        <span v-if="cas.profile_path" class="p-5">Character: {{cas.character}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cast: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "/credits?api_key=983f70f0eead5adafaa71ab6de6776c8"
      )
      .then((data) => {
        this.cast = data.data.cast;

        console.log(this.cast);
      });
  },
};
</script>