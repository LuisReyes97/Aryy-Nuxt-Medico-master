<template>
    <v-tabs grow show-arrows v-model="tabs" color="#7900ff"  >
      <v-tab >
        <v-menu bottom >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              <span class="tab ">Perfil Personal</span>
              <v-icon > mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="listaa">
            <v-list-item v-for="item in personal" :key="item.name" :to="item.to">
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-menu></v-tab>

        <v-tab >
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="ml-n5"
              text
              v-bind="attrs"
              v-on="on"
            >
              <span class="tab ">Perfil Médico</span>
              <v-icon> mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="listaa">
            <v-list-item v-for="item in medico" :key="item.name" :to="item.to">
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-menu></v-tab>

        <v-tab class="tab">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="ml-n5"
              v-bind="attrs"
              v-on="on"
            >
              <span class="tab ml-3 mr-n2">Agenda</span>
              <v-icon> mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="listaa">
            <v-list-item v-for="item in agenda" :key="item.name" :to="item.to">
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-menu></v-tab>

    </v-tabs>
</template>
  
  <script>
import VueRouter from 'vue-router'
export default {
  data: () => ({
    show1: false,
    tabs: 0,
    personal: [
      { name: 'Perfil', to: '/accounts/edit/general-info' },
      { name: 'Datos fiscales', to: '/accounts/edit/personalprofile/tax-data' },
      { name: 'Suscripción', to: '/accounts/edit/personalprofile/subscription-form'},
    ],

    medico: [
      { name: 'Formación', to: '/accounts/edit/medicalProfile-info'},
      { name: 'Id Med', to: '/accounts/edit/medicalProfileViews/idMed' },
      { name: 'Servicios', to: '/accounts/edit/medicalProfileViews/services'},
      { name: 'Enfermedades', to: '/accounts/edit/medicalProfileViews/illnes' },
    ],

    agenda: [
      { name: 'Consultorios', to: '/accounts/edit/planner-info' },
      { name: 'Horarios', to: '/accounts/edit/plannerViews/schedule-info' },
    ],
  }),
  created() {
    const menuPlanner = {
      template: '<div>  <menuPlanner/>!</div>',
    }

    const menuPersonal = {
      template: '<div>   <menuPersonal/></div>',
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
  font-size: 0.9rem;
  color: #999999 !important;
  text-transform: capitalize !important;
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
.listaa {
  font-family: Montserrat;
}
</style>