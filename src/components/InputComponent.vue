<template>
  <div class="inputText">
    <img class="inputText_img" src="@/assets/search.png" />
    <input v-model="textInput" class="inputText_input" placeholder="Search" type="text" />
  </div>
</template>
<script>
export default {
  name: "InputComponent",
  props: {
    text: { type: String, required: false }
  },
  computed: {
    textInput: {
      get() {
          return this.text
      },
      set(value) {
          this.$emit('filterPokemons', value)
      }
    }
  },

};
</script>