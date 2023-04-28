<template>
  <v-card color="card" class="mt-7 ml-4" flat>
  <v-tabs
    class="list-item mt-8"
    active-class="bgactive"
    hide-slider
    color="#7900ff"
    height="110px"
    vertical
  >
    <v-tab to="/accounts/edit/general-info" style="width: 145px" class="proband"> PERFIL </v-tab>
    <v-tab to="/accounts/edit/personalprofile/tax-data" style="width: 145px" class="proband"> DATOS FISCALES </v-tab>
    <v-tab to="/accounts/edit/personalprofile/subscription-form" style="width: 145px" class="proband"> SUSCRIPCIÓN </v-tab>
  </v-tabs>
  <router-view></router-view>
  </v-card>
</template>
  
  <script>
  import VueRouter from 'vue-router'
export default {
  data() {
    return {
      selectedItem: 1,
    }
  },
  created() {
    const GeneralInfo = {
      template: '<div>  <GeneralInfo/>!</div>',
    }

    const TaxData = {
      template: '<div>   <TaxData/></div>',
    }

    const SubscriptionForm = {
      template: '<div>   <SubscriptionForm/></div>',
    }

    const routes = [
      { path: '/accounts/edit/general-info', component: GeneralInfo },
      { path: '/accounts/edit/personalprofile/tax-data', component: TaxData },
      { path: '/accounts/edit/personalprofile/subscription-form', component: SubscriptionForm },
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
  font-family: MontserratMedium;
  font-size: 12px;
  align-items: start;
  flex-direction: column;
}
</style>