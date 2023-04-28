<template>
  <div class="shad">
    <v-toolbar flat>
      <v-tabs v-model="tabs" color="#7900ff" grow>
        <v-tab to="/accounts/edit/general-info/" class="tab">Perfil personal</v-tab>
        <v-tab to="/accounts/edit/medicalProfile-info/" class="tab">Perfil médico</v-tab>
        <v-tab to="/accounts/edit/planner-info/" class="tab">Agenda</v-tab>
      </v-tabs>
      <router-view></router-view>
    </v-toolbar>
  </div>
</template>


<script>
import VueRouter from 'vue-router'
export default {
  data: () => ({ show1: false, tabs: 0 }),
  created() {
    const menuPlanner = {
      template: '<div>  <menuPlanner/>!</div>',
    }

    const menuPersonal = {
      template: '<div> <menuPersonal/></div>',
    }

    const menuMed = {
      template: '<div>   <menuMed/></div>',
    }

    const routes = [
      { path: '/accounts/edit/general-info/', component: menuPlanner },
      { path: '/accounts/edit/medicalProfile-info/', component: menuPersonal },
      { path: '/accounts/edit/planner-info/', component: menuMed },
    ]

    const router = new VueRouter({ routes })
    return router
  },
}
</script>
<style>
.tab {
  font-family: Montserrat;
  font-size: 1rem;
  text-transform: capitalize;
}

/* .shad {
  box-shadow: 10px 10px 5px 0px rgba(153, 102, 255, 0.18);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(153, 102, 255, 0.18);
  -moz-box-shadow: 10px 10px 5px 0px rgba(153, 102, 255, 0.18);
} */
.toolb {
  box-shadow: 2px 6px 5px 0px rgb(153, 102, 255, 0.3);
  -webkit-box-shadow: 2px 6px 5px 0px rgb(153, 102, 255, 0.3);
  -moz-box-shadow: 2px 6px 5px 0px rgb(153, 102, 255, 0.3);
}
</style>