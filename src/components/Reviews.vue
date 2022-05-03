<template>
  <div v-if="data.length">
      <ul>
          <li v-for="dat in data" :key="dat.author">
              {{dat.content}}
          </li>
      </ul>
  </div>
  <div v-else>  
    <span>We don`t have any reviews for this movie.</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        data: []
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "/reviews?api_key=983f70f0eead5adafaa71ab6de6776c8"
      )
      .then((data) => {
        console.log(data.data);
        this.data = data.data.results
      });
  },
};
</script>