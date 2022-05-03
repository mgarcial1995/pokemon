<template>
    <div @click="action()" :style="{'backgroundColor': isActive ? '#F22539' : ''}" class="button_navbar">
        <img class="button_navbar_img" :src="getImgUrl(img)" />
        <div >{{ text }}</div>
    </div>
</template>
<script>
export default {
  name: "ButtonNavbarComponent",
  props: {
    text: { type: String, required: false },
    action: { type: Function, required: false },
    img:{ type: String, required: false },
    isActive:{ type: Boolean, required: false }
  },
  methods: {
    getImgUrl(img) {
        return require('@/assets/'+img)
    }
  }
};
</script>
