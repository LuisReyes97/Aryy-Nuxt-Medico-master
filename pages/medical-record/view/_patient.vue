<template >
  <div class="template">
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12" md="8">
        <p class="subtitle-p ml-0 mb-3">EXPEDIENTE DEL PACIENTE</p>
        <v-card color="card" class="rounded-lg" :elevation="2" scrollable>
          <div class="banner-text"><p class="infor">INFORMACIÓN DEL PACIENTE</p></div>
          <!-- INFORMACION BASICA -->
          <p class="subtitle-p mb-n4">INFORMACIÓN BÁSICA</p>
          <v-row class="row-icon" no-gutters>
            <v-col cols="12" md="4">
              <v-spacer></v-spacer>
              <div>
                <p class="d-flex align-center">
                  <img width="25vh" src="@/assets/icons/icon_perfil.svg" />
                  <span class="information-basic ms-3">{{patient}}</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg" />
                  <span class="information-basic ms-3">{{phone_number}}</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_cumpleaños_dark_.svg"
                  />
                  <span class="information-basic ms-3"
                    >{{date}} {{ edad }}</span
                  >
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_sanguineo_dark_.svg"
                  />
                  <span class="information-basic ms-3">Grupo Sanguíneo {{ bloodtype }}</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_estatura_dark_.svg"
                  />
                  <span class="information-basic ms-3">{{height}} mts</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">{{gender}}</span>
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Signos vitales -->
          <p class="subtitle-p my-n4">SIGNOS VITALES</p>
          <v-row class="row-icon" no-gutters>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img width="25vh" src="@/assets/icons/icon_perfil.svg" />
                  <span class="information-basic ms-3">37.5°</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img width="25vh" src="@/assets/icons/icon_phone_dark_.svg" />
                  <span class="information-basic ms-3">95 kg</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_cumpleaños_dark_.svg"
                  />
                  <span class="information-basic ms-3"
                    >31 años (01 Enero 1991)</span
                  >
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_sanguineo_dark_.svg"
                  />
                  <span class="information-basic ms-3">Grupo Sanguíneo B+</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_estatura_dark_.svg"
                  />
                  <span class="information-basic ms-3">1.80 mts</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <p class="d-flex align-center">
                  <img
                    width="25vh"
                    class="greeting-card-trophy"
                    src="@/assets/icons/icon_genero_dark_.svg"
                  />
                  <span class="information-basic ms-3">Hombre</span>
                </p>
              </div>
            </v-col>
          </v-row>

          <div class="banner-text" icon="mdi-material-design">
            <p class="infor">EXPEDIENTE MÉDICO</p>
          </div>

          <!-- ALERGIAS -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2 ml-6">ALERGIAS</p>
        
              <list-alergies/>
          </v-col>
          <!-- ALERGIAS -->

          <!-- ANTECENDETES PATOLOGICOS -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2 mt-n5 ml-6">ANTECEDENTES PATOLÓGICOS</p>
          <list-pathologic/>
          </v-col>
          <!-- ANTECENDETES PATOLOGICOS -->

            <!-- ANTECENDETES NO PATOLOGICOS -->
            <v-col cols="12" md="6">
            <p class="titulo mb-n2 mt-n5 ml-6">ANTECEDENTES NO PATOLÓGICOS</p>
          <listnonPathologic/>
          </v-col>
          <!-- ANTECENDETES NO PATOLOGICOS -->

          <!-- ANTECENDETES ANTECEDENTES HEREDOFAMILIARES -->
          <v-col cols="12" md="6">
            <p class="titulo mb-n2 mt-n5 ml-6">ANTECEDENTES HEREDOFAMILIARES</p>
           <listFamilyhistory/>
          </v-col>

          <!-- ANTECENDETES ANTECEDENTES HEREDOFAMILIARES -->

          <!-- ANTECENDETES MEDICAMENTO ACTIVO-->
          <v-col cols="12" md="6">
            <p class="titulo mb-2 mt-n5 ml-6">MEDICAMENTO ACTIVO</p>
           <listMedicine/>
          </v-col>

          <!-- ANTECENDETES MEDICAMENTO ACTIVO-->

          <!-- ANTECENDETES MEDICAMENTO MEDICAMENTO ANTERIOR-->
          <v-col cols="12" md="6">
            <p class="titulo mb-2 mt-n5 ml-6">MEDICAMENTO ANTERIOR</p>
            <ListPreviousMedicine/>
          </v-col>

          <!-- ANTECENDETES MEDICAMENTO ANTERIOR -->
          <!-- VACUNACION RECIENTE-->
          <v-col cols="12" md="6">
            <p class="titulo mb-2 mt-n5 ml-6">VACUNACIÓN RECIENTE</p>
            <list-vaccination/>
          </v-col>

          <!-- VACUNACION RECIENTER -->
        </v-card>
      </v-col>

      <!-- SEGUNDA COLUMNA -->
      <v-col cols="12" md="4">
        <p class="subtitle">NOTAS INTERNAS</p>
        <v-card color="card" class="greeting-card" elevation="5">
          <v-row class="ma-0 pa-0">
            <v-col cols="12">
              <div>
                <p class="information-note">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos nulla dolorem doloremque quae consequatur neque dicta, quaerat quasi animi consequuntur eaque deserunt esse et exercitationem, blanditiis molestiae, dolore quod!
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- NUEVA CONSULTA -->

        <v-col >
        <p class="subtitle">NUEVA CONSULTA</p>
          <v-row >
            <v-col cols="12">
              <div>
                <v-btn  elevation="0" class="btn_detail" block small color="#7900ff" dark> Iniciar nueva consulta</v-btn>
              </div>
      
            </v-col>
            <v-col cols="12">
              <div>
                <v-btn  elevation="0" class="btn_detail" block small  color="#a6a6a6" outlined>Agendar cita nueva</v-btn>
              </div>
            </v-col>



                  <!-- CITAS ANTERIORES -->
      <p class="subtitle">CITAS ANTERIORES</p>
      <v-col >
        <div>
    <v-card
      v-for="date in dates"
      :key="date"
      class="mx-auto montserrat mb-5"
     
      outlined
    >
      <v-list-item class="lista" two-line>
        <v-list-item-avatar tile size="80">
          <v-row>
            <v-col>
              <b style="font-size: 150%">{{date.day}}</b> <br />{{date.month}} <BR /> {{date.year}}</v-col
            >
          </v-row>
        </v-list-item-avatar>
        <v-sheet class="mr-3" :color="date.status" height="100" width="2"></v-sheet>
        <v-list-item-content>
          <v-list-item-title >
            <p class="montserrat">{{date.diagnosis}}</p>
          </v-list-item-title>
          <v-list-item-subtitle v-if="date.name"
            >{{date.name}} • {{date.medicine}} • {{date.mg }} <br />
            {{date.presentation}}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar
          ><v-icon :color="date.status"
            >{{date.icon}}</v-icon
          ></v-list-item-avatar
        >
      </v-list-item>
    </v-card>
  </div>
      </v-col>
          </v-row>
        </v-col>
      </v-col>




    </v-row>
  </div>
