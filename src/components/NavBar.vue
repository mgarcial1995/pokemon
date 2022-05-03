<template>
  <div class="navbar">
    <div class="navbar_content">
        <ButtonNavbar :action="getAll" :isActive="isAll" img="allpokemons.png" text="All" />
        <ButtonNavbar :action="getFavorites" :isActive="isFavorite" img="whitestar.png" text="Favorites" />
    </div>
  </div>
</template>
<script>
import ButtonNavbar from "@/components/ButtonNavbar.vue";
export default {
  name: "NavBarComponent",
  data() {
    return {
        isAll: true,
        isFavorite: false,
    }
  },
  components: {
    ButtonNavbar
  },
  computed:{

  },
  methods: {
    getAll(){
      this.isAll = true;
      this.isFavorite = false
      this.$store.commit('getAllPokemons')
    },
    getFavorites(){
      this.isAll = false;
      this.isFavorite = true
      this.$store.commit('getFavoritesPokemon')
    }
  },
};
</script>