<template>
    <div @click="action()" class="button">{{ text }}</div>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    text: { type: String, required: true },
    action: { type: Function, required: false },
  },

};
</script>
