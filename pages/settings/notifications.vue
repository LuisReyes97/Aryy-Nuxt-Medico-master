<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-row v-if="$vuetify.breakpoint.lgAndUp">
        <v-col  cols="12">
          <menu-settings />
        </v-col>
      </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <menu-settings v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" height="800px" flat class="pa-3 montserrat">
          <v-card-title> NOTIFICACIONES </v-card-title>
          <v-card-text>
            <v-row>
              <v-col xl="4">
                <h3>Citas nuevas</h3>
                <v-card-subtitle class="ml-n4 mt-n4"
                  >Notificaciones sobre las citas registradas en tu calendario
                </v-card-subtitle>
              </v-col>
              <v-col xl="3">
                <v-switch
                  inset
                  v-model="pushRegis"
                  color="#9966ff"
                  label="Push"
                  hide-details
                ></v-switch>
                <v-switch
                  inset
                  v-model="emailRegis"
                  color="#9966ff"
                  label="Correo"
                  hide-details
                ></v-switch>
                <v-switch
                  inset
                  v-model="whatsRegis"
                  color="#9966ff"
                  label="Whatsapp"
                  hide-details
                ></v-switch>
              </v-col>
            </v-row>

            <v-row>
              <v-col xl="4">
                <h3>Citas próximas</h3>
                <v-card-subtitle class="ml-n4 mt-n4">
                  Notificaciones sobre las citas cercanas a tu horario actual en
                  tu calendario
                </v-card-subtitle>
              </v-col>
              <v-col xl="3">
                <v-switch
                  inset
                  v-model="pushHor"
                  color="#9966ff"
                  label="Push"
                  hide-details
                ></v-switch>
                <v-switch
                  inset
                  v-model="emailHor"
                  color="#9966ff"
                  label="Correo"
                  hide-details
                ></v-switch>
                <v-switch
                  inset
                  v-model="whatsHor"
                  color="#9966ff"
                  label="Whatsapp"
                  hide-details
                ></v-switch>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import menuSettings from './menuSettings.vue'
export default {
  components: { menuSettings },
  data() {
    return {
      pushRegis: false,
      emailRegis: false,
      whatsRegis: false,
      pushHor: false,
      emailHor: false,
      whatsHor: false,
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Ajustes',
          disabled: false,
          href: '/settings/account',
        },
        {
          text: 'Notificaciones',
          disabled: true,
          href: '/settings/notifications',
        },
      ],
    }
  },
}
</script>
<style scoped>
h3 {
  font-family: MontserratMedium;
  color: #9966ff;
}
h4 {
  font-family: Montserrat;
  font-size: 1.8vh;
  color: #999999;
}
.v-card__title {
  font-family: MontserratBold;
  color: #4f565f;
  font-size: 2.2vh;
}
.v-card__subtitle {
  font-size: 1.7vh;
  text-transform: none;
  font-family: Montserrat;
}
</style>