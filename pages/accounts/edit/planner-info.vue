<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <account v-if="$vuetify.breakpoint.lgAndUp" />
    <v-row>
      <v-row>
        <menu-planner v-if="$vuetify.breakpoint.lgAndUp" />
      </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown" />
        <v-card color="card" flat height="800px" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2 "
            >CONSULTORIOS</v-card-subtitle
          >
          <v-card-text class="pa-3">
            <!-- card para mostrar datos de consultorio | Genesis -->
            <facility-card />
            <v-col md="6" cols="12"></v-col>

            <v-row>
              <v-col cols="12">
                <v-dialog 
                  fullscreen
                  overlay-color="white"
                  transition="dialog-top-transition"
                  v-model="dialog"
                >
                  <v-app-bar
                    flat
                    height="150px"
                    color="#ffffff"
                    dense
                    hide-on-scroll
                  >
                 
                      <v-col class="mt-n16 " md="5" lg="5" xl="5"
                        ><v-btn @click="back" icon
                          ><v-icon>mdi-close</v-icon></v-btn
                        ></v-col>
                      <v-row justify="start">
                      <v-col cols="9" md="4" lg="4" xl="4">
                        <v-img
                          :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
                          max-width="150"
                        ></v-img>
                        <p class="mt-n12 prueba">Consultorios</p></v-col
                      >
                    </v-row>
                  </v-app-bar>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="btn ml-n5 mt-n3"
                      color="#9966ff"
                      text
                      ><v-icon class="icon">mdi-plus-circle</v-icon><p class="btn mt-3 ml-n0">Agrega un
                      consultorio</p></v-btn
                    >
                  </template>
                  <new-facility />
                </v-dialog>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Account from './account.vue'
import FacilityCard from './plannerViews/facilityCard.vue'
import NewFacility from './plannerViews/newFacility.vue'
import menuPlanner from './plannerViews/menuPlanner.vue'
import accountMenu from './accountMenu.vue'
export default {
  components: {
    NewFacility,
    FacilityCard,
    Account,
    menuPlanner,
    accountMenu,
  },
  data() {
    return {
      facility: [],
      selectedItem: 1,
      dialog: false,
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Agenda',
          disabled: false,
          href: '/accounts/edit/planner-info',
        },
        {
          text: 'Consultorios',
          disabled: true,
          href: '/accounts/edit/plannerViews/schedule-info',
        },
      ],
    }
  },

  methods: {
    infoFacility() {
      this.$axios
        .get('api/v1/facilities', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.users = res.data.data.user
          this.facility_name = res.data.data.professional_name
          this.address = res.data.data.location[0].location_id
        })
    },

    back() {
      this.dialog = false
      this.$router.go() 
    },
  },
}
</script>

<style lang="scss">
.bgactive {
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}

.titlee {
  font-family: 'MontserratMedium', sans-serif;
  font-size: 13px;
  text-transform: unset !important;
  color: black;
}
.titlee:hover {
  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
a {
  text-decoration: none !important;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn {
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
  border: 0px;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
H1 {
  font-family: MontserratBold;
  font-size: 120%;
}
h1.planner {
  font-family: MontserratMedium;
  font-size: 115%;
  color: #4f565f !important;
}
span {
  font-family: Montserrat;
  font-size: 1.8vh !important;
}
p.btn{
   font-family: Montserrat;
  font-size: 1.8vh !important;
  color:#7900ff !important;
  text-transform: lowercase !important;
}
p.btn::first-letter{
  text-transform: uppercase !important;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
p.prueba {
  font-family: MontserratSemiBold;
  font-size: 1.5rem;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
  }
</style>