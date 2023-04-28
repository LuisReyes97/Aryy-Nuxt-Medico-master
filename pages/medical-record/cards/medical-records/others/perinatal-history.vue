<!-- seccion de "antecedentes perinatales" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
  <v-dialog 
    v-model="dialog" 
    max-width="600px"
  >
  <template 
    #activator="{ on, attrs }">
    <v-btn block class="justify-start" outlined color="#7900ff" v-bind="attrs" v-on="on">
       <v-icon color="#7900ff">mdi-plus</v-icon> 
      ANTECEDENTES PERINATALES
    </v-btn>
  </template> 
<v-card height="600px">
  <v-card-title>
    <span>ANTECEDENTES PERINATALES</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col >
              <p class="mt-n3">Fecha del último ciclo menstrual</p>
              <v-text-field
                v-model="last_menstrual_cycle"
                outlined
                placeholder="2022/08/12"
              ></v-text-field>

              <p>Duración del ciclo</p>
              
              <v-text-field
                v-model="cycle_time"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
              
              <p>Último método anticonceptivo utilizado</p>
              <v-text-field
                v-model="contraceptive_method_use"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n2">Concepción asistida</p>
              <v-radio-group v-model="con" row>
                <v-radio color="#b380ff" label="Si" value="conYes"></v-radio>
                <v-radio v-model="assisted_conception" color="#b380ff" label="No" value="conNo"></v-radio>
              </v-radio-group>
              <v-text-field
                v-if="con == 'conYes'"
                v-model="assisted_conception"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3">FPP Final</p>
              <v-text-field
                v-model="final_ppf"
                outlined
                placeholder="2022/08/20"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-col class="ml-6">
        <v-btn
          height="50px"
          class="white--text save mb-5"
          color="#7900ff"
          large
          @click="perinatalPost"
          >Guardar cambios</v-btn
        >
        <v-btn
          v-bind="attrs"
          height="50px"
          class="restore ml-3 mb-5"
          color="#999999"
          outlined
          large
          v-on="on"
          >Restaurar todo</v-btn
        >
      </v-col>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  /* layout: 'medicalRecord', */
  components: {},
  data() {
    return {
      modal: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      medicamentos: [
        {
          name: 'Enalapril',
          mg: '10 mg',
          presentation: 'Tabletas',
          indication: '1 tableta cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
        {
          name: 'Losartán',
          mg: '50 mg',
          presentation: 'Comprimido',
          indication: '1 comprimido cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
      ],
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      con: '',
      support: '',
id:'',
      /* models to send data */
      patient_id: '',
      last_menstrual_cycle:'',
      cycle_time:'',
      contraceptive_method_use: '',
      assisted_conception:'',
      final_ppf:'',
    }
  },
  methods: {
    perinatalPost(){
      this.$axios
        .post('/api/v1/physician/medical-history/perinatal-background',{
              patient_id: this.patient_id,
              last_menstrual_cycle: this.last_menstrual_cycle,
              cycle_time: this.cycle_time,
              contraceptive_method_use: this.contraceptive_method_use,
              assisted_conception: this.assisted_conception,
              final_ppf: this.final_ppf,
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
    },
    
    perinatalPut(){
      this.$axios
        .post('api/v1/physician/medical-history/perinatal-background/',{
              last_menstrual_cycle: this.last_menstrual_cycle,
              cycle_time: this.cycle_time,
              contraceptive_method_use: this.contraceptive_method_use,
              assisted_conception: this.assisted_conception,
              final_ppf: this.final_ppf,
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
    },

    perinatalGet(){
      this.$axios.get('/api/v1/physician/medical-history/'+this.id+'/perinatal-background/',
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        this.last_menstrual_cycle = res.data.last_menstrual_cycle
        this.cycle_time = res.data.cycle_time
        this.contraceptive_method_use = res.data.contraceptive_method_use
        this.assisted_conception = res.data.contraceptive_method_use
        this.final_ppf = res.data.contraceptive_method_use
      })
    }
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  mounted() {
    this.perinatalGet()
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
  color: #999999;
}
p.sub {
  font-family: MontserratMedium;
  color: #999999;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
l{
  font-size: 90%;
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
.vradio {
  font-size: 5px;
}
</style>