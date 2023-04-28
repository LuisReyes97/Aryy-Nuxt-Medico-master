<template>
  <v-tabs
    class="list-item mt-8"
    active-class="bgactive"
    hide-slider
    color="#7900ff"
    height="130px"
    vertical
  >
    <v-tab to="/accounts/edit/medicalProfile-info" class="proband"> FORMACIÓN </v-tab>
    <v-tab to="/accounts/edit/medicalProfileViews/idMed" class="proband"> ID MÉD. </v-tab>
    <v-tab to="/accounts/edit/medicalProfileViews/services" class="proband"> SERVICIOS </v-tab>
    <v-tab to="/accounts/edit/medicalProfileViews/illnes" class="proband"> ENFERMEDADES </v-tab>
  </v-tabs>
</template>

<script>
  import VueRouter from 'vue-router'
export default {
/*   components: { medicalProfileInfo, IdMed, Services, Illnes }, */

  data() {
    return {
      selectedItem: 1,
    }
  },
  created() {
    const medicalProfileInfo = {
      template: '<div>  <medicalProfileInfo/>!</div>',
    }

    const IdMed = {
      template: '<div>   <IdMed/></div>',
    }

    const Services = {
      template: '<div>   <Services/></div>',
    }

    const Illnes = {
      template: '<div>   <Illnes/></div>',
    }

    const routes = [
      { path: '/accounts/edit/general-info', component: medicalProfileInfo },
      { path: '/accounts/edit/personalprofile/tax-data', component: IdMed },
      { path: '/accounts/edit/personalprofile/subscription-form', component: Services },
      { path: '/accounts/edit/personalprofile/subscription-form', component: Illnes },
    ]

    const router = new VueRouter({ routes })
    return router
  },
}
</script>
<style>
.titlee {
  font-family: MontserratMedium;
}
.proband {
  font-family: Montserrat;
  align-items: start;
  flex-direction: column;
}
</style>