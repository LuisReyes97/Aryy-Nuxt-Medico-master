<template>
    <vue-tel-input-vuetify  :valid-characters-only="true"
  @input="onInput"  v-model="phonenumber" class="textfield" color="#b380ff" placeholder="+51 XXX XXX XXXX" label="" outlined ></vue-tel-input-vuetify>   
</template>

<script>
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
export default {
name: "codeCountry",
components: {
VueTelInputVuetify,
},
data() {
return {
phone: {
  number: "",
}
};
},
};
</script>
<style lang="scss">
/* estilos para el codeCountry | Genesis */
.vti__flag {
margin-right: 8px;
}
.vue-tel-input-vuetify {
display: flex;
align-items: center;
.country-code {
width: 45px;
}
li.last-preferred {
border-bottom: 1px solid #cacaca;
}
.v-text-field {
.v-select__selections {
position: relative;
.vti__flag {
position: absolute;
margin-left: 18px;
}
}
&--outlined {
.v-select__selections {
.vti__flag {
  margin-left: auto;
}
}
}
}
}
</style>