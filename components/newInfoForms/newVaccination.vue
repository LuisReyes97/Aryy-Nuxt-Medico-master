<template>
    <div>
        <v-dialog persistent v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn> 	
        </template>
        <v-card>
          <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >VACUNACIÓN</span>
                  <v-btn
                    dark
                    icon
                    color="grey"
                    @click="reloadPage"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" xl="12">
                  <p class="cuestion mb-1">Vacuna</p>
                  <v-text-field
                  v-model="name"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Dosis</p>
                  <v-text-field
                  v-model="dosis"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Número de lote</p>
                  <v-text-field
                  v-model="lote"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escribe aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n3 mb-1">Fecha de aplicación</p>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="fecha"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="#7900ff"
                        style="font-family: Montserrat"
                        outlined
                        v-model="fecha"
                        placeholder="Seleccione la fecha"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                        <template #append>
                          <div style="width: 30px">
                            <v-img
                              style="margin: auto 0"
                              max-height="20"
                              max-width="20"
                              :src="require('@/assets/icons/iconos_citas.svg')"
                            />
                          </div> </template
                      ></v-text-field>
                    </template>
                    <v-date-picker color="#7900ff" v-model="fecha" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="#7900ff" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="#7900ff"
                        @click="$refs.dialog.save(fecha)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
              <v-col cols="12">
                <v-btn
              block
              @click="addVacunas"
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert v-model="incompleto" class="mt-n4"
                style="font-family: Montserrat; background-color: white !important"
                dense
                outlined
                type="error"
              >
                Datos incompletos, <strong>vuelva a intentarlo.</strong>
              </v-alert>
             </v-col>
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
      </v-dialog>
    </div>
</template>

<script>
export default {
layout: 'medicalRecord',
components: {},

data() {
  return {
    incompleto: false,
    errordata:'',
    name: '',
    lote: '',
    dosis: '',
    vacunass: '',
    overlay: false,
    modal: false,
    dialog: false,
    alimentarias: '',
    farmacos: '',
    ambientales: '',
    vaccine: '',
    fecha:  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date:  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dose: '',
    lot_number: '',
    lenght: '',
  }
},
watch: {
  overlay(val) {
    val &&
      setTimeout(() => {
        this.overlay = false
      }, 2000)
  },
},
methods: {
  reloadPage(){
    this.$router.go()
},
 /*  metodo para obtener datos de vacunacion | Genesis */
  vacunas() {
    this.$axios
      .get(`api/v1/physician/medical-history/vaccination-history/${this.$route.params.medicalRecord}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      })
      .then((res) => {
        this.vacunass = res.data.data
        this.vaccine = res.data.data[0].vacination[0].vaccine
        this.date = res.data.data[0].vacination[0].application_date
        this.dose = res.data.data[0].vacination[0].dose
        this.lot_number = res.data.data[0].vacination[0].lot_number
        this.lenght = res.data.data.lenght
      })
  },
/*   metodo para agregar datos de vacunación | Genesis */
  addVacunas() {
    this.$axios
      .post('api/v1/physician/medical-history/vaccination-history/', {
        patient_id: this.$route.params.medicalRecord,
        vaccine: this.name,
        dose: this.dosis,
        lot_number: this.lote,
        application_date: this.fecha,
      },
      {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then(
        this.overlay=true,
        this.incompleto=false,
      ).catch((error)=>{
          this.incompleto=true
        this.errordata = ''
        this.errordata = error.response.data.errors
      })
  },
},
mounted(){
  this.vacunas()
},
}
</script>
<style scoped>
p.titulo {
font-family: MontserratMedium;
color: #7900ff;
font-size: 130%;
}
p {
font-family: MontserratMedium;
color: #4f565f;
}
p.sub {
font-family: MontserratMedium;
color: #999999;
}
p.cuestion {
font-size: 115%;
color: #999999;
}
span {
color: #4f565f;
font-family: MontserratBold;
}
.save {
font-family: Montserrat;
text-transform: unset !important;
}
.restore {
font-family: Montserrat;
text-transform: unset !important;
}
.checkbox {
font-family: Montserrat;
}
.textfieldd {
font-size: Montserrat;
}
</style>