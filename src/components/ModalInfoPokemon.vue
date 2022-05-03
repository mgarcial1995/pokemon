<template>
  <div class="infomodal">
    <div @click="closeModal()" class="infomodal_background"></div>
    <div class="infomodal_modal">
        <div @click="closeModal()" class="infomodal_modal_close"> 
            <img src="@/assets/close.png" alt="">
        </div>
        <div class="infomodal_modal_bg">
            <img  class="infomodal_modal_bg_img" 
            :src="infoPokemon.sprites.other.home.front_default" alt="Pokemon">
        </div>
        <div class="infomodal_modal_info">
            <div class="infomodal_modal_info_text">
                <p><strong>Name:</strong> {{infoPokemon.name}}</p>
                <hr>
            </div>
            <div class="infomodal_modal_info_text">
                <p><strong>Weight: </strong> {{infoPokemon.weight}}</p>
                <hr>
            </div>
            <div class="infomodal_modal_info_text">
                <p><strong>Height: </strong> {{infoPokemon.height}}</p>
                <hr>
            </div>
            <div class="infomodal_modal_info_text">
                <p><strong>Types: </strong> {{type}}</p>
                <hr>
            </div>
            <div class="infomodal_modal_info_bot">
                <Button 
                v-clipboard:copy="copyClipboard"
                v-clipboard:success="onCopy"
                text="Share to my friends" :action="shared"/>
                <div class="star_container">
                    <img v-if="infoPokemon.favorite" src="@/assets/goldstar.png" alt="">
                    <img v-else src="@/assets/stargrey.png" alt="">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Button from "./Buton.vue";
import {mapState} from "vuex"
export default {
    name: "ModalInfoPokemon",
    components: {Button},
    data() {
        return {
        }
    },
    props: {
        text: { type: String, required: false },
        info: { type: String, required: false },
    },
    computed:{
        ...mapState(['infoPokemon']),
        type(){
            let types = this.infoPokemon.types.map(el=> el.type.name)
            return types.join(', ')
        },
        copyClipboard(){
            let message = `${this.infoPokemon.name}: weight ${this.infoPokemon.weight}, height ${this.infoPokemon.height}, type ${this.type}`
            return message
        }
    },
    methods: {
        closeModal(){
            this.$store.commit('SEND_INFO', {property:'toggleModalInfo', value: false});
        },
        shared(){
            console.log(this.copyClipboard)
        },
        onCopy(){
            alert('Se han copiado los datos del pokemon en el portapapeles: '+ this.copyClipboard)
        }
    },
};
</script>