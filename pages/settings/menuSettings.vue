<template>
  <div>
    <v-tabs
    
      v-if="$vuetify.breakpoint.lgAndUp"
      background-color="card"
      class="list-item mt-8 ml-n3"
      active-class="bg-active"
      hide-slider
      color="#7900ff"
      height="110px"
      vertical
    >
      <v-tab to="/settings/account" style="width: 145px" class="proband">
        CUENTA
      </v-tab>
      <v-tab to="/settings/notifications" style="width: 145px" class="proband">
        NOTIFICACIONES
      </v-tab>
      <v-tab to="/settings/theme" style="width: 145px" class="proband">
        TEMA
      </v-tab>
      <v-tab to="/settings/delete" style="width: 145px" class="proband">
        ELIMINAR
      </v-tab>
    </v-tabs>
    <v-tabs
    background-color="card"
      v-if="$vuetify.breakpoint.smAndDown"
     width="1vh"
      show-arrows
      v-model="tabs"
      color="#7900ff"
    >
      <v-tab v-for="tab in tabsItem" :key="tab" :to="tab.to">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <router-view></router-view>
  </div>
</template>
    
    <script>
import VueRouter from 'vue-router'
export default {
  data() {
    return {
      tabsItem: [
        {
          name: 'CUENTA',
          to: '/settings/account'
        },
        {
          name: 'NOTIFICACIONES',
          to: '/settings/notifications'
        },
        {
          name: 'TEMA',
          to: '/settings/theme'
        },
        {
          name: 'ELIMINAR',
          to: '/settings/delete'
        },
      ],
      selectedItem: 1,
    }
  },
  created() {
    const account = {
      template: '<div>  <account/>!</div>',
    }

    const notifications = {
      template: '<div>   <notifications/></div>',
    }

    const theme = {
      template: '<div>   <theme/></div>',
    }

    const deleteAccount = {
      template: '<div>   <deleteAccount/></div>',
    }

    const routes = [
      { path: '/settings/account', component: account },
      { path: '/settings/notifications', component: notifications },
      { path: '/settings/theme', component: theme },
      { path: '/settings/delete', component: deleteAccount },
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
.bgactive {
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
</style>