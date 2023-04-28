<template>
    <div>
        <p class="no-data" v-if="!this.vaccine">Sin datos registrados</p>
    <v-list-item
    v-else
    v-for="vacuna in vacunass" :key="vacuna.id"
      style="font-family: Montserrat"
      class="ml-n7 mt-n5 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mt-2"> 
             {{vacuna.vacination[0].vaccine}}  • {{vacuna.vacination[0].application_date}} 
        </v-list-item-title>
        <v-list-item-subtitle>
         {{vacuna.vacination[0].dose}} • {{vacuna.vacination[0].lot_number}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
      id:'',
    }
  },
  methods: {
    reloadPage(){
      this.$router.go()
  },
   /*  metodo para obtener datos de vacunacion | Genesis */
    vacunas() {
      this.$axios
        .get('api/v1/physician/medical-history/vaccination-history/'+this.id, {
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
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  mounted(){
    this.vacunas()
  },
  computed: {
    
    },
}
</script>
<style>
p.no-data{
  color: #999999;
  margin-left: 3vh;
  margin-top: 1vh;
}
</style>