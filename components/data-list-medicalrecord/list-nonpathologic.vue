<template>
  <div>
  <div v-if="this.null!=null">
    <v-list-item v-if="this.type_activity!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Actividad física</v-list-item-title>
        <v-list-item-subtitle
          >Tipo: {{ type_activity }} • Dias a la semana:
          {{ days_week }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.horas_sueño!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Horas de sueño</v-list-item-title>
        <v-list-item-subtitle>{{ horas_sueño }} horas</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.cigarettes!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Tabaquismo</v-list-item-title>
        <v-list-item-subtitle
          >Cigarrillos por dia: {{ cigarettes }} • Tipo:
          {{ typeSmoke }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.alcohol!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Alcoholismo</v-list-item-title>
        <v-list-item-subtitle
          >Frecuencia semanal: {{ alcohol }} dias a la semana • Tipo:
          {{ typeAlcohol }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.diet!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Dieta</v-list-item-title>
        <v-list-item-subtitle>Tipo: {{ diet }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.other_substances!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Otras sustancias</v-list-item-title>
        <v-list-item-subtitle>{{ other_substances }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.soñar!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Sueños al dormir</v-list-item-title>
        <v-list-item-subtitle>{{ soñar }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="this.descanso!='No'"
      style="font-family: Montserrat"
      class="ml-n7 mt-n1 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Descanso al dormir</v-list-item-title>
        <v-list-item-subtitle>{{ descanso }}</v-list-item-subtitle>
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
      type_activity: '',
      days_week: '',
      horas_sueño: '',
      soñar: '',
      descanso: '',
      cigarettes: '',
      typeSmoke: '',
      alcohol: '',
      typeAlcohol: '',
      diet: '',
      other_substances: '',
      null:'',
      activityerror:'',
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
    datos() {
      this.$axios
        .get(
          'api/v1/medical-history/physician/non-pathological-background/patient/'+this.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.null= res.data.data.alcoholim

          this.type_activity = res.data.data.physical_activity.type_of_activity
          this.days_week = res.data.data.physical_activity.days_of_the_week

          this.horas_sueño = res.data.data.rest_time.hours_of_sleep
          this.soñar = res.data.data.rest_time.dreams_while_sleeping
          this.descanso = res.data.data.rest_time.rest_when_sleeping
         
          this.cigarettes = res.data.data.smoking.number_of_cigarettes
          this.typeSmoke = res.data.data.smoking.type
          this.alcohol = res.data.data.alcoholim.weekly_frequency
          this.typeAlcohol = res.data.data.alcoholim.type

          this.diet = res.data.data.diet
          this.other_substances = res.data.data.other_substances
        }).catch((error) => {
          this.activityerror = ''
          this.activityerror = error
        })
    },
  },
}
</script>