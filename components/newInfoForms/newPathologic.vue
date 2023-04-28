<template>
    <div>
         <!--   agregar informacion | Genesis -->
      <v-dialog persistent  scrollable v-model="editt" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="#9966ff">mdi-plus-circle</v-icon>
          </v-btn>
        </template>
        <v-card color="card" max-height="600px">
          <v-card-title class="d-flex justify-space-between flex-wrap">
             <!--  span a mostrar en pantallas md/lg | Genesis -->
             <div class="hidden-sm-and-down">
            <span  class="titleCard" >ANTECEDENTES PATOLÓGICOS</span><br/> </div>
            <div class="hidden-md-and-up">
           <!--    span a mostrar en pantallas xs/sm | Genesis -->
            <span  class="titleCard">ANTECEDENTES <br/> PATOLÓGICOS</span><br/> </div>
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
                  <p class="cuestion mb-n3">Cirugías previas</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="surgery"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="surgeriesStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="previous_surgeries"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="surgery == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Transfusiones</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="transfusion"
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
                      @click="transfusionsStatus"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="blood_transfusions"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="transfusion == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Diabetes</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="diabetesradio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="diabetesStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="diabetes"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="diabetesradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">Cardiopatías</p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="disease"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No" @click="diseaseStatus"></v-radio>
                  </v-radio-group>
                  <v-text-field
                  v-model="heart_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="disease == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                  <p class="cuestion mt-n4 mb-n3">
                    Presión arterial alta o baja
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood_pressure"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Hipertensión"
                      value="Hipertension"
                    ></v-radio>
                    <v-radio
                      color="#b380ff"
                      label="Hipotensión"
                      value="Hipotension"
                    ></v-radio>
                    <v-radio color="#b380ff" label="No" value="No"></v-radio>
                  </v-radio-group>

                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades tiroideas
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="thyroid"
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
                      @click="thyroidStatus"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="thyroid_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="thyroid == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cáncer
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="cancerradio"
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
                      @click="cancerStatus"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="cancer"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="cancerradio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de la sangre
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="blood"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="bloodStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="blood_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="blood == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Cálculos renales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="kidney"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="kidneyStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="kidney_stones"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="kidney == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Hepatitis
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="hepatitisRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="hepatitisStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="hepatitis"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="hepatitisRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Traumatismos
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="traumaRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="traumaStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="trauma"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="traumaRadio == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Patologías respiratorias
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="respiratory"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="respiratoryStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="respiratory_diseases"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="respiratory == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>

                    <p class="cuestion mt-n4 mb-n3">
                    Patologías gastrointestinales
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="gastrointestinal"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="gastrointestinalStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="gastrointestinal_pathologies"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="gastrointestinal == 'Si'"
                    outlined
                    placeholder="Escriba aquí"
                  ></v-text-field>
                  <p class="cuestion mt-n4 mb-n3">
                    Enfermedades de transmisión sexual
                  </p>
                  <v-radio-group
                    style="font-family: Montserrat"
                    v-model="etsRadio"
                    row
                  >
                    <v-radio
                      color="#b380ff"
                      label="Si"
                      value="Si"
                    ></v-radio>
                    <v-radio
                    @click="etsStatus"
                      color="#b380ff"
                      label="No"
                      value="No"
                    ></v-radio>
                    </v-radio-group>
                    <v-text-field
                  v-model="ets"
                    color="#7900ff"
                    class="mt-n3"
                    style="font-family: Montserrat"
                    v-if="etsRadio == 'Si'"
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
              @click="add"
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
  data() {
    return {
        overlay: false,
        editt:'',
        surgery:'',
        previous_surgeries:'',
        transfusion:'',
        blood_transfusions:'',
        diabetesradio:'',
        diabetes:'',
        disease:'',
        heart_diseases:'',
        blood_pressure:'',
        thyroid:'',
        thyroid_diseases:'',
        cancerradio:'',
        cancer:'',
        blood:'',
        blood_diseases:'',
        kidney:'',
        kidney_stones:'',
        hepatitisRadio:'',
        hepatitis:'',
        traumaRadio:'',
        trauma:'',
        respiratory:'',
        respiratory_diseases:'',
        gastrointestinal:'',
        gastrointestinal_pathologies:'',
        etsRadio:'',
        ets:'',
        incompleto: false, 
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
  methods:{
    reloadPage(){
        this.$router.go()
    },
    add() {
      this.$axios
        .post(
          'api/v1/medical-history/physician/pathological-background/', {
            patient_id: this.$route.params.medicalRecord,
          previous_surgeries: this.previous_surgeries,
          blood_transfusions: this.blood_transfusions,
          diabetes: this.diabetes,
          heart_diseases: this.heart_diseases,
          blood_pressure: this.blood_pressure,
          thyroid_diseases: this.thyroid_diseases,
          cancer: this.cancer,
          blood_diseases: this.blood_diseases,
          kidney_stones: this.kidney_stones,
          hepatitis: this.hepatitis,
          trauma: this.trauma,
          respiratory_diseases: this.respiratory_diseases,
          ets: this.ets,
          gastrointestinal_pathologies: this.gastrointestinal_pathologies,
          
      
        },
        {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          })
          .then(
            this.surgeriesStatus(),
          this.transfusionsStatus(),
          this.diabetesStatus(),
          this.diseaseStatus(),
          this.cancerStatus(),
          this.thyroidStatus(),
          this.kidneyStatus(),
          this.hepatitisStatus(),
          this.traumaStatus(),
          this.respiratoryStatus(),
          this.gastrointestinalStatus(),
          this.etsStatus(),
          this.bloodStatus(),
          this.overlay = true,
          this.incompleto=false,
      )
      .catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
          this.incompleto=true
        })
    },

    
      
 /*    metodos de status para los radio groups | Genesis */
 surgeriesStatus(){
    if(this.surgery==="No"){
        this.previous_surgeries="No"
      }
    },
    transfusionsStatus(){
      if(this.transfusion==="No"){
        this.blood_transfusions="No"
      }
    },
    diabetesStatus(){
      if(this.diabetesradio==="No"){
        this.diabetes="No"
      }
    },
    diseaseStatus(){
      if(this.disease==="No"){
        this.heart_diseases="No"
      }
    },
    bloodStatus(){
      if(this.blood==="No"){
        this.blood_diseases="No"
      }
    },
    cancerStatus(){
      if(this.cancerradio==="No"){
        this.cancer="No"
      }
    },
    thyroidStatus(){
      if(this.thyroid==="No"){
        this.thyroid_diseases="No"
      }
    },
    kidneyStatus(){
      if(this.kidney==="No"){
        this.kidney_stones="No"
      }
    },
    hepatitisStatus(){
      if(this.hepatitisRadio==="No"){
        this.hepatitis="No"
      }
    },
    traumaStatus(){
      if(this.traumaRadio==="No"){
        this.trauma="No"
      }
    },
    respiratoryStatus(){
      if(this.respiratory==="No"){
        this.respiratory_diseases="No"
      }
    },
    gastrointestinalStatus(){
      if(this.gastrointestinal==="No"){
        this.gastrointestinal_pathologies="No"
      }
    },
    etsStatus(){
      if(this.etsRadio==="No"){
        this.ets="No"
      }
    },
  }
  
}
</script>
<style scoped>

span.titleCard {
  font-size: 95%;
  font-family: MontserratBold;
  text-transform: uppercase;
}

</style>