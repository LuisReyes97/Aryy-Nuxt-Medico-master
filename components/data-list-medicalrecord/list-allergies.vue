<template>
    <div>
        <p class="no-data" v-if="this.drugss==='N/A' && this.environmental==='N/A' && this.food==='N/A'">Sin alergías conocidas</p>
        <p class="no-data" v-if="!this.idif">Sin alergías registradas</p>
      
    <div v-else>  
      <v-list-item
      v-if="this.drugss!='N/A' && this.drugss!=null"
        style="font-family: Montserrat"
        class="ml-n7 mt-n1 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
          
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Fármacos</v-list-item-title>
          <v-list-item-subtitle>{{ drugss }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.environmental!='N/A' && this.environmental!=null"
        style="font-family: Montserrat"
        class="ml-n7 mt-n5 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Factores ambientales</v-list-item-title>
          <v-list-item-subtitle>{{ environmental }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
      v-if="this.food!='N/A' && this.food!=null"
        style="font-family: Montserrat"
        class="ml-n7 mt-n5 lista"
        two-line
      >
        <v-list-item-avatar class="mr-n1">
          <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Alimentarias</v-list-item-title>
          <v-list-item-subtitle>{{ food }} </v-list-item-subtitle>
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
      food: '',
      environmental: '',
      drugs: '',
      drugss: '',
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      alim: '',
      farm: '',
      amb: '',
      drug_allergy: '',
      environmental_allergy: '',
      food_allergy: '',
      time: '',
      idif: '',
      errordata:'',
      id:'',
    }
  },
  methods: {
    alergiass() {
      this.$axios
        .get(
          'api/v1/medical-records/physician/allergies/patient/'+this.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.drugss = res.data.data.drug_allergy[0]
          this.environmental = res.data.data.environmental_allergy[0]
          this.food = res.data.data.food_allergy[0]
          this.time = res.data.data.created_at
          this.msg=res.data.data.drug_allergy[0]
        })
    },
  },

  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  mounted() {
    this.alergiass()
  },
}
</script>