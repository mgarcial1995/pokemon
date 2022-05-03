<template>
    <div class="empty">
        <p class="empty_title">Uh-oh!</p>
        <p class="empty_text">You look lost on your journey!</p>
        <Button text="Go back home" :action="goHome" />
    </div>
</template>
<script>
import Button from "./Buton.vue";
export default {
  name: "ButtonComponent",
  components: {Button},
  props: {
    action: { type: Function, required: false },
  },
    methods: {
        goHome(){
            this.$emit('clean')
            this.$store.commit('getAllPokemons')
        }
    }
};
</script>
