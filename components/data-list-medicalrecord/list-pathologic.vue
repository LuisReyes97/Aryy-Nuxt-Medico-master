<template>
 <div>
  <p class="no-data" v-if="this.msg">Sin datos registrados</p>
  <p v-else-if="this.condicion=='true'">Sin antecedentes registrados</p>
   <div v-else>
    <v-list-item v-if="this.previous_surgeries!='No' && this.previous_surgeries!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cirugías previas</v-list-item-title>
        <v-list-item-subtitle
          >{{previous_surgeries}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.blood_transfusions!='No' && this.blood_transfusions!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Transfusiones</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_transfusions}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.diabetes!='No' && this.diabetes!==null"
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
          >{{diabetes}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.heart_diseases!='No' && this.heart_diseases!==null"
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
          >{{heart_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.blood_pressure!='No' && this.blood_pressure!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Presión arterial</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_pressure}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.thyroid_diseases!='No' && this.thyroid_diseases!==null"
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
          >{{thyroid_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.cancer!='No' && this.cancer!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cancer</v-list-item-title>
        <v-list-item-subtitle
          >{{cancer}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.blood_diseases!='No' && this.blood_diseases!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Enfermedades de la sangre</v-list-item-title>
        <v-list-item-subtitle
          >{{blood_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.kidney_stones!='No' && this.kidney_stones!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Cálculos renales</v-list-item-title>
        <v-list-item-subtitle
          >{{kidney_stones}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.hepatitis!='No' && this.hepatitis!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Hepatitis</v-list-item-title>
        <v-list-item-subtitle
          >{{hepatitis}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.trauma!='No' && this.trauma!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Traumatismos</v-list-item-title>
        <v-list-item-subtitle
          >{{trauma}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.respiratory_diseases!='No' && this.respiratory_diseases!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Patologías respiratorias</v-list-item-title>
        <v-list-item-subtitle
          >{{respiratory_diseases}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.gastrointestinal_pathologies!='No' && this.gastrointestinal_pathologies!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Patologías gastrointestinales</v-list-item-title>
        <v-list-item-subtitle
          >{{gastrointestinal_pathologies}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item
    v-if="this.ets!='No' && this.ets!==null"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Enfermedades de transmisión sexual</v-list-item-title>
        <v-list-item-subtitle
          >{{ets}}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
   </div>
  
  </div>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
        condicion:false,
        blood_pressure:'',
        blood_diseases: '',
        blood_transfusions:'',
        cancer:'',
        diabetes:'',
        ets:'',
        gastrointestinal_pathologies:'',
        heart_diseases:'',
        hepatitis:'',
        kidney_stones:'',
        previous_surgeries:'',
        respiratory_diseases:'',
        thyroid_diseases:'',
        trauma:'',
        msg:'',
        errordata:'',
        id:'',
    }
  },
  mounted() {
    this.datos()
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  methods: {
    /* obtener informacion | Genesis */
    datos() {
      this.$axios
        .get(
          'api/v1/medical-history/physician/pathological-background/patient/'+this.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.blood_pressure = res.data.data.blood_pressure
          this.blood_transfusions = res.data.data.blood_transfusions
          this.cancer = res.data.data.cancer
          this.diabetes = res.data.data.diabetes
          this.ets = res.data.data.ets
          this.blood_diseases = res.data.data.blood_diseases
          this.gastrointestinal_pathologies = res.data.data.gastrointestinal_pathologies
          this.heart_diseases = res.data.data.heart_diseases
          this.hepatitis = res.data.data.hepatitis
          this.kidney_stones = res.data.data.kidney_stones
          this.previous_surgeries = res.data.data.previous_surgeries
          this.respiratory_diseases = res.data.data.respiratory_diseases
          this.thyroid_diseases = res.data.data.thyroid_diseases
          this.trauma = res.data.data.trauma
        this.msg=res.data.msg
         this.condiciones() 
        
        }).catch((error)=>{
          this.errordata = ''
          this.errordata = error.response.data.errors
        })
    },
    condiciones(){
      if(this.blood_pressure==="No" && this.blood_transfusions==="No" && this.cancer==="No" && this.diabetes==="No" && this.ets==="No" && this.blood_diseases==="No" && this.gastrointestinal_pathologies==="No"
      && this.heart_diseases==="No" && this.hepatitis==="No" && this.kidney_stones==="No" && this.previous_surgeries==="No" && this.respiratory_diseases==="No" && this.thyroid_diseases==="No" && this.trauma==="No"){
        this.condicion='true'
      }
    }
  },
}
</script>
<style>
p{
  font-family: MontserratMedium;
  color: #4f565f;
}
[v-cloak] {
  display: none;
}
</style>