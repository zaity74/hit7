<template>
  <div>
    <li v-for="musique of musiques" :key="musique.slug">
      <NuxtLink :to="musique.slug">{{ musique.title }}</NuxtLink>
      <NuxtLink :to="musique.slug">{{ musique.bpm}}</NuxtLink>
      <NuxtLink :to="musique.slug">{{ musique.image}}</NuxtLink>
    </li> 
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const musiques = await $content("musique").fetch();

    return {
      musiques,
    };
  },
};
</script>