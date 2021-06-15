<template>
  <div>
    <li v-for="playlist of playlists" :key="playlist.slug">
      <NuxtLink :to="playlist.slug">{{ playlist.title }}</NuxtLink>
      <NuxtLink :to="playlist.slug">{{ playlist.bpm}}</NuxtLink>
      <NuxtLink :to="playlist.slug">{{ playlist.image}}</NuxtLink>
    </li>
    
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const playlists = await $content("playlist").fetch();

    return {
      playlists,
    };
  },
};
</script>