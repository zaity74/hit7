<template>
  <div>
    <section class="section">
      <div class="produit-container">
          <img :src="Playlist.img"  width="200" alt="" class="image_music" >
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
      items: [],
       musicItems: [
    {
    id: 0,
    artiste:
      'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    img:
      'https://static.galerieslafayette.com/media/3004018/300401823050/G_300401823050_347_ZP_1.jpg',
    titre: 'MORGANNE BELLO',
    },
    {
    id: 1,
    titre: 'Sac iconique Vendino, format moyen, réalisé en cuir de couleur tourterelle et orné sur les deux côtés du fermoir-tourniquet emblématique de la marque. Doté d’intérieurs en nappa     souple, de deux compartiments intérieurs séparés par une paroi rigide, d’une poche intérieure zippée. Barre et voile en plexiglas écaille de tortue et accessoires en métal finition dorée. La bandoulière réglable et amovible, ainsi que la poignée permettent de le porter croisé, à l’épaule ou à la main. Fabriqué en Italie.',
    artiste: 'Yo zaity',
    img:
      'https://images.pexels.com/photos/868306/pexels-photo-868306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
    id: 2,
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
    this.id = parseInt(this.$route.params.id, 0)
    this.Playlist = this.items.find(x => x.id === this.id)
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