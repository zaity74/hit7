<template>
  <div>
    <h1>{{ musique.title }}</h1>
    <img :src="musique.image" alt="" />
      <h1>{{ musique.artist }}</h1>
      <p>{{ musique.genre}}</p>
      <p>{{ musique.bpm }}</p>
      <p>{{ musique.duree }}</p>
      <p>{{ musique.prix }}</p>
      <button @click="playAudio(musique.songmp4)">Play audio</button>
      <button @click="pauseAudio(musique.songmp4)">Pause audio</button>
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
    let musique;
    try {
      musique = await $content("musique", params.slug).fetch();
    } catch (e) {
      error({ message: "Playlist not found" });
    }

    return {
      musique,
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