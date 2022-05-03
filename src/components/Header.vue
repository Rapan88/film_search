<template>
  <div class="w-screen h-14 shadow-2xl border flex">
    <div class="pt-2 text-2xl pl-8">
      <router-link to="/home" active-class="act">Home</router-link>
    </div>
    <div class="pt-2 text-2xl pl-8">
      <router-link to="/movies" active-class="act">Movies</router-link>
    </div>
  </div>
</template>

<style>
.act {
  color: rgb(146, 43, 43);
}
</style>