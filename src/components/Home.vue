<template>
  <div>
    <Header />
    <h1 class="text-4xl pt-10 pb-5">Trending today</h1>
    <Films :films="trendingList"/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Films from "./Films.vue";
export default {
  data() {
    return {
      trendingList: [],
    };
  },
  components: {
    Header,
    Films
},
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=983f70f0eead5adafaa71ab6de6776c8"
      )
      .then((data) => {
        console.log(data);
        data.data.results.forEach((element) => {
          this.trendingList.push({
            title: element.original_title,
            id: element.id,
          });
        });
        console.log(this.trendingList);
      });
  },
};
</script>