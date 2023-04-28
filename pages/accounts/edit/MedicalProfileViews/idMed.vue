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
        <v-card color="card" flat height="100%" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2 "
            >IDENTIDAD MÉDICA</v-card-subtitle
          >
          <v-card-text class="pa-3 ">
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col xl="6">
                  <p>Logotipo propio*</p>
                  <v-file-input
                    chips
                    color="#9966ff"
                    class="textfield"
                    placeholder="Adjunta tu logotipo"
                    outlined
                  ></v-file-input>
                  <v-input class="input mb-n4"
                    >Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 5
                    MB</v-input
                  >
                </v-col>
              </v-row>
              <H1 class="mb-5 mt-5">FOTOGRAFÍAS</H1>
              <p>Fotografías del especialista</p>
              <VueFileAgent
                :multiple="true"
                :deletable="true"
                :helpText="'Selecciona o arrastra tus archivos aquí'"
                :uploadUrl="uploadUrl"
                v-model="files"
              ></VueFileAgent>

              <div>
                <v-tooltip color="transparent" bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <span class="input" v-bind="attrs" v-on="on"
                      ><v-icon color="#9966ff" small> mdi-information </v-icon
                      >Más información sobre las fotos</span
                    >
                  </template>
                  <v-alert shaped color="#7900ff"
                    ><p class="alertDi mb-n2 mt-n2">
                      ∙En su escritorio <br />
                      ∙En su consultorio (preferentemente usando bata) <br />
                      ∙Utilizando algún aparato dentro del consultorio <br />
                      ∙Realizando algún procedimiento a algun paciente <br />
                      ∙De cuerpo completo <br />
                      ∙Medio cuerpo (preferentemente usando bata)
                    </p>
                  </v-alert>
                </v-tooltip>
              </div>
              <div class="mt-5">
                <p>Fotografías del especialista</p>
                <VueFileAgent
                  :multiple="true"
                  :deletable="true"
                  :helpText="'Selecciona o arrastra tus archivos aquí'"
                  :uploadUrl="uploadUrl"
                  v-model="fileRecords"
                ></VueFileAgent>
                <div>
                  <v-tooltip color="transparent" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span class="input" v-bind="attrs" v-on="on"
                        ><v-icon color="#9966ff" small> mdi-information </v-icon
                        >Más información sobre las fotos</span
                      >
                    </template>
                    <v-alert shaped color="#7900ff"
                      ><p class="alertDi mb-n2 mt-n2">
                        ∙Del interior de su consultorio <br />
                        ∙De la sala de espera o del lobby <br />
                        ∙Fachada exterior del consultorio
                      </p>
                    </v-alert>
                  </v-tooltip>
                </div>
              </div>
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
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFileAgent from 'vue-file-agent'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Account from '../account.vue';
import accountMenu from '../accountMenu.vue';
import MenuMed from './menuMed.vue';
Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
export default {
  components: {Account, MenuMed,accountMenu},
  data() {
    return {
      overlay: false,
      alert: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
      hover: false,
      hover2: false,
      selectedItem: 1,
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
          text: 'Identidad médica',
          disabled: true,
          href: '/accounts/edit/medicalProfileViews/idMed',
        },
      ],
    }
  },
  created() {
    setTimeout(() => {
      this.alert = false
    }, 5000)
  },

  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>


<style>
p.alertDi {
  font-family: Montserrat;
  color: white;
  font-size: 0.89rem;
}
.v-input__icon--prepend .v-icon {
  color: #9966ff;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
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
h1 {
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
p::first-letter {
  font-family: Montserrat;
  font-size: 120%;
  text-transform: uppercase;
}
p {
  font-family: Montserrat;
  color: gray;
  font-size: 120%;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
  }
</style>