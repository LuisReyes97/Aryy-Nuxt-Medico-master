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
        <account v-if="$vuetify.breakpoint.lgAndUp"/>
    <v-row>
       <v-row>
          <menu-med v-if="$vuetify.breakpoint.lgAndUp"/>
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" flat height="800px" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2"
            >ENFERMEDADES QUE TRATA</v-card-subtitle
          >
          <v-card-text class="pa-3 mt-n5">
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col v-for="(prueba, i) in pruebas" :key="i" xl="6">
                  <v-checkbox
                    class="checkbox mb-n6"
                    color="#9966ff"
                    hide-details
                    :label="prueba.name"
                  ></v-checkbox>
                </v-col>
                <v-col xl="6"> </v-col>
              </v-row>
              <br />
              <v-dialog> </v-dialog>
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="btn ml-n5"
                color="#9966ff"
                text
                ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro</v-btn
              >
            
            </v-form>
          </v-card-text>
          <v-card-actions>
              <v-row class="mt-7">
                <v-col xl="2" cols="12">
              <v-btn
              block
              v-on:click="postMedicalinfo"
                @click="overlay = !overlay"
                height="50px"
                class="white--text save "
                color="#7900ff"
                large
                >Guardar cambios</v-btn
              ></v-col>
             
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
  import Account from '../account.vue';
  import accountMenu from '../accountMenu.vue';
import MenuMed from './menuMed.vue'

export default {
  components: {
    MenuMed,Account,accountMenu
  },
  data() {
    return {
      overlay: false,
      selectedItem: 1,
      pruebas: [
        { name: 'Infecciones urinarias en adultos' },
        { name: 'Sindrome de vejiga dolorosa' },
        { name: 'Disfunción eréctil' },
        { name: 'Varicocele' },
        { name: 'Piedras en los riñones' },
        { name: 'Incontinencia urinaria de esfuerzos' },
        { name: 'Cáncer de testículos' },
        { name: 'Eyaculación precoz' },
        { name: 'Hiperplasia prostática' },
        { name: 'Enfermedades de Transmisión sexual (ETS)' },
      ],
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Perfil médico',
          disabled: false,
          href: '/accounts/edit/medicalProfile-info',
        },
        {
          text: 'Enfermedades',
          disabled: true,
          href: '/accounts/edit/medicalProfileViews/illnes',
        },
      ],
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
}
</script>
  
  <style>
.checkbox {
  font-family: Montserrat;
}
.bgactive {
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}
.titlee {
  font-family: 'Montserrat', sans-serif;
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
span {
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
    color: #4f565f !important;
  }
</style>