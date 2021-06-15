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


      <!-- Barre player -->
      <div class="skill" id="skilout">
        <div id="music_content" style="background-color: red" :class="{ 'active' : showMusic }" >
        <!--  <audio id="audio" controls ref="audioElm" :src="boxMusique.song"></audio> -->
          <p style="color: white;">{{musique.titre}}</p>
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
      artiste:
        'artiste 1',
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