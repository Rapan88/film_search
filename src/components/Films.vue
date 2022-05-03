<template>
  <div>
    <ul v-for="film in films" :key="film.id">
      <li class="ml-5">
        <router-link
          :to="{ name: 'MovieDetailsPage', params: { id: film.id } }"
          >{{ film.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default{
    props: ["films"]
}
</script>