</template>

<script>
import listAlergies from '~/components/data-list-medicalrecord/list-allergies.vue'
import listPathologic from '~/components/data-list-medicalrecord/list-pathologic.vue'
import listnonPathologic from '~/components/data-list-medicalrecord/list-nonpathologic.vue'
import listFamilyhistory from '~/components/data-list-medicalrecord/list-familyhistory.vue'
import listMedicine from '~/components/data-list-medicalrecord/list-medicine.vue'
import listPreviousMedicine from '~/components/data-list-medicalrecord/list-previousMedicine.vue'
import ListPreviousMedicine from '~/components/data-list-medicalrecord/list-previousMedicine.vue'
import listVaccination from '~/components/data-list-medicalrecord/list-vaccination.vue'
export default {
  layout: 'medicalRecord',
  components: { listAlergies, listPathologic, listnonPathologic, listFamilyhistory, listMedicine, listPreviousMedicine, ListPreviousMedicine,listVaccination },
  data: () => ({
    patient:'',
    status:'',
    code:'',
    phone:'',
    phone_number:'',
    date:'',
    bloodtype:'',
    height:'',
    gender:'',
    items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Lista de pacientes',
          disabled: false,
          href: '/patients/list',
        },
        {
          text: 'Expediente',
          disabled: true,
          href: '/medical-record/medical-record',
        },
      ],
    dates: [
      {
            day: '12', month: 'OCT', year: '2022',
            diagnosis: 'Gastroenteritis y colitis nerviosa',
            name: 'Peptobismol',
            medicine: 'Subsalicilato de Bismuto',
            mg: '',
            presentation: 'Tabletas',
            status: 'green',
            icon: 'mdi-checkbox-marked-circle',
        },
        {
            day: '19', month: 'AGO', year: '2022',
            diagnosis: 'CITA CANCELADA',
            name: '',
            medicine: '',
            mg: '',
            presentation: '',
            status: 'red',
            icon: 'mdi-alert',
        },
    ],
  }),
  mounted(){
    this.basic_info()
    this.data()
  },

  methods: {

    calculateAge: function() {
          const currentDate = new Date();
          const birthDate = this.date;
          const difference = currentDate - birthDate;
          const age = Math.floor(difference/31557600000);
          this.edad= age
        },

    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'no actualiza'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'actualzia'
      })
    },
    basic_info() {
      this.$axios
        .get(
          `api/v1/calendar/appointments/${this.$route.params.patient}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.patient = res.data.data.patient.full_name
          this.code = res.data.data.patient.user_country_code
          this.phone = res.data.data.patient.user_phone_number
          const elements = [this.code+this.phone];
          this.phone_number=(elements.join());
        })
    },
    data() {
      this.$axios
        .get(
          `api/v1/basic-information/patient/${this.$route.params.patient}/medical-apointment/${this.$route.params.patient}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          console.log(res)
          this.date=res.data.data.patient.birthday
          this.bloodtype=res.data.data.medical_history.blood_type
          this.height=res.data.data.medical_history.height
          this.gender=res.data.data.patient.gender
        })
    },
  }
  
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
.banner-text {
  color: white;
  background: #7900ff;
  font-size: 2.5vh;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
  height: 5vh;
}
.subtitle {
  /*   font-size: 1.8vh;
  padding: 1.3vh;
  margin: 1vh; */
  font-size: 1.8vh;
  font-family: 'MontserratBold';
  color: #5b5e63;
}
.information-note{
  font-size: 1.8vh;
  font-family: 'Montserrat';
  color: #a6a6a6;
}
.description {
  font-family: 'Montserrat', sans-serif;
}
.information-description {
  color: #a6a6a6;
  font-size: 1.8vh;
}
.information-basic {
  color: #999999;
  font-family: 'MontserratMedium';
  font-size: 2vh;
}
.container {
  margin-top: 2px;
}
.greeting-card {
  position: relative;
  border-radius: 50px;
  height: 25vh;
  width: 50vh;
}
.btn_detail{
    text-transform: capitalize ;
    font-family: 'Montserrat', sans-serif;
    font-size: 2vh;
}
.row-icon{
  margin-top: 2vh;
  padding: 3vh;
}
.subtitle-p{
  margin-left: 2vh;
  margin-block-start: 2vh;
  font-size: 1.8vh;
  font-family: 'MontserratBold';
  color: #5b5e63;
}
.titulo{
  font-size: 2vh;
  font-family: MontserratBold;
}
p.infor{
  color: white;
  margin-left: 2vh;
}
</style>