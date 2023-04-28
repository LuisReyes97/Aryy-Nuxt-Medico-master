<template>
  <v-card color="card" left flat>
    <v-tabs
      class="list-item mt-8"
      active-class="bgactive"
      hide-slider
      color="#7900ff"
      height="70px"
      vertical
    >
      <v-tab to="/accounts/edit/planner-info" class="proband"> CONSULTORIOS </v-tab>
      <v-tab to="/accounts/edit/plannerViews/schedule-info" class="proband"> HORARIOS </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
import VueRouter from 'vue-router'
export default {
/*   components: { plannerInfo, ScheduleInfo }, */
  data() {
    return {
      selectedItem: 1,
    }
  },
  created() {
    const plannerInfo = {
      template: '<div>  <planner-info/>!</div>',
    }

    const scheduleInfo = {
      template: '<div>   <schedule-info/></div>',
    }


    const routes = [
      { path: '/accounts/edit/general-info', component: plannerInfo },
      { path: '/accounts/edit/personalprofile/tax-data', component: scheduleInfo },
    ]

    const router = new VueRouter({ routes })
    return router
  },
}
</script>
<style>
.proband {
  align-items: start;
  flex-direction: column;
}
</style>

