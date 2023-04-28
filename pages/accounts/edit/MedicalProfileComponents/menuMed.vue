<template>
  <v-tabs class="list-item mt-8" active-class="bgactive" hide-slider  color="#7900ff" height="130px" vertical>
    <v-tab class="proband">
      FORMACIÓN
    </v-tab>
    <v-tab class="proband">
      ID MÉD.
    </v-tab>
    <v-tab class="proband">
      SERVICIOS      
    </v-tab>
    <v-tab class="proband">
      ENFERMEDADES
    </v-tab>
      <v-tab-item transition="fade-transition">
        <medical-profile-info class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <id-med class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <services class="mt-n8"/>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <illnes class="mt-n8"/>
      </v-tab-item>
    </v-tabs> 
</template>
<script>
import medicalProfileInfo from '../medicalProfile-info.vue'
import IdMed from './idMed.vue'
import Illnes from './illnes.vue'
import Services from './services.vue'
export default {
  components: { medicalProfileInfo, IdMed, Services, Illnes },

  data () {
    return {
      selectedItem: 1,
    }
  },
}
</script>
<style>
.titlee{
  font-family: MontserratMedium;
}
.proband{
  font-family: Montserrat;
  align-items: start;
  flex-direction: column;
}
</style>