<template>
  <div>
    <h1>{{ playlist.title }}</h1>
    <h2>{{ playlist.bpm }}</h2>
    <img :src="playlist.image" alt="" />
    <div :key="index" v-for="(song, index) in playlist.musicplaylist">
      <h1>{{ song.artist }}</h1>
      <p>{{ song.songtitle }}</p>
      <p>{{ song.songmp4 }}</p>
      <button @click="playAudio(song.songmp4)">Play audio</button>
      <button @click="pauseAudio(song.songmp4)">Pause audio</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playingAudio: null,
    };
  },

  async asyncData({ $content, params, error }) {
    let playlist;
    try {
      playlist = await $content("playlist", params.slug).fetch();
    } catch (e) {
      error({ message: "Playlist not found" });
    }

    return {
      playlist,
    };
  },
  methods: {
    playAudio(song) {
      this.playingAudio = new Audio(song);
      this.playingAudio.play();
    },
    pauseAudio(song) {
      if (this.playingAudio) this.playingAudio.pause();
    },
  },
};
</script>

<style>
.section{
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex; 
    flex-direction: column;
    margin-top: 64px;
}
.section .produit-container{
    margin: 0;
    width: 100%;
    height: 600px;
    background-color: yellow;
    display: flex; 
    align-items: center; 
    justify-content: center;
}

</style>