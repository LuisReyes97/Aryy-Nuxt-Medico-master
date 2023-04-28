<template>
  <v-app dark>
    <!--código de lista de elementos del SideBar | Luis Reyes-->
    <v-app-bar v-if="$vuetify.breakpoint.smAndDown"
      color="#f6f6f6"
      height="35"
    ><v-app-bar-nav-icon  @click.stop="drawer = !drawer " /></v-app-bar>
  
    <v-navigation-drawer
    :expand-on-hover="$vuetify.breakpoint.mdAndUp && drawer"
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-avatar class="icon-logo">
        <img
          class="img-logo"
          src="@/assets/logotipos/ISOLOGO_ARYY.svg"
          alt="logo Aryy"
        />
      </v-avatar>
      <v-list class="list-item mb-n6" active-class="bg-active">
        <!-- renderizado de lista del SideBar | Luis Reyes -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action active-class="bg-active">
            <!--pintamos el objeto img en el SideBar | Luis Reyes-->
            <img class="icons" :src="item.url" alt="" />
          </v-list-item-action>
          <v-list-item-content active-class="bg-active">
            <!--pintamos el objeto titulo en el SideBar | Luis Reyes-->
            <v-list-item-title class="v-list-item-titlee">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

   <!--    lista de los elementos bloqueados | Genesis -->
      <v-list color="#f4edff" disabled class="list-item">
        <v-list-item
          v-for="(blockedItem, i) in blockedItems"
          :key="i"
          :to="blockedItem.to"
          router
          exact
        >
          <v-list-item-action active-class="bg-active">
            <img class="icons" :src="blockedItem.url" alt="" />
          </v-list-item-action>
          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee">{{
              blockedItem.title
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action active-class="bg-active">
            <img
              class="icons"
              :src="require('@/assets/icons/icon_lock.svg')"
              alt=""
            />
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list class="list-item mt-n3" active-class="bg-active">
        <v-list-item class="mt-n1" @click="logout">
          <v-list-item-icon>
            <img
              class="icons"
              :src="require('@/assets/icons/SettingsIcon.svg')"
              alt=""
            />
          </v-list-item-icon>

          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee"
              >Ajustes</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="mt-n1" @click="logout">
          <v-list-item-icon>
            <v-icon size="23" color="#7900ff">mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content active-class="bg-active">
            <v-list-item-title class="v-list-item-titlee"
              >Cerrar sesión</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

       <!--  <div class="container-icon">
          <v-btn
            class="btn-sidebar"
            icon
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
            >
          </v-btn>
        </div> -->
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      activeColor: '#7900ff',
      clipped: false,
      drawer: false,
      fixed: false,
      /* Lista de elementos basada en una matriz para el SideBar | Luis Reyes */
      items: [
        {
          url: require('@/assets/icons/icon_inicio.svg'),
          title: 'Inicio',
          to: '/',
        },
        {
          url: require('@/assets/icons/icon_calendario.svg'),
          title: 'Calendario',
          to: '/calendario/month',
        },
        {
          url: require('@/assets/icons/icon_paciente.svg'),
          title: 'Pacientes',
          to: '/patients/list',
        },
      ],
      blockedItems: [
        {
          url: require('@/assets/icons/MessageIcon.svg'),
          title: 'Mensajes',
          to: '/mensajes',
        },
        {
          url: require('@/assets/icons/FinanceIcon.svg'),
          title: 'Finanzas',
          to: '/finanzas',
        },
        {
          url: require('@/assets/icons/StatisticsIcon.svg'),
          title: 'Estadísticas',
          to: '/estadisticas',
        },
        {
          url: require('@/assets/icons/MarketingIcon.svg'),
          title: 'Marketing',
          to: '/marketing',
        },
        {
          url: require('@/assets/icons/NewIcon.svg'),
          title: 'Noticias',
          to: '/noticias',
        },
        {
          url: require('@/assets/icons/ShoppingIcon.svg'),
          title: 'Compras',
          to: '/compras',
        },
        {
          url: require('@/assets/icons/AssistantIcon.svg'),
          title: 'Asistente',
          to: '/asistente',
        },
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    /* matar token y redireccionar al login | Genesis */
    logout() {
      this.$axios
        .get('/api/v1/logout', {})
        .then(
          localStorage.removeItem('token'),
          this.$router.replace('/auth/login')
        )
    },
  },
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* /logos | Luis Reyes/ */
.icon-logo{
  margin: 1em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40vh;
}

.img{
  width: 30%;
}

/*renderizado de lista | Luis Reyes */
.list-item {
  margin-top: 1em;
}
.v-list-item-titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #7900ff;
}
.v-list-item-titlee:hover {

  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}
.v-list-item:hover.lista {
  background: transparent;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
s
/*contenedor div => icono | Luis Reyes */
.container-icon {
  margin-top: 3em;
  text-align: center;
}
.btn-sidebar {
  background-color: #f4edff;
}
/*color de fondo en las vistas con tema claro */
.theme--light.v-application {
 /*  background-color: var(--v-background-base, #f4edff) !important; */
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: -webkit-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#f4edff", GradientType=1);
} 

v-navigation-drawer{
  text-align: right;
  position: relative;
  overflow: auto;
  height: calc(0px + 100vh); 
  top: 0px;
}

div .theme--light.v-calendar .v-event-timed {
  font-family: Montserrat;
  font-size: 15px;
}


.theme--light.v-divider {
   color: #f4edff;
}
.vtoolbar{
    border: thin solid #cccccc;
    height: 30px;
    width: 2rem;
  }
  .search{
    font-family: Montserrat;
  }
.bg-active{
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
img:hover{
  color: white !important;
  fill: white !important;
}
.logout{
  text-transform: capitalize;
}

</style>

<!-- estilos para tema oscuro -->
<style>
.theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__title {
    color: white;
}
.theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle {
    color: white;
}
.theme--dark.v-icon {
  color: #FFFFFF !important;
}
.theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__text {
    color: white !important;
}
.theme--dark.v-btn {
  color: white;
}
.theme--dark.v-navigation-drawer {
  background-color: #363940;
}
.theme--dark.v-application a {
  color: #FFFFFF !important;
}
.theme--dark.v-icon {
  color: #FFFFFF !important;
}
</style>

<!-- estilos para tema claro -->
<style>
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__title {
    color: rgba(0, 0, 0, 0.6);
}
.theme--light.v-icon.bread {
  color: #7900ff !important;
}
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle {
    color: #4f565f;
}
</style>