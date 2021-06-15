<template>
  <div class="home_box">
    <div>
      <div class="hero filter grayscale">
        <h1>Hello</h1>
      </div>
      <div class="blog ">
      <div class="catégories">
      <span @click="filterItems('all')"> Tous les genres</span>
      <span @click="filterItems('rnb')"> Rnb</span>
      <span @click="filterItems('rap')">Rap</span>
      </div>
        <div class="box_span">
          <span  v-for="item in items" :key="item.id">
            <img  :src="item.img "  width="200" alt="" class="image_music" >
            <p style="color: white;">{{item.tag}}</p>
          </span>
        </div>
      </div>
      <!-- Import from components
      <Logo /> 
      -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    filter : 'rap',
    items: [],
    musicItems: [
    {
    id: 0,
    tag: 'rnb',
    artiste:
      'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    img:
      'https://static.galerieslafayette.com/media/3004018/300401823050/G_300401823050_347_ZP_1.jpg',
    titre: 'MORGANNE BELLO',
    },
    {
    id: 1,
    tag: 'rnb',
    titre: 'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    artiste: 'Yo zaity',
    img:
      'https://images.pexels.com/photos/868306/pexels-photo-868306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
    id: 2,
    tag: 'rap',
    titre: 'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    artiste: 'Frederic Zai',
    img:
      'https://images.pexels.com/photos/5043586/pexels-photo-5043586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    ]
    }
  },
  mounted () {
  this.items = this.musicItems
  if (this.filter === 'rap') {
         this.items = this.musicItems.filter((i) => {
          return i.tag === this.filter
        })
  }
  },
  build:{
    assetsPublicPath:'/'
  },
  methods: {
   play(p){
      this.showMusic = true
      this.boxMusique = this.musique[p.id]
      var listenMusique = new Audio(this.boxMusique.song)
      if (listenMusique) {
        listenMusique.play()
      }else if(listenMusique){
        listenMusique.pause()
      }
     // var a = this.$refs.audioElm
     // a.play()
     //  var show = a.play()
     //  console.log(show)
      //this.myTrack.play()

     // var myTrack = new Audio(this.boxMusique.song)
      //document.body.appendChild(myTrack)
      //console.log(myTrack)
     // myTrack.play()
    },
    filterItems (filter) {
    if (filter === 'all') {
      this.items = this.musicItems
    } else {
      this.items = this.musicItems.filter((i) => {
        return i.tag === filter
      })
    }
    }
    /*filterItems(filter){
      if (filter === 'rap') {
           this.items = this.musicItems.filter((i) => {
          return i.tag === filter
        })
        
      }
    } */

  }

}

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home_box{
  width: 100%;
  min-height: 100vh;
  background-color: black;
}
.home_box .hero{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 64px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('~assets/image/wave.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  background-size: 100%;
}
.hero h1{
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 75px;
  opacity: 1;
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  -webkit-text-fill-color: transparent;
}

.home_box .blog{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-weight: 400;
  text-transform: uppercase;
}
 .catégories{
    width: 1530px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .catégories span{
    background-color: blue;
      margin-left: 20px;
      font-size: 16px;
      border: 2px #eee solid;
      border-radius: 8px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      padding: 0.4em;
      transition: all 0.3s ease-in-out;
    }
     span:hover{
        border: 1px black solid;
      }
@media all and (min-width: 830px) and (max-width: 4200px){
  /* ABOUT */
  .home_box .about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  }

  .home_box .about h2{
  padding-top: 8%;
  padding-left: 90px;
  font-size: 55px;
  }
  .home_box .about .description{
    font-size: 25px;
    padding-left: 90px;
  }
  .portfolio .box_span{
    display: flex;
    column-gap: 20px;
  }
  .portfolio span{
    width: 227px;
    background-color: rgb(163, 51, 51);
    cursor: pointer;
  }
  .portfolio span img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center center;
  }
}
@media all and (max-width: 830px){
  .home_box .about {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  }
  .home_box .about h2{
    padding-top: 12%;
    font-size: 35px;
    text-align: center;
  }
   .home_box .about .description{
  font-size: 25px;
  text-align: center;
  }

  .home_box .about .playlist_box{
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    height: auto;
  } 
  .home_box .about .playlist_box .principal_playlist{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    height: auto;
  }

  .home_box .about .playlist_box .principal_playlist .image_music{
    display: flex;
    /*flex-grow: 1; */
    padding-right: 1.8%;
    padding-left: 1.8%;
    padding-top: 1.8%;
    padding-bottom: 1.8%;
    width: 100%;
  }
  .home_box .about .playlist_box .principal_playlist .image_music img{
    max-width: 100%;
    max-height: 385.14px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .home_box .about .playlist_box .principal_playlist .music_description{
    padding-right: 0.8%;
    padding-left: 0.8%;
  }
  
  .home_box .about .select_music{
    width: 100%;
    height: auto;
    display: inline-flex;
    justify-content: flex-start;
    column-gap: 5px;
    overflow-x: hidden;
  }
    .home_box .about .select_music span{
    min-width: 127px;
    height: 120px;
    background-color: rgb(163, 51, 51);
  }
}

</style>