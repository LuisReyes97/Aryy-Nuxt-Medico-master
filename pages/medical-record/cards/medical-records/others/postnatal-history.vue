<!-- seccion de "antecedentes postnatales" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
  <v-dialog scrollable v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn block class="justify-start" outlined color="#7900ff" v-bind="attrs" v-on="on">
       <v-icon color="#7900ff">mdi-plus</v-icon> 
        <l>ANTECEDENTES POSTsNATALES</l>
      </v-btn>
    </template>
    <v-card height="600px">
      <v-card-title>
        <span>ANTECEDENTES POSTNATALES</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" xl="12">
              <p>Detalles del parto</p>
              <v-text-field
                v-model="delivery_details"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3">Nombre del bebé</p>
              <v-text-field
                v-model="baby_name"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3">Peso al nacer</p>
              <v-text-field
                v-model="baby_weight"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3">Salud del bebé</p>
              <v-text-field
                v-model="baby_health"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n3 mb-n2">Tipo de alimentación</p>
              <v-radio-group style="font-family: Montserrat" v-model="alim" row>
                <v-radio
  
                  color="#b380ff"
                  label="Solo pecho"
                  value="alim1"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Solo fórmula"
                  value="alim2"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Pecho y fórmula"
                  value="Alim3"
                ></v-radio>
              </v-radio-group>
              <p class="mt-n3">Estado emocional</p>
              <v-text-field
                v-model="emotonial_state"
                class="mt-n3"
                style="font-family: Montserrat"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-col class="ml-6">
        <v-btn
          height="50px"
          class="white--text save mb-5"
          v-on:click="update"
          color="#7900ff"
          large
          @click="postnatalPost"
          >Guardar cambios</v-btn
        >
        <v-btn
          v-bind="attrs"
          v-on="on"
          height="50px"
          class="restore ml-3 mb-5"
          color="#999999"
          outlined
          large
          >Restaurar todo</v-btn
        >
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  layout: 'medicalRecord',
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
      cons: '',
      support: '',
      delivery_detail:'',
      baby_name: '',
      baby_weight: '',
      baby_health: '',
      type_of_feeding:'', 
      emotonial_state: ''

    }
  },

  methods: {
    postnatalPost() {
      this.$axios
        .post(`api/v1/physician/medical-history/postnatal-background/patient/${this.$route.params.medicalRecord}`,{
          delivery_details: this.delivery_details,
          baby_name: this.baby_name,
          baby_weight: this.baby_weight,
          baby_health: this.baby_health ,
          type_of_feeding: this.type_of_feeding,
          emotonial_state: this.emotonial_state
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
    },
    postnatalGet() {
      this.$axios
        .get( `api/v1/physician/medical-history/postnatal-background/patient/${this.$route.params.medicalRecord}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.delivery_details = res.data.data.delivery_details
          this.baby_name = res.data.data.baby_name
          this.baby_weight = res.data.data.baby_weight
          this.type_of_feeding = res.data.data.type_of_feeding
          this.emotonial_state = res.data.data.emotonial_state
        })
    },
    postnatalPut(){
      this.$axios
      .put(`api/v1/physician/medical-history/postnatal-background/patient/${this.$route.params.medicalRecord}`,{
        postnatal_background_id:  this.$route.params.medicalRecord,
        delivery_details: this.delivery_detail,
        baby_name: this.baby_name,
        baby_wight: this.bay_wight,
        type_of_feeding: this.type_of_feeding
      })
    },
    created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
    update() {
      this.$axios
        .put(
          'api/v1/medical-records/physician/allergies/patient/'+this.id,
          {
            patient_id: this.$route.params.medicalRecord,
            food_allergy:[
              this.food,
            ],
            drug_allergy:[
              this.drugss,
            ],
            environmental_allergy:[
              this.environmental,
            ]
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )  .then((res) => {
         this.alergiasalimentarias()
       
        })
    },
  },
  mounted() {
    this.postnatalGet()
    this.created()
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