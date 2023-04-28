<template>
    <div>
          <!-- agregar informacion  | Genesis -->
      <v-dialog  v-model="editt" persistent  scrollable  max-width="600px">
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn>
        </template>
        <v-card color="card" max-height="640px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
               <!--  span a mostrar en pantallas md/lg | Genesis -->
            <div class="hidden-sm-and-down">
            <span >ANTECEDENTES NO PATOLÓGICOS</span><br/> </div>
            <div class="hidden-md-and-up">
           <!--    span a mostrar en pantallas xs/sm | Genesis -->
            <span >ANTECEDENTES <br/> NO PATOLÓGICOS</span><br/> </div>
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
                  <p class="cuestion mb-n3">Actividad física</p>

                  <v-radio-group
                  v-model="sports"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="sportstatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="sports == 'Si'"
                    v-model="type_activity"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba el tipo de actividad"
                  ></v-text-field>
                  <v-text-field
                  v-if="sports == 'Si'"
                    v-model="days_week"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="¿Cuántos días a la semana?"
                  ></v-text-field>
                  <p class="cuestion mt-n4">Horas de sueño</p>
                  <v-text-field
                  v-model="horas_sueño"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione un rango"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">¿Sueña siempre que duerme?</p>

                  <v-radio-group
                  v-model="soñar"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    ¿Siente que descansa al dormir?
                  </p>

                  <v-radio-group
                  v-model="descanso"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">Tabaquismo</p>
                  <v-radio-group
                  v-model="smoking"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="No"
                      value="No"
                      @click="statusSmoking"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="smoking == 'Si'"
                    v-model="cigarettes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba la cantidad de cigarrillos al dia"
                  ></v-text-field>
                  <v-text-field
                  v-if="smoking == 'Si'"
                    v-model="typeSmoke"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Alcoholismo</p>
                  <v-radio-group
                  v-model="alcoholism"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="statusAlcohol"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="alcoholism == 'Si'"
                    v-model="alcohol"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Frecuencia semanal"
                  ></v-text-field>
                  <v-text-field
                  v-if="alcoholism == 'Si'"
                    v-model="typeAlcohol"
                    color="#7900ff"
                    style="font-family: Montserrat"
                    class="mt-n3"
                    outlined
                    placeholder="Seleccione el tipo"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">Otras sustancias</p>
                  <v-radio-group
                  v-model="other_substances"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="Si"></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4">Dieta</p>
                <!--   <v-radio-group
                    style="font-family: Montserrat"
                    v-model="dieta"
                    row
                  >
                    <v-radio color="#b380ff" label="Si" value="yes"></v-radio>
                    <v-radio color="#b380ff" label="No" value="no"></v-radio>
                  </v-radio-group> -->
                  <v-autocomplete
                    v-model="diet"
                    :items="dietas"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Seleccione el tipo de dieta"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-row>
             
              <v-col cols="12">
                <v-btn
              block
              height="50px"
              class="white--text save"
              color="#7900ff"
              large
              @click="add"
              >Guardar cambios</v-btn
            > </v-col>
            <v-col  cols="12">
               <v-alert 
               v-model="incompleto"
               class="mt-n4"
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
components: {},
layout: 'medicalRecord',
data() {
  return {
    null:'',
    dataNull:true,
    alcoholismNull:'',
    other_substancesNull:'',
    physical_activityNull:'',
    rest_timeNull:'',
    smokingNull:'',
    dataerror:'',
    incompleto:false,
    sportsradio: '',
    errordata:'',
    dias: '',
    overlay: false,
    editt: false,
    create: false,
    tabaquismo: '',
    sports: '',
    dreaming: '',
    resting: '',
    smoking: '',
    alcoholism: '',
    diet: '',
    dieta: '',
    other: '',
    horas_sueño: '',
    horassueño: '',
    soñar: '',
    descanso: '',
    nonpat: [],
    type_activity: '',
    days_week: '',
    other_substances: '',
    cigarettes: '',
    typeSmoke: '',
    alcohol: '',
    activityerror:'',
    diettype: '',
    alcoholismo: '',
    typeAlcohol: '',
    dietas: [
      'Dieta mediterránea',
      'Dieta de la zona',
      'Dieta vegetariana',
      'Dieta vegana',
      'Dieta de la fertilidad',
      'Dieta hipocalórica',
      'Dieta hipercalórica',
      'Dieta volumétrica',
      'Dieta keto',
      'Dieta detox',
      'Dieta Ornish / Ovolactovegetariana',
      'Dieta Dash',
      'Dieta paleo',
    ],
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
mounted() {
  this.datos()
},
methods: {
  getData(data) {
    this.null = data;
  },
  /* obtener informacion | Genesis */
  datos() {
    this.$axios
      .get(
        `api/v1/medical-history/physician/non-pathological-background/patient/${this.$route.params.medicalRecord}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        this.diet = res.data.data.diet
        this.other_substances = res.data.data.other_substances
      }).catch((error) => {
        this.dataerror = ''
        this.dataerror = error
      })
  },

  /* agregar información | Genesis */
  add() {
    this.$axios
      .post(
        'api/v1/medical-history/physician/non-pathological-background/',
        {
          patient_id: this.$route.params.medicalRecord,
          other_substances: this.other_substances,
          diet: this.diet,
          drug_active: 'string',
          previous_medication: 'null',
          physical_activity: 
            {
              days_of_the_week: this.days_week,
              type_of_activity: this.type_activity,
            },
          rest_time: 
            {
              dreams_while_sleeping: this.soñar,
              hours_of_sleep: this.horas_sueño,
              rest_when_sleeping: this.descanso,
            },
          alcoholim:
            {
              type: this.typeAlcohol,
              weekly_frequency: this.alcohol,
            },
          smoking:
            {
              number_of_cigarettes: this.cigarettes,
              type: this.typeSmoke,
            },
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then(
        this.overlay=true,
        this.incompleto=false,
       this.sportstatus(),
        this.statusSmoking(),
        this.statusAlcohol(),
      )
    .catch((error)=>{
        this.errordata = ''
        this.errordata = error.response.data.errors
        this.incompleto=true
      })
  },

  reloadPage(){
    this.$router.go()
  },


  sportstatus() {
    if(this.sports==="No"){
      this.type_activity="No"
      this.days_week="No"
    }
  },
  statusSmoking() {
    if(this.smoking==="No"){
      this.cigarettes="No"
      this.typeSmoke="No"
    }
  },
  statusAlcohol() {
    if(this.alcoholism==="No"){
      this.typeAlcohol="No"
      this.alcohol="No"
    }
  },
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
p.cuestion {
font-size: 115%;
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
</style>