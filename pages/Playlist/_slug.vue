<template>
  <div>
    <section>

      <!-- 1er bloc -->
      <div class="playlist_player">

        <!-- mettre en display flex -->

        <div class="info_music">

          <!-- mettre en flex-direction : column -->

          <h3>Vous écoutez : </h3>
          <div class="music_desc">
            <!-- mettre tout en display flex -->
              <p @click="playNewAudio() " class="play" >Play</p>
              <p @click="pauseAudio() " class="play" >Pause</p>
              <h1 class="titre_playlistNew">{{ playlist.title }}</h1>
          </div>
        </div>

        <div class="content_img">
            <img :src="playlist.image" alt="" />
        </div>
        <div class="round"></div>
        <div class="round1"></div>

        <!-- à mettre en position absolute; z-index: 1 -->
        <div class="yellow_bloc"></div>
      </div>

      <!-- Second Bloc -->
      <div class="list_song">
        <div class="songPlaylist" :key="index" v-for="(song, index) in playlist.musicplaylist">
          <div class="contenu_imgSong">
            <img :src="playlist.image" alt="" />
          </div>
          <h1 class="artiste">{{ song.artist }}</h1>
          <p class="titre">{{ song.songtitle }}</p>
          <h2 class="bpm">{{ playlist.bpm }}</h2>
          <button class="play" @click="playAudio(song.songmp4)">Play audio</button>
          <button class="play" @click="pauseAudio(song.songmp4)">Pause audio</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playingAudio: null,
      playNew : null,
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
    playNewAudio(){
      this.playNew = this.playlist.musicplaylist
      console.log(this.playNew.song)
    }
  },
};
</script>

<style>
section{
    width: 100%;
    display: flex; 
    flex-direction: column;
    row-gap: 10px;
}

/* 1er bloc */

section .playlist_player{
    margin: 0;
    width: 85%;
    height: 360px;
    background-color: #C4C4C4;
    display: flex;
    align-items: center;
    margin: 60px auto;
    position: relative;
}
section .playlist_player .info_music{
    margin: 0;
    width: 60%;
    height: 360px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}
section .playlist_player h3{
    font-family: 'Poppins';
    color: #848484;
    font-weight: 600;
    padding-left: 25px;
    padding-top: 25px;
    font-size: 22px;
    z-index: 4;
    text-transform: uppercase;
}
section .playlist_player .music_desc{
  display: flex;
  column-gap: 8px;
  padding-left: 25px;
}

section .playlist_player .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    /*background-color: rgb(255, 255, 255);*/
}
section .playlist_player .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    /*background-color: rgb(255, 255, 255);*/
}
section .playlist_player .play:hover{
    background-color: #298a8a;
    /*background-color: rgb(255, 255, 255);*/
}
section .playlist_player .titre_playlistNew{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    background-color: #30465A;
    padding: 8px;
    color: white;
    font-weight: 400;
}

section .playlist_player .content_img{
    width: 340px;
    height: 340px ;
    background-color: rgb(129, 239, 253);
    border-radius: 50%;
    margin-left: 120px;
    box-shadow: 2px 2px 12px -8px black;
    z-index: 1;
    
}
section .playlist_player .content_img img{
   max-width: 100%;
    width: 100%;
    max-height: 380px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    opacity: 0.9;
    /*transition: transform 1s;*/
    animation: 40s rolle infinite;
    
}
@keyframes rolle{
        100%{
            transform: rotate(1800deg)
        }
    }
section .playlist_player .round{
    width: 40px;
    height: 40px;
    background-color: #F3FF6C;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: 47%;
    right: 200px;
    opacity: 1;
    
}
section .playlist_player .round1{
    width: 120px;
    height: 120px;
    background-color: #e9e9e9;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    top: 35%;
    right: 160px;
    opacity: 0.4;
}

section .playlist_player .yellow_bloc{
    width: 240px;
    height: 100%;
    background-color: #F3FF6C;
    z-index: 0;
    position: absolute;
    right: 0;
    opacity: 1;
}

/* 2ème Bloc */
section .list_song{
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0px auto 40px ;

}
 section .list_song .songPlaylist{
    width: 90%;
    height: 70px;
    display: flex;
    align-items: center;
    column-gap: 25px;
    margin-left: 60px;
    border-bottom: 1px #d8d6d6 solid;
    transition: 0.2s ease-in-out;

    /*background-color: rgb(255, 255, 255);*/
  }
  section .list_song .songPlaylist .contenu_imgSong{
      display: flex;
      /*flex-grow: 1; */
      margin-left: 1.8%;
      width: 60px;
      height: 60px;
      background-color: red;
      border-radius: 6px;

    /*background-color: rgb(255, 255, 255);*/
  }
    section .list_song .songPlaylist .contenu_imgSong img{
         max-width: 100%;
    width: 100%;
    max-height: 60px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
     border-radius: 6px;

    /*background-color: rgb(255, 255, 255);*/
  }
  .songPlaylist .titre{
    padding-left: 0px !important;
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
    }
   .songPlaylist .artiste{
    /*padding-left: 80px;*/
    color: #524F4F;
    font-weight: 800;
    }
   .songPlaylist .bpm{
    padding-left: 10px;
    color: #524F4F;
    font-weight: 600;
    }
    .songPlaylist .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    color: white;
    font-weight: 400;
    }



</style>