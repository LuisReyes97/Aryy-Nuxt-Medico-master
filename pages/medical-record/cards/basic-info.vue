<!-- card para seccion de informacion basica | Genesis -->
<template>
  <v-card color="card" background="grey-lighten-4">
    <v-card-text>
      <v-row>
        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          v-model="patient"
            dense
            placeholder="Nombre completo"
            hide-details
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_user.svg')"
              />
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          v-model="phone_number"
            dense
            hide-details
            color="#7900ff"
            placeholder="Número de teléfono"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_phone.svg')"
              />
            </template>
          </v-text-field>
        </v-col>


        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            hide-details
            placeholder="Fecha de nacimiento"
            dense
            color="#7900ff"
              v-model="date"
              v-bind="attrs"
              v-on="on"
            >   <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_birthday.svg')"
              />
            </template>
            <template #append>
              ({{ calculateAge }} años)
            </template></v-text-field>
          </template>
          <v-date-picker
          color="#9966ff"
          locale="MX-ES"
            v-model="date"
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#7900ff"
              @click="modal = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="#7900ff"
              @click="$refs.dialog.save(date)"
            >
              OK
            </v-btn>
           
          </v-date-picker>
        </v-dialog>
    
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-autocomplete
          style="font-family: Montserrat !important"
          v-model="bloodtype"
          item-color="purple darken-4"
          :items="blood"
          class="mt-n5"
          placeholder="Tipo de sangre"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_bloodtype.svg')"
              />
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          v-model="height"
          placeholder="Estatura"
            class="mt-n5"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_height.svg')"
              />
            </template>

            <template #append>
             mts
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4">
          <v-text-field
          v-model="gender"
            class="mt-n5"
            placeholder="Genero"
            dense
            color="#7900ff"
            type="text"
          >
            <template #prepend>
              <img
                width="24"
                height="24"
                :src="require('@/assets/icons/icon_gender.svg')"
              />
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  <v-btn @click="update" color="#7900ff" text>Guardar</v-btn>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      id:'',
      idDate:'',
      date: '',
      modal: false,
      code:'',
      phone:'',
      phone_number:'',
      patient:'',
      birthday:'',
      bloodtype:'',
      height:'',
      gender:'',
      blood: ["A+","A-","B+","B-","AB+","AB-","O+","O-"],
      idUser:'',
      idAppointment:'',
      
    }
  },

  
  mounted() {
    this.created()
    this.getID()
  },
  computed:{
   /*  funcion para calcular la edad con el date picker | Genesis */
        calculateAge: function() {
          const currentDate = new Date();
          const birthDate = new Date(this.date);
          const difference = currentDate - birthDate;
          const age = Math.floor(difference/31557600000);
          return age
        },
      },
  methods: {
    /* datos de paciente para datos basicos | Genesis */
    basic_info() {
      this.$axios
        .get(
          'api/v1/calendar/appointments/'+this.idAppointment,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          console.log(res)
          this.patient = res.data.data.patient.full_name
          this.status = res.data.data.status
          this.code = res.data.data.patient.user_country_code
          this.phone = res.data.data.patient.user_phone_number
          
          const elements = [this.code+this.phone];
          this.phone_number=(elements.join());
        })
    },
   
    getID() {
     
      this.$axios
        .get(
          'api/v1/patient/'+this.id+'/medical-appointment',
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idAppointment = res.data.data.medical_appointments[0].id
          this.basic_info()
          this.data()
        })
    },
    created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },

    data() {
      this.$axios
        .get(
          `api/v1/basic-information/patient/${this.$route.params.medicalRecord}/medical-apointment/${this.idAppointment}`,
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
          this.idUser=res.data.data.patient.id
          console.log(this.idUser)
        })
    },

    update() {
      this.$axios
        .put(
          `api/v1/basic-information/patient/${this.$route.params.medicalRecord}`,
          {
            phone_number: this.phone,
            full_name: this.patient,
            birthday: this.date,
            blood_type: this.bloodtype,
            height: this.height,
            gender: this.gender
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
    },
  },
}
</script>

<style scoped>
.v-text-field {
  font-family: Montserrat;
}
.title {
  font-family: MontserratBold !important;
  color: #4f565f;
  font-size: 100% !important;
}
.subtitle {
  font-family: Montserrat !important;
  color: #4f565f;
  font-size: 80% !important;
}
.v-text-field--outlined >>> fieldset {
  border-color: transparent !important;
}
</style>