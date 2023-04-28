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
        <v-card color="card" flat class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2"
            >FOTO DE PERFIL</v-card-subtitle
          >
          <v-form ref="form" v-model="valid">
            <v-card-text class="pa-3">
              <v-row>
                <v-col md="12" lg="12" xl="12" cols="12">
                  <p>Nombre*</p>
                  <v-text-field
                    v-model="professional_name"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <p>Especialidad*</p>
                  <v-text-field
                    v-model="specialty"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="6" lg="6" xl="6" cols="12"></v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <p>Subespecialidad (opcional)</p>
                  <v-autocomplete
                    v-model="subspecialty"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Añadir"
                    outlined
                  ></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text
                    ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir
                    otra</v-btn
                  >
                </v-col>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <p>Subespecialidad (opcional)</p>
                  <v-autocomplete
                    v-model="subespeciality2"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Añadir"
                    outlined
                  ></v-autocomplete>
                  <v-btn class="btn ml-n5 mt-3" color="#9966ff" text
                    ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir
                    otra</v-btn
                  >
                </v-col>
                <v-row
                v-for="input in inputs"
                  :key="input.id"
                  class="inputArea ml-0"
                >
                  <v-col md="6" lg="6" xl="6" cols="12">
                    <p :for="input.id" class="  mb-n1">
                      No. de cedula*
                    </p>
                    <v-text-field
                      :id="input.id"
                      v-model="license"
                      color="#9966ff"
                      class="textfield mt-1"
                      placeholder="00000000"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6" lg="6" xl="6" cols="12">
                    <p :for="input.id" class=" mb-n1">
                      Institución que otorgó la cédula*
                    </p>
                    <v-text-field
                      :id="input.id"
                      v-model="institution"
                      color="#9966ff"
                      class="textfield mt-1"
                      placeholder="Escribe el nombre de la institución"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6" lg="6" xl="6" cols="12">
                    <p :for="input.id" class=" mb-1">Foto de cedula*</p>
                    <v-file-input
                      :id="input.id"
                      v-model="fileIden"
                      chips
                      color="#9966ff"
                      class="textfield"
                      placeholder="Añadir archivo"
                      outlined
                    ></v-file-input>
                    <v-input class="input mt-3 mb-n4"
                      >Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 2
                      MB</v-input
                    > </v-col
                  ><v-col md="6" lg="6" xl="6" cols="12"></v-col>
                </v-row>
                <v-col md="6" lg="6" xl="6" cols="12">
                  <v-btn
                    class="btn ml-n5 mb-n4"
                    color="#9966ff"
                    text
                    @click="addInput"
                    ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otra
                    cédula</v-btn
                  >
                </v-col>
                <v-col class="mt-3" xl="12">
                  <p>Sobre mi(opcional)</p>
                  <v-textarea
                  v-model="biography"
                    color="#9966ff"
                    maxlength="400"
                    counter="400"
                    auto-grow
                    placeholder="Escribe una biografía breve sobre ti"
                    outlined
                    class="textfield mb-16"
                  ></v-textarea>
                </v-col>
              </v-row>
              <H1 class="mb-5 mt-8">CERTIFICADOS</H1>
              <VueFileAgent
                :multiple="true"
                :deletable="true"
                :helpText="'Selecciona o arrastra tus archivos aquí'"
                :uploadUrl="uploadUrl"
                v-model="certificates"
              ></VueFileAgent>
              <!--     <H1 class="mb-5 mt-8">RECETA MÉDICA*</H1>
    <v-row>
      <v-col xl="6"> <span>Logotipo propio</span> <v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>    
      <v-col xl="6">  <span>Grupo médico (opcional)</span><v-file-input class="textfield" placeholder="Añadir archivo" outlined></v-file-input >   <v-input class="input">Formatos permitidos: PDF, JPG O PNG. Tamaño máximo de archivo 5 MB.</v-input></v-col>
    </v-row> -->
              <H1 class="mb-5 mt-8">REDES SOCIALES</H1>
              <v-row>
                <v-col cols="12" xs="9" sm="9" md="12" lg="6" xl="4">
                  <span>Facebook</span>
                  <v-btn outlined class="btnsocial justify-start" block color="#999999" height="50"
                    ><v-img
                      class="mr-3"
                      :src="require('@/assets/icons/icon_facebook.svg')"
                      max-width="3.5vh"
                    ></v-img>
                    <span class="social">Vincula tu cuenta de Facebook</span>
                  </v-btn>
                </v-col>

                <v-col xs="12" sm="12" md="12" lg="6" xl="4">
                  <span>Instagram</span>
                  <v-btn outlined class="btnsocial justify-start" block color="#999999" height="50"
                    ><v-img
                      class="mr-3"
                      :src="require('@/assets/icons/icon_insta.svg')"
                      max-width="3vh"
                    ></v-img>
                    <span class="social">Vincula tu cuenta de Instagram</span>
                  </v-btn>
                </v-col>
                <v-col c xs="12" sm="12" md="12" lg="6" xl="4">
                  <span>TikTok</span>
                  <v-btn outlined class="btnsocial justify-start" block color="#999999" height="50"
                    ><v-img
                      class="mr-3"
                      :src="require('@/assets/icons/icon_tiktok.svg')"
                      max-width="3vh"
                    ></v-img>
                    <span class="social">Vincula tu cuenta de TikTok</span>
                  </v-btn>
                </v-col>
                <v-col xs="12" sm="12" md="12" lg="6" xl="4">
                  <span>Sitio Web</span>
                  <v-btn outlined class="btnsocial justify-start" block color="#999999" height="50"
                    ><v-img
                      class="mr-3"
                      :src="require('@/assets/icons/icon_internet.svg')"
                      max-width="25"
                    ></v-img>
                    <span class="social">Ingresa tu sitio web</span>
                  </v-btn>
                </v-col>
              </v-row>
           
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
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import Vue from 'vue'
import VueFileAgent from 'vue-file-agent'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Account from './account.vue'
import MenuMed from './MedicalProfileViews/menuMed.vue'
import accountMenu from './accountMenu.vue'

Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
export default {
  components: {
    MenuMed,
    Account,
    accountMenu
  },
  data() {
    return {
      professional_name: '',
      specialty: '',
      subspecialty: '',
      subespeciality2: '',
      license: '',
      institution: '',
      fileIden: [],
      biography: '',
      certificates: '',
      inputs: [
        {
          id: '',
          label: '',
          value: '',
        },
      ],
      overlay: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
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
          text: 'Formación',
          disabled: true,
          href: '/accounts/edit/personalprofile/tax-data',
        },
      ],
    }
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
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
    },

    getinfoMedical() {
      this.$axios
        .get('/api/v1/physician/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.professional_name = res.data.data.professional_name
          this.specialty = res.data.data.physician_specialties[0].specialty_id
          this.license = res.data.data.physician_specialties[0].license
          this.institution = res.data.data.physician_specialties[0].institution
          this.certificates = res.data.data.certificates
          this.biography = res.data.data.biography
        })
    },
    postMedicalinfo() {
      this.$axios
        .post('/api/v1/physician', {
          professional_name: this.professional_name,
          specialty: this.specialty_id,
          license: this.license,
          institution: this.institution,
          certificates: this.certificates,
          biography: this.biography,
        })
        .then((response) => {
          console.log(response.data.data)
          localStorage.setItem('token',response.data.access_token)
        })
        .catch((error) => {
          /*   alert(error.response.data.errors.email) */
          this.errormail = ''
          this.errormail = error.response.data.errors.email[0]
          this.password_error=""
          this.password_error = error.response.data.errors.password[0]
        })
    },
  },
  mounted() {
    console.log('verificando')
    this.getinfoMedical()
  },
}
</script>


  <style>
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
  text-transform: capitalize !important;
  color: #9966ff;
  border: solid 0px;
}
.btnsocial {
  border: solid 1px #999999;
}
.span.social::first-letter {
  font-family: Montserrat;
  text-transform: uppercase !important;
  color: #999999;
  border: solid 1px #999999;
}
.social {
  font-family: Montserrat;
  text-transform: lowercase !important;
  color: #999999;
   font-size: 1.7vh;
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
span {
  color: #999999;
  font-family: Montserrat;
  font-size: 120%;
  text-transform: capitalize;
}
p {
  font-family: Montserrat !important;
  color: #999999 !important;
  font-size: 120%;
}
p.cedu {
  font-family: Montserrat;
  font-size: 120%;
  color: #999999;
}
.v-input__icon--append .v-icon {
  font-size: 50px;
  color: #999999;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
  }
</style>