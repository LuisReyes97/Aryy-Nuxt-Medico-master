<template>
    <div>
            <!-- agregar informacion existente | Genesis -->
            <v-dialog  v-model="dialog" persistent  scrollable   max-width="600px">
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn> 	
        </template>
        <v-card color="card"  max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
            <span >ANTECEDENTES HEREDOFAMILIARES</span>
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
                  <p class="cuestion mb-n3">Disabetes</p>{{ diabetes }}
                  <v-radio-group
                  v-model="diabetes"
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
                      @click="diabetesStatus"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="diabetes == 'Si'"
                  v-model="diabetes_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="diabetes == 'Si'"
                  v-model="diabetes_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cardiopatías</p>
                  <v-radio-group
                  v-model="disease"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="diseasesStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="disease == 'Si'"
                  v-model="diseases_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="disease == 'Si'"
                  v-model="diseases_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                  v-model="pressure"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="pressureStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="pressure == 'Si'"
                  v-model="pressure_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="pressure == 'Si'"
                  v-model="pressure_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades tiroideas</p>
                  <v-radio-group
                  v-model="thyroid"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="thyroidStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="thyroid == 'Si'"
                  v-model="thyroid_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="thyroid == 'Si'"
                  v-model="thyroid_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Enfermedades de la sangre</p>
                  <v-radio-group
                  v-model="blood"
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
                      @click="bloodStatus"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="blood == 'Si'"
                  v-model="blood_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="blood == 'Si'"
                  v-model="blood_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cáncer</p>
                  <v-radio-group
                  v-model="cancer"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="cancerStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="cancer == 'Si'"
                  v-model="cancer_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="cancer == 'Si'"
                  v-model="cancer_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mb-n3 mt-n4">Cálculos renales</p>
                  <v-radio-group
                  v-model="kidney"
                    style="font-family: Montserrat"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="kidneyStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-if="kidney == 'Si'"
                  v-model="kidney_family"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Selecciona quién(es) de tu familia"
                  ></v-text-field>
                  <v-text-field
                  v-if="kidney == 'Si'"
                  v-model="kidney_type"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
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
      overlay: false,
      dialog: false,
      incompleto: false,
      errordata: '',
      edit:'',
      diabetes: '',
      family: [],
      disease: '',
      pressure: '',
      thyroid: '',
      blood: '',
      cancer: '',
      kidney: '',
      null: '',
      dataerror:'',

      diabetes_family:'',
      diabetes_type:'',
      diseases_family:'',
      diseases_type:'',
      pressure_family:'',
      pressure_type:'',
      thyroid_family:'',
      thyroid_type:'',
      cancer_family:'',
      cancer_type:'',
      kidney_family:'',
      kidney_type:'',
      blood_family:'',
      blood_type: '',
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
  },
  methods: {
    
   /*  agregar informacion | Genesis */
    add() {
      this.$axios
        .post(
          'api/v1/medical-history/physician/hereditary-background/',
          {
            patient_id: this.$route.params.medicalRecord,
            diabetes: 
              {
                family: this.diabetes_family,
                type: this.diabetes_type,
              },
              heart_diseases: 
              {
                family: this.diseases_family,
                type: this.diseases_type,
              },
              blood_pressure: 
              {
                family: this.pressure_family,
                type: this.pressure_type,
              },
              blood_diseases: 
              {
                family: this.blood_family,
                type: this.blood_type,
              },
              thyroid_diseases: 
              {
                family: this.thyroid_family,
                type: this.thyroid_type,
              },
              cancer: 
              {
                family: this.cancer_family,
                type: this.cancer_type,
              },
              kidney_stones: 
              {
                family: this.kidney_family,
                type: this.kidney_type,
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
          this.diabetesStatus(),
          this.diseasesStatus(),
          this.pressureStatus(),
          this.thyroidStatus(),
          this.cancerStatus(),
          this.kidneyStatus(),
          this.bloodStatus()
        ).catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },

    reloadPage(){
      this.$router.go()
  },


    diabetesStatus() {
       if(this.diabetes==="No"){
        this.diabetes_family="No"
        this.diabetes_type="No"
      }
    }, 
    diseasesStatus(){
       if(this.disease==="No"){
        this.diseases_family="No"
        this.diseases_type="No"
      } 
    },
    pressureStatus(){
     if(this.pressure==="No"){
        this.pressure_family="No"
        this.pressure_type="No"
      } 
    },
    thyroidStatus(){
       if(this.thyroid==="No"){
        this.thyroid_family="No"
        this.thyroid_type="No"
      } 
    },
    cancerStatus(){
      if(this.cancer==="No"){
        this.cancer_family="No"
        this.cancer_type="No"
      } 
    },
    kidneyStatus(){
      if(this.kidney==="No"){
        this.kidney_family="No"
        this.kidney_type="No"
      } 
    },
    bloodStatus(){
      if(this.blood==="No"){
        this.blood_family="No"
        this.blood_type="No"
      } 
    },
  }
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
  background-color: white;
  text-transform: unset !important;
}
</style>