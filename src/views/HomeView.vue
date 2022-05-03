<template>
  <div class="home">
    <div class="home_container">
      <img src="@/assets/pika.png" alt="" />
      <p class="home_container_title">Welcome to Pokédex</p>
      <p class="home_container_text">
        The digital encyclopedia created by Professor Oak is an invaluable tool to
        Trainers in the Pokémon world.
      </p>
      <Button text="Get started" :action="goCollection" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Buton.vue";
export default {
  name: "HomeView",
  components: {
    Button,
  },
  methods:{
    goCollection(){
      this.$router.push('pokemons')
    }
  },
};
</script>
