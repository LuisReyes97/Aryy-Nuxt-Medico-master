<template>
    <div>
        <p class="no-data" v-if="this.name===''">Sin datos registrados</p>
    <v-list-item
    v-for="medication in medications" :key="medication"
      v-else
      style="font-family: Montserrat"
      class="ml-n7 mt-n5 lista"
      two-line
    >
      <v-list-item-avatar class="mr-n1">
        <v-icon v-if="$route.name!='medical-record-view-patient'" color="green">mdi-check-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mt-2"
          >{{ medication }} 

          
        </v-list-item-title>
        <v-list-item-subtitle>
          1 comprimido cada 24 horas • 17/NOV/22 a 31/DIC/22
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </div>
</template>
<script>
export default {
  data() {
    return {
        name: '',
      idif: '',
      overlay: false,
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      medications: '',
      complete: false,
      incomplete: true,
      id:'',
	}
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
  mounted() {
    this.medicine()
  },
  methods: {
    medicine() {
      this.$axios
        .get(
          'api/v1/physician/medical-history/current-medication/'+this.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.medications = res.data.data.medication
          this.name = res.data.data.medication[0]
         
        })
    },

  },
}
</script>