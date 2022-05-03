<template>
  <div class="pokemons">
    <Loader v-if="loader" />
    <div v-else>
      <ModalInfo v-if="toggleModalInfo" />
      <div class="pokemons_container">
        <InputText :text="valueFilter" @filterPokemons="textFilter" />
        <Empty v-if="filter.length === 0"/>
        <div v-else class="pokemons_container_list">
          <div  v-for="(pokemon,index) in filter" :key="index" class="pokemons_container_list_pokemon">
            <div  @click="showPokemonInfo(pokemon)" class="pokemons_container_list_pokemon_name" > {{ pokemon.name }} </div>
            <div @click="changeFavorite(index)" class="star_container pokemons_container_list_pokemon_star">
              <img v-if="pokemon.isFavorite" src="@/assets/goldstar.png" alt="">
              <img v-else src="@/assets/stargrey.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      
    </div>
  </div>
</template>
<script>
// import Loader from "@/components/Loader.vue";
import InputText from "@/components/InputComponent.vue";
import ModalInfo from "@/components/ModalInfoPokemon.vue";
import Empty from "@/components/Empty.vue";
import Navbar from "@/components/NavBar.vue";
import Loader from "@/components/Loader.vue";
import {mapState} from "vuex"
export default {
  name: "ListPokemons",
  data() {
    return {
      showstar: true,
      showModalInfo: false,
      valueFilter: ""
    }
  },
  components: {
    InputText,
    Navbar,
    ModalInfo,
    Loader,
    Empty
  },
  computed:{
    ...mapState(['listPokemons', 'toggleModalInfo','filterPokemons','loader']),
    filter:{
      get(){
        return this.filterPokemons
      },
      set(value){
        this.filterPokemons = value
      }
    }
  },
  methods: {
    async showPokemonInfo(data){
      await this.$store.dispatch('getInfoPokemon', data)
    },
    goCollection() {
      this.$router.push("pokemons");
    },
    changeFavorite(index){
      this.listPokemons.map((el,i)=>{
        if(i === index){
          el.isFavorite = !el.isFavorite
        }
      })
    },
    textFilter(value){
      if(value=== ""){
        this.$store.commit('getAllPokemons')
      }
      this.$store.commit('filterName',value)
    }
  },
  mounted() {
    this.$store.dispatch('getPokemons')
  }
};
</script>