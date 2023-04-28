<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon class="bread" size="22">{{ item.icon }}</v-icon>
          <span >{{ item.text }}</span>
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
          <v-card-title> TEMA DE ARYY </v-card-title>
          <v-card-subtitle
            >Escoge el tema para visualizar tu interfaz de aryy. <br />
            El tema por defecto es el Tema claro.
          </v-card-subtitle>
          <v-card-text>
            <v-row> <v-card color="card" flat
            @click="lightMode"
                  v-model="light"
                  v-ripple
                  link
                  hover
                >
                  <v-card-text>
                    <v-icon>mdi-weather-sunny</v-icon>Tema claro
                    <v-chip class="chip justify-center" v-if="light === true" small>Activo</v-chip>
                    <v-img class="mt-2"
                      :src="require('@/assets/themes/claro.png')"
                    ></v-img>
                  </v-card-text>
                </v-card>
               <v-card color="card" flat
            @click="darkMode"
                  v-model="light"
                  v-ripple
                  link
                  hover
                >
                  <v-card-text>
                    <v-icon>mdi-weather-night</v-icon>Tema Oscuro
                    <v-chip class="chip justify-center" v-if="dark === true" small>Activo</v-chip>
                    <v-img class="mt-2"
                      :src="require('@/assets/themes/oscuro.png')"
                    ></v-img>
                  </v-card-text>
                </v-card>
            <v-card color="card" flat
            @click="systemMode"
                  v-model="system"
                  v-ripple
                  link
                  hover
                >
                <v-card-text>
                    <v-icon>mdi-laptop</v-icon>Tema del sistema
                    <v-chip class="chip justify-center" v-if="system === true" small>Activo</v-chip>
                    <v-img class="mt-2"
                      :src="require('@/assets/themes/sistema.png')"
                    ></v-img>
                  </v-card-text>
                </v-card
              >
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
      light: false,
      dark: false,
      system: false,
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
          text: 'Temas',
          disabled: true,
          href: '/settings/theme',
        },
      ],
    }
  },
  mounted() {},

  methods: {
    darkMode() {
      this.$vuetify.theme.dark = true;
      this.dark=true
      this.light=false
      this.system=false
    },
    lightMode() {
      this.$vuetify.theme.dark = false;
      this.light=true
      this.dark=false
      this.system=false
    },
    systemMode(){
      this.system=true
      this.dark=false
      this.light=false
    }
  }
}

</script>
  <style >
.v-card__subtitle {
  font-size: 1.7vh;
  text-transform: none;
  font-family: Montserrat;
}
.v-card__text{
    color: black !important;
}
.v-card--hover {
  color: #7900ff;
}
.chip{
    width: 80px;
    border: thin solid #7900ff;
    color: #7900ff;
    background-color: #ebe0ff !important;
}
.v-icon{
    color: black !important;
    margin-right: 10px;
}
.v-icon.bread{
    margin-right: 10px;
}
</style>
