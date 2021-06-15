<template>
  <div class="home_box">
    <div>
      <div id ="lightbox" :class="{ 'ok' : showallbro }" @click="hideLightbox()">
      <div class="image_music" >
      <img :src="box.img"  alt="" class="image_music"  >
      </div>
      <div class="box_span">
      <span @click="changeMusic(item)"  v-for="item in items" :key="item.id">
          <img :src="item.img"  width="200" alt="" class="image_music" >
      </span>
      </div>
      <svg @click="move()" class="arrow_next" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64"
      viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#49a0ae"></path><path d="M120.06406,79.88594c-12.63125,-12.63125 -25.2625,-25.2625 -37.89375,-37.89375c-9.00313,-9.00313 -22.91094,5.00547 -13.87422,14.04219c10.27969,10.27969 20.59297,20.55937 30.87266,30.87266c-10.31328,10.31328 -20.62656,20.62656 -30.93984,30.93984c-9.00313,9.00312 5.00547,22.91094 14.04219,13.87422c12.63125,-12.63125 25.2625,-25.2625 37.89375,-37.89375c3.7625,-3.79609 3.66172,-10.17891 -0.10078,-13.94141z" fill="#ffffff"></path></g></g>
      </svg>
      </div>
      <!-- first section : Trending -->
       <div class="about">
        <h2 class="uppercase font-bold ">Trending songs</h2>
        <div class="gradiant_shape">

          
        </div>
        <div class="playlist_box">
         <div class="songs" v-for="p in musique" :key="p.id">
           <p @click.prevent="p.isPlaying ? pause(p) : play(p)" class="play" >{{ p.isPlaying ? 'Pause' : 'Play' }}</p>
           <span class="contenu_image">
             <img :src="p.img"  alt="" class="image_song" />
           </span>
           <p class="artiste">{{p.artiste}}</p>
           <p class="titre">{{p.titre}}</p>
           <p class="bpm">{{p.bpm}}</p>
           <p class="duree">{{p.duree}}</p>
           <img class="like" src="@/assets/image/heart.png" alt="like" />
           <!-- Au Hover changer le texte -->
           <p @mouseover="mouseover(p)" @mouseleave="mouseleave(p)" class="prix">
             {{p.prix}}
            </p>
         </div>
        </div>
      </div>

      <!--  Moiveautés-->
       <div class="nouveau">
        <h2 class="uppercase font-bold ">Nouveautés</h2>
        <div class="gradiant_shape">

        </div>
        <div class="nouveaute_box">
        <button @click="leftMove()"  class="btnR">left</button>
        <button @click="rightMove()" class="btnL">right</button>
          <div class="slide_box" v-bind:style="{'margin-left': (this.index) + 'px','transition': (this.transition)}">
            <div class="news_card" v-for="p in musique" :key="p.id">
              <div class="image_player">
                  <span class="contenu_image">
                    <img :src="p.img"  alt="" class="image_song" />
                  </span>
                  <div class="player_song">
                    <p @click.prevent="p.isPlaying ? pause(p) : play(p)" class="play" >{{ p.isPlaying ? 'Pause' : 'Play' }} </p>
                  </div>
              </div>
              <p class="titre">{{p.titre}}</p>
              <p class="artiste">{{p.artiste}}</p>
            </div>
          </div>
        </div>
        <a class="show_more" href="/tracks">Voir plus</a>
      </div>

      <!-- Playlist -->
       <div class="ourPlaylist">
        <h2 class="uppercase font-bold ">Our Playlist</h2>
        <div class="gradiant_shape">
        </div>
        <div class="ourPlaylist_box">
          <button @click="leftMove()"  class="btnR">left</button>
          <button @click="rightMove()" class="btnL">right</button>
          <div class="slidePlaylist_box" v-bind:style="{'margin-left': (this.index) + 'px','transition': (this.transition)}">
            <div class="news_card" v-for="p in playlists" :key="p.id">
              <div class="image_player">
                  <span class="contenu_image">
                    <img :src="p.image"  alt="" class="image_song" />
                  </span>
                <!-- <div class="player_song">
                    <p @click.prevent="p.isPlaying ? pause(p) : play(p)" class="play" >{{ p.isPlaying ? 'Pause' : 'Play' }} </p>
                  </div>-->
              </div>
              <n-link :to="'/Playlist/' + p.slug">
                <p class="titre">{{p.title}}</p>
              </n-link>
              <p class="artiste">{{p.bpm}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Les beatmakers du moment -->
       <div class="beatmaker">
        <h2 class="uppercase font-bold ">Les beatmakers du moment</h2>
        <div class="gradiant_shape">
        </div>
        <div class="beatmaker_box">
          <button @click="leftMove()"  class="btnR">left</button>
          <button @click="rightMove()" class="btnL">right</button>
          <div class="slideBeatmaker_box" v-bind:style="{'margin-left': (this.index) + 'px','transition': (this.transition)}">
            <div class="beat_card" v-for="p in membre" :key="p.id">
              <div class="image_player">
                  <span class="contenu_image">
                    <img :src="p.img"  alt="" class="image_song" />
                  </span>
                  <div class="round1"></div>
                  <div class="round"></div>
                  <div class="player_song">
                    <p @click.prevent="p.isPlaying ? pause(p) : play(p)" class="play" >Découvrir</p>
                  </div>
              </div>
              <n-link :to="'/OurPlaylist/' + p.id">
                <p class="titre">{{p.name}}</p>
              </n-link>
              <p class="artiste">{{p.ville}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Genres -->
      <div class="genre">
        <h2 class="uppercase font-bold ">Genres</h2>
        <div class="gradiant_shape">
        </div>
          <div class="card_jaune"></div>
          <div class="card_jaune1"></div>
        <div class="genre_box">
          <!-- Mettre en position relative genre_image pour mettre titre au centre -->
          <span class="genre_image">
            <img src="@/assets/image/g1.jpg"  width="200" alt="" class="image_music" >
            <n-link :to="'/Genre/_rap'" class="lien">
              <h3 style="color: white;">HipHop</h3>
            </n-link>
          </span>
          <span class="genre_image">
            <img src="@/assets/image/g2.jpg"  width="200" alt="" class="image_music" >
            <n-link :to="'/Genre/_rap'" class="lien">
              <h3 style="color: white;">Trap</h3>
            </n-link>
          </span >
            <span class="genre_image">
            <img src="@/assets/image/g4.jpg"  width="200" alt="" class="image_music" >
            <n-link :to="'/Genre/_rap'" class="lien">
              <h3 style="color: white;">Rnb</h3>
            </n-link>
          </span>
            <span class="genre_image">
            <img src="@/assets/image/rap.jpg"  width="200" alt="" class="image_music" >
            <n-link :to="'/Genre/_rap'" class="lien">
              <h3 style="color: white;">Chill</h3>
            </n-link>
          </span>
            <span class="genre_image">
            <img src="@/assets/image/rap.jpg"  width="200" alt="" class="image_music" >
            <n-link :to="'/Genre/_rap'" class="lien">
              <h3 style="color: white;">Grime</h3>
            </n-link>
          </span>
        </div>
      </div>

  <!-- Others -->

      <div class="news">
        <h2 class="uppercase font-bold ">News</h2>
        <div class="gradiant_shape">
        </div>
        <div class="news_box">
          <!-- Mettre en flex-direction : column -->
           <div  class="principal_news">
            <div class="image_music" >
              <!-- <img src="~/assets/image/goldDoor.jpg" class="image_music" > -->
              <img :src="box.img"  alt="" class="image_music"  >
            </div>
            <div class="music_description">
            <p class="text-justify py-0.5 titreText">
               {{box.titre}}
            </p>
            <p class="text-justify py-0.5">
               {{box.contenu}}
            </p>
            <p class="text-justify py-0.5">
               {{box.date}}
            </p>
            <p class="text-justify py-0.5">
               {{box.auteur}}
            </p>
            </div>
          </div>
          <div class="select_news">
             <div class="news_card" v-for="p in actualite.slice(0,4)" :key="p.id">
                <span class="news_image" @click="changeMusic(p)">
                    <img :src="p.img"  alt="" class="image_song" />
                </span>
              <p class="titre">{{p.titre}}</p>
              <p class="titre">{{p.date}}</p>
            </div>
            
          </div>
        </div>
        <a class="show_more" href="/news">Voir plus</a>
        
      </div>

      <!-- Barre player -->
      <div class="skill" id="skilout">
        <div id="music_content" style="background-color: red" :class="{ 'active' : showMusic }" >
        <!--  <audio id="audio" controls ref="audioElm" :src="boxMusique.song"></audio> -->
          <p style="color: white;">{{musique.titre}}</p>
        </div>
      </div>


      <div class="portfolio">
        <h2 class="uppercase font-bold ">Portfolio</h2>
        <p class="description">Notre sélection de titres</p>
        <div class="box_span">
          <span  v-for="item in items" :key="item.id">
            <img :src="item.img"  width="200" alt="" class="image_music" >
            <n-link :to="'/Playlist/' + item.id">
              <h3>Listen musique</h3>
            </n-link>
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
   head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
    async asyncData({ $content }) {
    const playlists = await $content("playlist").fetch();

    return {
      playlists,
    };
  },
  data: () => {
    return {
    index: 0,
    transition: 'transform 0.6s ease',
    boxMusique: [],
          actualite: [
          {
              id: 0,
              titre: 'Blog 1',
              auteur: 'auteur 1',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              img : require('@/assets/image/actu1.jpg'),
              date: '01/05/2021'
          },
           {
              id: 1,
              titre: 'blog 2',
              auteur: 'auteur 2',
                            contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '08/05/2021',
              img : require('@/assets/image/actu2.jpg')
          },
           {
              id: 2,
              titre: 'blog 3',
              auteur: 'auteur3',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '06/05/2021',
              img : require('@/assets/image/actu4.jpg')
              
          },
           {
              id: 3,
              titre: 'blog 4',
              auteur: 'euteur4',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '02/05/2021',
              img : require('@/assets/image/actu3.jpg'),
          },
            {
              id: 4,
              titre: 'blog 5',
              auteur: 'euteur4',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '02/05/2021',
               img : require('@/assets/image/actu5.jpg')
          },
            {
              id: 5,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '02/05/2021'
          },
           {
              id: 6,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet placerat massa sit amet placerat. Duis volutpat facilisis nulla ut hendrerit. Donec sed turpis cursus, placerat felis in, suscipit leo. Aliquam gravida turpis sit amet enim tincidunt iaculis. Aenean placerat bibendum ultrices. Nulla hendrerit mattis erat, non porta ex mollis sit amet. Maecenas mollis aliquet justo.",
              date: '02/05/2021'
          },
           {
              id: 7,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
           {
              id: 8,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
           {
              id: 9,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
      ],

    membre: [
      {
        id: 0,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art1.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 1,
        name: 'Jay00',
        ville : 'Miami',
        age : '25 ans',
        mail : 'jay00@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art2.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 2,
        name: 'namiDoo',
        ville : 'Japon',
        age : '22 ans',
        mail : 'nami@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/yo.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 3,
        name: 'cheffery',
        ville : 'Denver',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 4,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 5,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 6,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 7,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 8,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 9,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 10,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 11,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 12,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 13,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 14,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      {
        id: 15,
        name: 'Erico Dailler',
        ville : 'San Francisco',
        age : '28 ans',
        mail : 'ericodailler@gmail.com',
        instagram : 'https://www.instagram.com/jahlilbeats/',
        img : require('@/assets/image/art4.jpg'),
        tracks: [
          {
            id: 0,
            titre : 'titre 1',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 1,
            titre : 'titre 2',
            bpm : '120 bpm',
            tag : 'afro trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 2,
            titre : 'titre 3',
            bpm : '120 bpm',
            tag : 'trap',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 3,
            titre : 'titre 4',
            bpm : '120 bpm',
            tag : 'rnb',
            song: require('@/assets/musique/song1$.mp4'),
          },
          {
            id: 4,
            titre : 'titre 5',
            bpm : '130 bpm',
            tag : 'chill',
            song: require('@/assets/musique/song1$.mp4'),
          }
        ]

      },
      
    ],

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
    ],
    
    musique: [
    {
      id: 0,
      artiste: 'artiste 1',
      img: require('@/assets/image/rihanna.jpg'),
      titre: 'titre 1',
      song: require('@/assets/musique/song1$.mp4'),
      isPlaying : false,
      duree : '04:30',
      prix: '24 €',
      bpm: '130 BPM',
      genre : 'hip hop'
     // file : new Audio('@/assets/musique/song1$.mp4')
    },
    {
    id: 1,
    titre: 'titre 2',
    artiste: 'artiste2',
    img: require('@/assets/image/damso.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '110 BPM',
     genre : 'hip hop'
    },
    {
    id: 2,
    titre: 'titre 3',
    artiste: 'artiste 3',
    img: require('@/assets/image/rap.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
     bpm: '110 BPM',
      genre : 'trap'
    },
    {
    id: 3,
    titre: 'titre 4',
    artiste: 'artiste 4',
    img: require('@/assets/image/headerPicture.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '145 BPM',
     genre : 'trap'
    },
    {
    id: 4,
    titre: 'titre 5',
    artiste: 'artiste 5',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '145 BPM',
     genre : 'rnb'
    },
      {
    id: 5,
    titre: 'titre 6',
    artiste: 'artiste 6',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '145 BPM',
     genre : 'rnb'
    },
      {
    id: 6,
    titre: 'titre 7',
    artiste: 'artiste 7',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
     bpm: '145 BPM',
      genre : 'chill'
    },
      {
    id: 7,
    titre: 'titre 8',
    artiste: 'artiste 8',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '145 BPM',
     genre : 'chill'
    
    },
    {
    id: 8,
    titre: 'titre 9',
    artiste: 'artiste 9',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '95 BPM',
     genre : 'Grime'
    
    },
          {
    id: 9,
    titre: 'titre 10',
    artiste: 'artiste 10',
    img: require('@/assets/image/plk.jpg'),
    song: require('@/assets/musique/yo.mp4'),
    isPlaying : false,
    duree : '04:30',
    prix: '24 €',
    bpm: '95 BPM',
     genre : 'Grime'
    
    }
    
    ],
    box: [
      {
    id: 0,
    src: require('~/assets/image/goldDoor.jpg'),
    artiste:
      'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    img:
      'https://static.galerieslafayette.com/media/3004018/300401823050/G_300401823050_347_ZP_1.jpg',
    titre: 'MORGANNE BELLO',
    }
    ],
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
    ],
    autreMembre: [
    {
    id: 0,
    singer: 'Jeffrey',
    },
    {
    id: 1,
    singer: 'Yann',
    },
    ],
    showallbro : false,
    showMusic : false
    }
  },
  mounted () {
  this.items = this.musicItems
  this.boxMusique = this.musique

  //this.id = parseInt(this.$route.params.id, 0)
  },
  build:{
    assetsPublicPath:'/',
    assetsSubDirectory: 'static'
  },
  created (){
   // this.boxMusique = this.musique[this.index];
    //this.player = this.boxMusique.song;
     //this.audio = document.querySelector('audio');
  },
  methods: {
    changeMusic(p) {
      //this.id = parseInt(this.$route.params.id, 0)
       //console.log(this.items.findIndex(p => p.id === this.id))
      /* if (this.items.findIndex(p => p.id == id)) {
         return this.items.find((item) => item.id == id );
         
       }else if (this.items.findIndex(p => p.id == 1)) {
         return p.img
       }*/
       //this.box = this.items.findIndex(p => p.id)
        //this.showallbro = true
        this.box = this.actualite[p.id]
        console.log(this.box.img)
    },
    hideLightbox(){
      //console.log(this.items[item.img])
     //this.showallbro = false
     console.log('hello')
    },
    move(){
      //console.log(this.box.id);
      var id = this.box.id
      var nextId = parseInt(id)+1
      if(nextId == 3){
         nextId = 0
      }
      this.box = this.items[nextId]
    },
    left(){
      //console.log(this.box.id);
      var id = this.box.id
      var nextId = parseInt(id)-1
      if(nextId == -1){
        nextId = 2
      }
      this.box = this.items[nextId]
    },
   play(p){
     p.isPlaying = true
      this.showMusic = true
     /* p.file.play();*/
    /* this.boxMusique = this.musique[p.id]*/
    /* var listenMusique = new Audio(this.musique.song)
     listenMusique.play()*/
     /* if (p.isPlaying === true) {
        listenMusique.play()
      }else if(listenMusique){
        listenMusique.pause()
      } */
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
    pause(p){
     /* var listenMusique = new Audio(this.boxMusique.song)
      if (listenMusique) {
        listenMusique.play()
      }else if(listenMusique){
        listenMusique.pause()
      } */
      p.isPlaying = false;
      p.file.pause();
      console.log('hey')
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
    rightMove(){
      console.log(this.index)
      if (this.index === 2560) {
        this.index = 0;
      }else if(this.index === 0) {
        this.index = 0;
      }else {
        this.index += 1280;
      }
    },
    leftMove(){
      console.log(this.index)
      if (this.index === -2560) {
        this.index = 0;
      }else {
        this.index -= 1280;
      }
    },
    mouseover(p){
      p.prix = 'Add to cart'
    },
    mouseleave(p){
      p.prix = '24 €'
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
  background-color: #F7FFFF !important;
}
#lightbox{
  display: none;
  position: fixed;
  top: 0;
  z-index: 999999999999999;
  background-color: rgb(212, 0, 0);
  opacity: 0.9;
  width: 100%;
  height: 100%;
}
#lightbox.ok{
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999999999999999;
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  width: 100%;
  height: 100%;
}

/* Trending */
.home_box .about{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
}
.home_box .about h2{
font-family: 'Poppins';
color: #535353;
}

/*Nouveauté */
.home_box .nouveau{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 2px rgb(241, 241, 241) solid;
}
.home_box .nouveau h2{
font-family: 'Poppins';
color: #535353;
}

/*Playlist */
.home_box .ourPlaylist{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 2px rgb(241, 241, 241) solid;
}
.home_box .ourPlaylist h2{
font-family: 'Poppins';
color: #535353;
}

/*Beatmaker*/
.home_box .beatmaker{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 2px rgb(241, 241, 241) solid;
}
.home_box .beatmaker h2{
font-family: 'Poppins';
color: #535353;
}

/*Genre*/
.home_box .genre{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 2px rgb(241, 241, 241) solid;
 /* background-color: #172136;*/
}
.home_box .genre h2{
font-family: 'Poppins';
color: #535353;
}

/*News*/
.home_box .news{
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 2px rgb(241, 241, 241) solid;
 /* background-color: #172136;*/
}
.home_box .news h2{
font-family: 'Poppins';
color: #535353;
}
.home_box .skill{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: 400;
  text-transform: uppercase;
}
.home_box .skill #music_content{
  display: none;
  position: fixed; 
  bottom: 0;
  z-index: 99999;
  width: 100%;
  height: 90px;
 
}
.home_box .skill #music_content.active{
  display: flex;
  position: fixed; 
  bottom: 0;
  z-index: 99999;
  width: 100%;
  height: 90px;
 
}
.audio{
  background-color: none !important;
  width: 90%;
}
.home_box .portfolio{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-weight: 400;
  text-transform: uppercase;
  background-color: blue;
}
.portfolio h2{
  color: white; 
  font-weight: 600;
}
.portfolio .description{
  color: white; 
}
.home_box .blog{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-weight: 400;
  text-transform: uppercase;
}

@media all and (min-width: 830px) and (max-width: 4200px){
  /* ABOUT */
  .home_box .about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  }

  .home_box .about h2{
  padding-top: 8%;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;
  }
  .home_box .about .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .about .description{
    font-size: 25px;
    padding-left: 90px;
  }

  /* Lightbox */
  #lightbox.ok .image_music{
  border: 2px white solid;
  width: 320px;
  opacity: 1;
  }
  #lightbox.ok .image_music img{
  width: 320px;
  max-width: 100%;
  max-height: 385.14px;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  }
  #lightbox.ok .box_span{
    display: flex;
    column-gap: 20px;
  }
  #lightbox.ok span{
    width: 227px;
    background-color: rgb(163, 51, 51);
    cursor: pointer;
  }
  #lightbox.ok span img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center center;
  }

/* Trending */
  .home_box .about .playlist_box{
    width: 85%;
    height: 390px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-left: 120px;
    margin-top: 40px;
    overflow-y: scroll;
  }
    .playlist_box::-webkit-scrollbar{
      width: 10px;
    }

    .playlist_box::-webkit-scrollbar-track{
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    }
    .playlist_box::-webkit-scrollbar-thumb{
    background-color: rgb(226, 226, 226);
    border-radius: 10px;
    }
    .playlist_box::-webkit-scrollbar-thumb:hover{
    background-color: rgb(207, 207, 207);
    border-radius: 10px;
    }
     .playlist_box::-webkit-scrollbar-thumb:active{
    background-color: rgb(218, 218, 218);
    border-radius: 10px;
    }
  .home_box .about .playlist_box .songs{
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
    .home_box .about .playlist_box .songs:hover{
      background-color: rgb(224, 224, 224);

    /*background-color: rgb(255, 255, 255);*/
  }
   .home_box .about .playlist_box .songs .play{
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    cursor: pointer;
    padding-left: 20px;
    /*background-color: rgb(255, 255, 255);*/
  }
    .home_box .about .playlist_box .songs .play:hover{
    color: #3adaa9;
    /*background-color: rgb(255, 255, 255);*/
  }
  .home_box .about .playlist_box .songs .contenu_image{
      display: flex;
      /*flex-grow: 1; */
      margin-left: 1.8%;
      width: 60px;
      height: 60px;
      background-color: red;
      border-radius: 6px;

    /*background-color: rgb(255, 255, 255);*/
  }
  .home_box .about .playlist_box .songs .contenu_image img{
    max-width: 100%;
    width: 100%;
    max-height: 60px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
     border-radius: 6px;
    }
   .home_box .about .playlist_box .songs .titre{
    padding-left: 40px;
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
    }
    .home_box .about .playlist_box .songs .artiste{
    padding-left: 80px;
    color: #524F4F;
    font-weight: 800;
    }
     .home_box .about .playlist_box .songs .bpm{
    padding-left: 100px;
    color: #524F4F;
    font-weight: 600;
    }
    .home_box .about .playlist_box .songs .duree{
    padding-left: 150px;
    color: #524F4F;
    font-weight: 800;
    }
    .home_box .about .playlist_box .songs .like{
    padding-left: 80px;
    cursor: pointer;
    }
    .home_box .about .playlist_box .songs .prix{
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
      .home_box .about .playlist_box .songs .prix:hover{
    background-color: #47afaf;

    }
  

  /* Nouveautés */
    .home_box .nouveau{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  }

  .home_box .nouveau h2{
  padding-top: 8%;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;
  }
  .home_box .nouveau .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .nouveau .nouveaute_box{
    width: 1280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-left: 120px;
    margin-top: 40px;
    overflow: hidden;
    position: relative;
    /*background-color: red;*/
  }
   .home_box .nouveau .nouveaute_box .slide_box{
    width: 2560px;
    height: 350px;
    display: flex;
    /*background-color: red;*/
  }
  .home_box .nouveau .nouveaute_box .slide_box .news_card{
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-left: 8px;
    /*background-color: red;*/
  }
  .home_box .nouveau .nouveaute_box .slide_box .news_card .image_player{
    position: relative;
    width: 250px;
    height: 280px;
    display: flex;
    flex-direction: column;
    background-color: rgb(129, 239, 253);
    /*background-color: red;*/
  }
  .news_card .image_player .contenu_image{
    width: 250px;
    height: 280px ;
    background-color: rgb(129, 239, 253);
    /*background-color: red;*/
  }
  .news_card .image_player .contenu_image img{
    max-width: 100%;
    width: 100%;
    max-height: 280px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 6px;
  }
  .news_card .image_player .player_song{
    position: absolute;
    top: 0;
    z-index: 4;
    width: 250px;
    height: 280px ;
      background-image: linear-gradient(to bottom, rgba(240, 240, 240, 0), rgb(0, 0, 0));
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.8s ease-in-out;
    border-radius: 6px;
    /*background-color: red;*/
  }
  .news_card .image_player .player_song:hover{
    opacity: 1;
    /*background-color: red;*/
  }
  .news_card .image_player .player_song .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    /*background-color: red;*/
  }
   .news_card .image_player .player_song .play:hover{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 22px;

    /*background-color: red;*/
  }
  .home_box .about .playlist_box .songs .titre{
    padding-left: 40px;
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
  }
  .home_box .nouveau .nouveaute_box .slide_box .news_card .artiste{
    color: #524F4F;
    font-weight: 800;
  }
  .home_box .nouveau .nouveaute_box .slide_box .news_card .titre{
    color: #524F4F;
    font-weight: 800;
    text-transform: uppercase;
  }
  .home_box .nouveau .show_more{
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 150px;
    margin-top: 40px;
    text-decoration: underline;
    color: #43b1d3;
  }
  .home_box .nouveau .show_more:hover{
    color: #207994;
    font-weight: 600;
  }
   .home_box .nouveau .nouveaute_box .btnR {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    right: 0px;
    top: 30%;
    z-index: 15;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }
     .home_box .nouveau .nouveaute_box .btnL {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    left: 8px;
    top: 30%;
    z-index: 15;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }
  
/* Playlist */

    .home_box .ourPlaylist{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  }

  .home_box .ourPlaylist h2{
  padding-top: 8%;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;

  }
  .home_box .ourPlaylist .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .ourPlaylist .ourPlaylist_box{
    width: 1280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-left: 120px;
    margin-top: 40px;
    overflow: hidden;
    position: relative;
    background-color: #ffff11;
  }

     .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box{
    width: 2560px;
    height: 350px;
    display: flex;
    /*background-color: red;*/
  }
  .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box .news_card{
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-left: 8px;
    /*background-color: red;*/
  }
  .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box .news_card .image_player{
    position: relative;
    width: 250px;
    height: 280px;
    display: flex;
    flex-direction: column;
    background-color: rgb(129, 239, 253);
    /*background-color: red;*/
  }
  .news_card .image_player .contenu_image{
    width: 250px;
    height: 280px ;
    background-color: rgb(129, 239, 253);
    /*background-color: red;*/
  }
  .news_card .image_player .contenu_image img{
    max-width: 100%;
    width: 100%;
    max-height: 280px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 6px;
  }
  .news_card .image_player .player_song{
    position: absolute;
    top: 0;
    z-index: 4;
    width: 250px;
    height: 280px ;
      background-image: linear-gradient(to bottom, rgba(240, 240, 240, 0), rgb(0, 0, 0));
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.8s ease-in-out;
    border-radius: 6px;
    /*background-color: red;*/
  }
  .news_card .image_player .player_song:hover{
    opacity: 1;
    /*background-color: red;*/
  }
  .news_card .image_player .player_song .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    /*background-color: red;*/
  }
   .news_card .image_player .player_song .play:hover{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 22px;

    /*background-color: red;*/
  }
  .home_box .ourPlaylist .ourPlaylist_box .songs .titre{
    padding-left: 40px;
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
  }
  .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box .news_card .artiste{
    color: #524F4F;
    font-weight: 800;
  }
  .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box .news_card .titre{
    color: #524F4F;
    font-weight: 800;
    text-transform: uppercase;
  }
    .home_box .ourPlaylist .ourPlaylist_box .slidePlaylist_box .news_card .titre:hover{
     color: #43b1d3;
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
  .home_box .ourPlaylist .show_more{
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 150px;
    margin-top: 40px;
    text-decoration: underline;
    color: #43b1d3;
  }
  .home_box .nouveau .show_more:hover{
    color: #207994;
    font-weight: 600;
  }
   .home_box .ourPlaylist .ourPlaylist_box .btnR {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    right: 0px;
    top: 30%;
    z-index: 15;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }
     .home_box .ourPlaylist .ourPlaylist_box .btnL {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    left: 8px;
    top: 30%;
    z-index: 15;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }

  /* Beatmakers */

      .home_box .beatmaker{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  }

  .home_box .beatmaker h2{
  padding-top: 8%;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;

  }
  .home_box .beatmaker .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .beatmaker .beatmaker_box{
    width: 1280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-left: 120px;
    margin-top: 40px;
    overflow: hidden;
    position: relative;
  }

     .home_box .beatmaker .beatmaker_box .slideBeatmaker_box{
    width: 2560px;
    height: 350px;
    display: flex;
    /*background-color: red;*/
  }
  .home_box .beatmaker .beatmaker_box .slideBeatmaker_box .beat_card{
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-left: 8px;
    /*background-color: red;*/
  }
  .home_box .beatmaker .beatmaker_box .slideBeatmaker_box .beat_card .image_player{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-in-out;
    box-shadow: 2px 2px 12px -8px black;
    /*background-color: red;*/
  }
    .home_box .beatmaker .beatmaker_box .slideBeatmaker_box .beat_card .image_player:hover{
       transform: scale(1.2);
       margin-top: 20px;
       z-index: 888888;
    /*background-color: red;*/
  }
  .beat_card .image_player .contenu_image{
    width: 200px;
    height: 200px ;
    border-radius: 50%;
    background-color: rgb(129, 239, 253);
    display: flex;
    justify-content: center;
    align-items: center;
    /*background-color: red;*/
  }
   .image_player .round1{
    width: 70px;
    height: 70px;
    background-color: #858888;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: 32%;
    left: 32%;
    opacity: 0.6;
  }
  .image_player .round{
    width: 40px;
    height: 40px;
    background-color: #F7FFFF;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: 40%;
    left: 40%;
    opacity: 1;
  }
  .beat_card .image_player .contenu_image img{
    max-width: 100%;
    width: 100%;
    max-height: 200px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
  }
  .beat_card .image_player .player_song{
    position: absolute;
    top: 0;
    z-index: 4;
    width: 200px;
    height: 200px ;
    border-radius: 50%;
      background-image: linear-gradient(to bottom, rgba(240, 240, 240, 0), rgb(0, 0, 0));
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.8s ease-in-out;
    /*background-color: red;*/
  }
  .beat_card .image_player .player_song:hover{
    opacity: 1;
    /*background-color: red;*/
  }
  .beat_card .image_player .player_song .play{
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    background-color: #66dedd;
    padding: 8px;
    border-radius: 10px;
    /*background-color: red;*/
  }
  .home_box .beatmaker .beatmaker_box .beat_card .artiste{
    color: #524F4F;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
  .home_box .beatmaker .beatmaker_box .slideBeatmaker_box .beat_card .titre{
    color: #524F4F;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    padding-top: 4px;
  }
    .home_box .beatmaker .beatmaker_box .slideBeatmaker_box .beat_card .titre:hover{
    color: #48a4e0;
  }
     .home_box .beatmaker .beatmaker_box .btnR {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    right: 0px;
    top: 30%;
    z-index: 155555555555555;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }
     .home_box .beatmaker .beatmaker_box .btnL {
    border: none;
    outline: none;
    color: #ffffff;
    text-transform: uppercase;
    background-color: black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    left: 8px;
    top: 30%;
    z-index: 155555555555555;
    box-shadow: 4px 4px 8px -8px black;
    color: #ffff13;
  }

  /* Genres */

  .home_box .genre{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  overflow: hidden;
  }

  .home_box .genre h2{
  padding-top: 25px;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;

  }
  .home_box .genre .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .genre .genre_box{
    width: 1280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 18px;
    margin-left: 120px;
    margin-top: 40px;
    overflow: hidden;
    position: relative;
  }
    .home_box .genre .genre_box .genre_image{
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-in-out;
    box-shadow: 2px 2px 12px -8px black;
    background-color: blue;
    z-index: 6;
    overflow: hidden;
  }

    .home_box .genre  .card_jaune{
    position: absolute;
    left: 60px;
    top: 210px;
    width: 280px;
    height: 280px;
    background-color: #ffff11;
    z-index: 1;
    opacity: 0.8;
  }
      .home_box .genre  .card_jaune1{
    position: absolute;
    right: 60px;
    top: 210px;
    width: 280px;
    height: 280px;
    background-color: #ffff11;
    z-index: 1;
    opacity: 0.8;
  }
      .home_box .genre .genre_box .genre_image img{
    max-width: 100%;
    width: 100%;
    max-height: 280px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: 0.6s ease-in-out;
  }
    .home_box .genre .genre_box .genre_image img:hover{
       transform: scale(1.2);
  }
    .home_box .genre .genre_box .genre_image .lien{
    position: absolute;
    top: 20px;
    background-color: #66DEDC;
    text-align: center;
    padding: 12px;
    width: 90px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 2px 2px 16px -12px;
  }

  /* News */

    .home_box .news{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 6px;
  position: relative;
  overflow: hidden;
  }

  .home_box .news h2{
  padding-top: 125px;
  padding-left: 150px;
  font-size: 25px;
  z-index: 4;

  }
  .home_box .news .gradiant_shape{
    width: 60px;
    height: 20px;
    margin-left: 120px;
    background-image: linear-gradient(to right,rgb(102,222,220,60%),rgba(246, 255, 122, 90%));
    margin-top: -20px;
    z-index: 2;
  }
  .home_box .news .news_box{
    width: 1280px;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    margin-left: 120px;
    margin-top: 40px;
    overflow: hidden;
    position: relative;
  }
    .home_box .news .news_box .select_news{
    width: 1280px;
    height: auto;
    display: flex;
    column-gap: 18px;
    position: relative;
    margin-top: 40px;
  }
    .home_box .news .news_box .select_news .news_card{
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-left: 8px;
  }

  .home_box .news .news_box .select_news .news_card .news_image{
    width: 250px;
    height: 200px ;
    background-color: rgb(129, 239, 253);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /*background-color: red;*/
  }
    .home_box .news .news_box .select_news .news_card .news_image img{
    max-width: 100%;
    width: 100%;
    max-height: 200px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
      .home_box .news .news_box .select_news .news_card .news_image img:hover{
    transform: scale(1.2);
  }
    .home_box .news .news_box .select_news .news_card .titre{
    color: #524F4F;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    padding-top: 4px;
  }
    .home_box .news .news_box .principal_news{
      width: 100%;
      display: flex;
      column-gap: 12px;
      height: auto;
  }
  .home_box .news .news_box .principal_news .image_music{
    display: flex;
    flex-grow: 1; 
    padding-right: 1.8%;
    padding-bottom: 1.8%;
    padding-top: 1.8%;
    width: 50%;
  }
    .home_box .news .news_box .principal_news .image_music img{
    max-width: 100%;
    max-height: 385.14px;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .home_box .news .news_box .principal_news .music_description{
    padding-right: 0.8%;
    padding-top: 1.8%;
    width: 50%;
    display: flex; 
    flex-direction: column;
    column-gap: 8px;
    color: black;
  }

    .home_box .news .news_box .principal_news .music_description .titreText{
    font-weight: 600;
    text-transform: uppercase;
    color: black;
  }

  .home_box .news .show_more{
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 120px;
    margin-top: 40px;
    text-decoration: underline;
    color: #43b1d3;
     width: 120px;
    padding: 12px;
  }
 .home_box .news  .show_more:hover{
    color: #207994;
    font-weight: 600;
    width: 120px;
    padding: 12px;
  }

/* Others */
  .home_box .about .playlist_box .principal_playlist{
    width: 100%;
    display: flex;
    column-gap: 8px;
    height: auto;
  }

  .home_box .about .playlist_box .principal_playlist .image_music{
    display: flex;
    flex-grow: 1; 
    padding-right: 1.8%;
    padding-bottom: 1.8%;
    padding-top: 1.8%;
    width: 50%;
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
    padding-top: 1.8%;
    width: 50%;
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
  width: 227px;
  background-color: rgb(163, 51, 51);
  cursor: pointer;
  }
   .home_box .about .select_music span img{
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center center;
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
