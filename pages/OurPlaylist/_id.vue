<template>
  <div>
    <section class="section">
      <div class="produit-container">
          <img :src="Playlist.img"  width="200" alt="" class="image_music" >
          <p>{{Playlist.artiste}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      id: 0,
      Playlist: {},
      ourPlaylist: [
      {
        // Playlist 1
        id: 0,
        img : require('@/assets/image/rihanna.jpg'),
        titre : 'Playlist 1',
        bpm : '130 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
      {
        // Playlist 2
        id: 1,
        img : require('@/assets/image/rihanna2.jpg'),
        titre : 'Playlist 2',
        bpm : '128 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
      {
        // Playlist 3
        id: 2,
        img : require('@/assets/image/damso.jpg'),
        titre : 'Playlist 3',
        bpm : '130 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
      {
        // Playlist 4
        id: 3,
        img : require('@/assets/image/nekfeu.jpg'),
        titre : 'Playlist 4',
        bpm : '138 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
      {
        // Playlist 5
        id: 4,
        img : require('@/assets/image/plk.jpg'),
        titre : 'Playlist 5',
        bpm : '130 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
      {
        // Playlist 6
        id: 5,
        img : require('@/assets/image/rap.jpg'),
        titre : 'Playlist 6',
        bpm : '146 bpm',
        musicPlaylist: [
          //Musique dans la Playlist
          {
            id: 0,
            artiste : 'artiste 1',
            titre : 'titre 1',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            artiste : 'artiste 2',
            titre : 'titre 2',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            artiste : 'artiste 3',
            titre : 'titre 3',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]
      },
    ]
    }
  },
    mounted () {
    this.id = parseInt(this.$route.params.id, 0)
    this.Playlist = this.ourPlaylist.find(x => x.id === this.id)
    }
  }

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