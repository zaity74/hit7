<template>
  <div>
  <!--  <li v-for="musique of musiques" :key="musique.slug">
        <h1>{{ musique.title }}</h1>
        <img :src="musique.image" alt="" />
        <h1>{{ musique.artist }}</h1>
        <p>{{ musique.genre}}</p>
        <p>{{ musique.bpm }}</p>
        <p>{{ musique.duree }}</p>
        <p>{{ musique.prix }}</p>
     </li> -->
    <div class="tracks">
        <div class="filter_tracks">
            <h2>FIlters</h2>
            <span @click="filterItems(musiques.filter(i))"> Tous les genres</span>
        </div>
        <h2 class="title_tracks">Find what you love</h2>
        <div class="gradiant_tracks">

          
        </div>
        <div class="tracks_box">
            <div class="songs" v-for="musique in musiques" :key="musique.id">
                <p @click="playAudio(musique.songmp4) " class="play" >'Play'</p>
                <p @click="pauseAudio(musique.songmp4) " class="play" >'Pause'</p>
                <span class="contenu_image">
                <img :src="musique.image"  alt="" class="image_song" />
                </span>
                <p class="artiste">{{musique.artiste}}</p>
                <p class="titre">{{musique.title}}</p>
                <p class="bpm">{{musique.bpm}}</p>
                <p class="bpm">{{musique.genre}}</p>
                <p class="duree">{{musique.duree}}</p>
                <img class="like" src="@/assets/image/heart.png" alt="like" />
                <!-- Au Hover changer le texte -->
                <p class="prix">
                {{musique.prix}}
                </p>
        </div>
        </div>
    </div>
      <!--<NuxtLink :to="musique.slug">{{ musique.title }}</NuxtLink>
      <NuxtLink :to="musique.slug">{{ musique.bpm}}</NuxtLink>
      <NuxtLink :to="musique.slug">{{ musique.image}}</NuxtLink> -->
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
   data: () => {
       return{
           newAction: []
       }
   },
    mounted(){

        this.musiques.sort(function (a,b){
        if (a.artiste > b.artiste) {
        return -1
        }else if (b.artiste > a.artiste) {
        return 1
        }else {
        return 0
        }
        })
    },
    methods: {
    playAudio(song) {
    this.playingAudio = new Audio(song);
    this.playingAudio.play();

    },
        pauseAudio(song) {
        if (this.playingAudio) this.playingAudio.pause();
        },
        filterItems () {
         // console.log(this.musiques) Il m'affiche cette valeur//
         this.newAction = this.musiques.genre
         console.log(this.newAction)
        },

    }
};
</script>
<style>
.tracks{
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    background-color: #F7FFFF;
    display: flex; 
    flex-direction: column; 
}
.tracks .filter_tracks{
    width: 85%;
    background-color: white;
    padding: 20px;
    margin: auto;
}
.tracks .tracks_box{
    width: 95%;
    height: 390px;
    display: flex;
    margin: auto;
    flex-direction: column;
    row-gap: 8px;
   /* margin-left: 120px;*/
   /* margin-top: 40px;*/
    overflow-y: scroll;
  }
  .tracks  .title_tracks{
    font-family: 'Poppins';
    color: #535353;
    padding-top: 40px;
    padding-bottom: 90px;
    font-weight: 600;
    padding-left: 120px;
    font-size: 25px;
    z-index: 4;
    text-transform: uppercase;
  }
    .tracks .gradiant_tracks{
    width: 60px;
    height: 20px;
    margin-left: 90px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -110px;
    margin-bottom: 80px;
    z-index: 2;
  }
    .tracks_box::-webkit-scrollbar{
      width: 10px;
    }

    .tracks_box::-webkit-scrollbar-track{
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    }
    .tracks_box::-webkit-scrollbar-thumb{
    background-color: rgb(226, 226, 226);
    border-radius: 10px;
    }
    .tracks_box::-webkit-scrollbar-thumb:hover{
    background-color: rgb(207, 207, 207);
    border-radius: 10px;
    }
     .tracks_box::-webkit-scrollbar-thumb:active{
    background-color: rgb(218, 218, 218);
    border-radius: 10px;
    }
     .tracks .tracks_box .songs{
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
.tracks .tracks_box .songs:hover{
      background-color: rgb(224, 224, 224);

    /*background-color: rgb(255, 255, 255);*/
  }
   .tracks .tracks_box .songs .play{
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    cursor: pointer;
    padding-left: 20px;
    /*background-color: rgb(255, 255, 255);*/
  }
.tracks .tracks_box .songs .play:hover{
    color: #3adaa9;
    /*background-color: rgb(255, 255, 255);*/
  }
  .tracks .tracks_box .songs .contenu_image{
      display: flex;
      /*flex-grow: 1; */
      margin-left: 1.8%;
      width: 60px;
      height: 60px;
      background-color: red;
      border-radius: 6px;

    /*background-color: rgb(255, 255, 255);*/
  }
  .tracks .tracks_box .songs .contenu_image img{
    max-width: 100%;
    width: 100%;
    max-height: 60px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
     border-radius: 6px;
    }
    .tracks .tracks_box .songs .titre{
    padding-left: 0px !important;
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
    }
     .tracks .tracks_box .songs .artiste{
    /*padding-left: 80px;*/
    color: #524F4F;
    font-weight: 800;
    }
      .tracks .tracks_box .songs .bpm{
    padding-left: 10px;
    color: #524F4F;
    font-weight: 600;
    }
     .tracks .tracks_box .songs .duree{
    padding-left: 150px;
    color: #524F4F;
    font-weight: 800;
    }
     .tracks .tracks_box .songs .like{
    padding-left: 80px;
    cursor: pointer;
    }
     .tracks .tracks_box .songs .prix{
    width: 80px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #66dedd;
    color: white;
    border-radius: 4px;
    transition: 0.6s ease-in-out;
    margin-left: 50px;
    }
       .tracks .tracks_box .songs .prix:hover{
    background-color: #47afaf;

    }
</style>