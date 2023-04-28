
<template>
  <div>
    <div v-if="!this.errordata">
      <v-list-item
      v-if="this.diabetes_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Diabetes</v-list-item-title>
          <v-list-item-subtitle
            >{{ diabetes_family }} • {{ diabetes_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.diseases_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Cardiopatías</v-list-item-title>
          <v-list-item-subtitle
            >{{ diseases_family }} • {{ diseases_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.pressure_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Presión arterial alta o baja</v-list-item-title>
          <v-list-item-subtitle
            >{{ pressure_family }} • {{ pressure_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.thyroid_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Enfermedades tiroideas</v-list-item-title>
          <v-list-item-subtitle
            >{{ thyroid_family }} • {{ thyroid_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.blood_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Enfermedades de la sangre</v-list-item-title>
          <v-list-item-subtitle>{{blood_family}} • {{blood_type}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.cancer_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Cáncer</v-list-item-title>
          <v-list-item-subtitle
            >{{ cancer_family }} • {{ cancer_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.kidney_family!='No'"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-lin
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Cálculos renales</v-list-item-title>
          <v-list-item-subtitle
            >{{ kidney_family }} • {{ kidney_type }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </div>
    <p class="no-data" v-else>Sin datos registrados</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      diabetes_family: '',
      diabetes_type: '',
      diseases_family: '',
      diseases_type: '',
      pressure_family: '',
      pressure_type: '',
      thyroid_family: '',
      thyroid_type: '',
      cancer_family: '',
      cancer_type: '',
      blood_diseases: '',
      kidney_family: '',
      kidney_type: '',
      blood_family:'',
      blood_type: '',
      null:'',
      errordata:'',
      id:'',
      
    }
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  mounted() {
    this.datos()
  },
  methods: {
    /* obtener informacion | Genesis */
    datos() {
      
      this.$axios
        .get(
          `api/v1/medical-history/physician/hereditary-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          /* this.null=res.data.data.blood_diseases
          this.blood_family=res.data.data.blood_diseases.type
          this.blood_type=res.data.data.blood_diseases.family */
          this.diabetes_family = res.data.data.diabetes.family
          this.diabetes_type = res.data.data.diabetes.type
          this.diseases_family = res.data.data.heart_diseases.family
          this.diseases_type = res.data.data.heart_diseases.type
          this.pressure_family = res.data.data.blood_pressure.family
          this.pressure_type = res.data.data.blood_pressure.type
          this.thyroid_family = res.data.data.thyroid_diseases.family
          this.thyroid_type = res.data.data.thyroid_diseases.type
          this.cancer_family = res.data.data.cancer.family
          this.cancer_type = res.data.data.cancer.type
          this.kidney_family = res.data.data.kidney_stones.family
          this.kidney_type = res.data.data.kidney_stones.type
        }).catch((error) => {
          this.errordata = ''
          this.errordata = error.response.data
          
        })
    },
  },
}
</script>