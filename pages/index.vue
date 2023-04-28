<template>
  <v-container>
    <v-card-text>
      <h3 class="text_welcome mb-3" color="#4812d7">Bienvenido,</h3>
      <h4 class="text_welcome">{{ facilities }}</h4>
      <!-- <div class="mt-3">
        <p>
        Aún no ha terminado de configurar su perfil de,
        <nuxt-link to="/accounts/edit/account/">click aqui</nuxt-link></p>
      </div> -->
      <div class="mt-3">
        <p>
          Tiene <b>{{ length }} citas</b> el dia de hoy.
        </p>
      </div>
    </v-card-text>
    <v-card-subtitle class="pa-3 mt-n2 mb-n5">
     CONSULTAS</v-card-subtitle
    >
    <br />
    <v-row>
     <!--  <v-col cols="12" md="4">
        <dashboard-citas />
      </v-col> -->
      <v-col cols="12" md="6">
        <dashboard-marketing />
      </v-col>
      <v-col cols="12" md="6">
        <dashboard-assistant />
      </v-col>
      <!-- Citas proximas | Luis Reyes -->
      <v-col cols="12" md="6">
        <next-consultation />
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="card" class="pa-10" max-height="700">
          <calendar />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import nextConsultation from '~/components/dashboard/next-consultation.vue'
import calendar from '~/components/dashboard/calendar.vue'
export default {
  components: { nextConsultation, calendar },
  data() {
    return {
      length: '',
      name: [],
      facilities: null,
    }
  },

  methods: {
    getName() {
      this.$axios
        .get('/api/v1/physician/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.facilities = res.data.data.professional_name
          alert(res.data.data.professional_name)
        })
    },
    citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.length = res.data.data.length
          console.log(res)
        })
    },
  },

  mounted() {
    this.getName()
    this.citas()
  },
}
</script>


<style>
.text_welcome {
  color: #7900ff;
  font-family: 'Montserrat';
  font-size: 4vh;
}
p {
  font-family: MontserratBold;
  color: #999999;
  font-size: 120%;
}
b {
  font-family: MontserratMedium;
  color: #9966ff;
}
.v-card__subtitle{
  font-family: MontserratBold;
}
</style>
