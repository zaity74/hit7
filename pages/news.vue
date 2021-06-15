<template>
  <div>
    <section class="section">
      <div style="background-color: white;" class="produit-container" v-for="p in actualite.slice(0, newToShow)" :key="p.id">
          <h3 >{{p.titre}}</h3>
          <img :src="p.img"  width="200" alt="" class="image_music" >
          <p>{{p.contenu}}</p>
          <p style="color: red;">{{p.date}}</p>
      </div>
    <div v-if="newToShow < actualite.length || actualite.length > newToShow">
        <button @click="newToShow += 3">show more reviews</button>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      total: 0,
      newToShow: 3,
      id: 0,
      Playlist: {},
      items: [],
      oldestFirst: false,
      actualite: [
          {
              id: 0,
              titre: 'titre 1',
              auteur: 'zuteur1',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              img: 'https://www.valorum.ch/web/image/753/1535-1024.jpg',
              date: '01/05/2021'
          },
           {
              id: 1,
              titre: 'titre 2',
              auteur: 'futeur2',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '08/05/2021',
               img: 'https://www.valorum.ch/web/image/10634/mr-autthaporn-pradidpong-2MZwPQ2EMik-unsplash.jpg'
          },
           {
              id: 2,
              titre: 'titre 3',
              auteur: 'tuteur3',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '06/05/2021'
              
          },
           {
              id: 3,
              titre: 'titre 4',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
            {
              id: 4,
              titre: 'titre 5',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
            {
              id: 5,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
              date: '02/05/2021'
          },
           {
              id: 6,
              titre: 'titre 6',
              auteur: 'euteur4',
              contenu: 'Convertissez vos vieux billets en francs suisses contre des monnaies en or ou argent. Valorum accepte vos vieux billets jusquau mois d octobre 2021.',
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
      ]
    }
  },
    mounted() {
    this.total = this.actualite.length
    console.log(this.total)

    const size = 3
    return this.actualite.slice(0,size),

    this.actualite.sort(function (a,b){
        if (a.date > b.date) {
            return -1
        }else if (b.date > a.date) {
            return 1
        }else {
            return 0
        }
    })
        console.log(this.actualite)
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