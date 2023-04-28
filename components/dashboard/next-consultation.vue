<template>
    <div>
      <v-card color="card" class="mt-3 mb-7" v-for="evento in eventos" :key="evento">
        <v-row>
        <v-col cols="2" xl="1">
          <v-img
              class="ml-5 mt-5"
              :src="require('@/assets/icons/icon_consulta.svg')"
              width="150%"
            ></v-img
          ></v-col>
          <v-col>
        <v-card-text class="position-relative">
          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap">
            <div class="me-2 mb-2">
              <v-card-title color="#7900ff" class="nombre pt-0 px-0"> {{evento.patient_full_name}} </v-card-title>
              <v-card-subtitle class="text-xs pa-0">
                {{evento.appointment_date}}  {{evento.appointment_time}}
              </v-card-subtitle>
            </div>
            <v-col
              cols="4"
              order="1"
              order-lg="2"
            >
              <div>
                <v-btn color="#f4edff" class="btn" block><span class="btn">Cambiar fecha</span> </v-btn>
              </div>
              <div>
                <v-btn
                @click="$router.push('/medical-record/' + evento.id_appointment)"
                class="btn_detail white--text mt-2" 
                block   
                color="#7900ff"
                ><span>Iniciar consulta</span> </v-btn>
            </div>
            </v-col>
          </div>
        </v-card-text>
      </v-col></v-row>
      </v-card>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        eventos: []
    }
    },
    mounted(){
      this.citas()
    },
    methods:{
      citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.eventos = res.data.data
          console.log(res)
        })
    },
    startConsultation(){
      
    }
    }
    
  }
  </script>
  <style scoped>
  .btn{
    color: #7900ff !important;
  border: 0px;
    text-transform: none;
    font-family: MontserratMedium;
  }
  .btn_detail{
      text-transform: capitalize ;
      text-transform: none;
    font-family: MontserratMedium;
  }
  .v-card__title{
    font-family: MontserratBold;
    font-size: 125%;
  }
  .v-card__subtitle{
    font-family: MontserratMedium;
    font-size: 120%;
    color: #999999;
  }
  </style>