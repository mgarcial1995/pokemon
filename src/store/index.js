import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    loader: true,
    listPokemons: [],
    filterPokemons: [],
    favorites: [],
    infoPokemon: {},
    toggleModalInfo: false,
    isFavorite: null
  },
  getters: {},
  mutations: {
    SEND_INFO(state, payload){
      state[payload.property] = payload.value
    },
    getFavoritesPokemon(state){
      state.filterPokemons = state.listPokemons.filter(el => el.isFavorite)
    },
    getAllPokemons(state){
      state.filterPokemons = state.listPokemons
    },
    filterName(state, filter){
      state.filterPokemons = state.filterPokemons.filter(el=> el.name.includes(filter))
    }
  },
  actions: {
    async getPokemons({commit}) {
      await axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((result) => {
        let data = result.data.results
        let newCollection = data.map(el=> {
          el.isFavorite = false
          return el
        })
        setTimeout(() => {
          commit('SEND_INFO', {property:'loader', value: false})
        },1000)
        commit('SEND_INFO', {property:'listPokemons', value:newCollection})
        commit('SEND_INFO', {property:'filterPokemons', value:newCollection})
      })

      .catch(error=>{
        console.log(error)
      });
    },
    async getInfoPokemon({commit}, payload) {
      await axios.get("https://pokeapi.co/api/v2/pokemon/"+payload.name)
      .then((result) => {
        let data = result.data
        data.favorite = payload.isFavorite
        commit('SEND_INFO', {property:'infoPokemon', value:data})
      })
      .then(()=>{
        
        commit('SEND_INFO', {property:'toggleModalInfo', value: true})
      })
      .catch(err => {
        console.log(err)
      });
    },
  },
  modules: {},
});
