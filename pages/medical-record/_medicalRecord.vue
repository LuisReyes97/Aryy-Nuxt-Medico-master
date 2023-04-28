<!-- vista de expediente en consulta | Genesis -->
<template >
  <div class="template">
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-row>
      <v-col lg="8" xl="9">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="title mb-3">INFORMACIÓN BÁSICA</h1>
          <basic-info />
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <H1 class="title mb-3">EXPEDIENTE MÉDICO</H1>
          <medical-record />
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <H1 class="title mb-3">CONSULTA MÉDICA</H1>
          <v-card><consultation /></v-card>
        </v-col>
      </v-col>

      <v-col md="3" lg="4" xl="3">
        <v-col cols="11" xs="11" sm="11" md="12" lg="12" xl="12">
          <h1 class="title mb-3">NOTAS INTERNAS</h1>
          <textarea v-model="notes"></textarea>
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <H1 class="title mb-3">CITAS ANTERIORES</H1>
          <appointments />
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import basicInfo from './cards/basic-info.vue'
import Consultation from './cards/consultation.vue'
import medicalRecord from './cards/medical-record.vue'
import Appointments from '~/components/appointments.vue'
export default {
  layout: 'medicalRecord',
  components: {
    basicInfo,
    medicalRecord,
    Consultation,
    Appointments,
    
  },
  data() {
    return {
      notes: '',
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Lista de pacientes',
          disabled: false,
          href: '/patients/list',
        },
        {
          text: 'Consulta',
          disabled: true,
          href: '/medical-record/medical-record',
        },
      ],
    }
  },
}
</script>
<style scoped>
.title {
  font-family: MontserratBold !important;
  color: #4f565f;
  font-size: 100% !important;
}
.theme--light.v-application {
  background: var(--v-background-base, white) !important;
}
.note {
  font-family: Montserrat;
}
.template {
  background-color: #f6f6f6;
  padding-left: 50px;
  padding-right: 3vw;
  margin-left: -50px;
  margin-right: -3%;
  margin-top: -10px;
}
/* estilos para notas tipo cuaderno | Genesis */
textarea {
  background: white;
  border: 1px solid #eeeeee;
  box-shadow: 1px 2px 0 #c7c7c7;
  font-family: 'Montserrat';
  font-size: 17px;
  line-height: 50px;
  padding: 11px 20px 0 20px;
  resize: none;
  height: 337px;
  width: 100%;
  background-image: -webkit-linear-gradient(
    top,
    transparent,
    transparent 49px,
    rgb(211, 211, 211) 0
  );
  -webkit-background-size: 100% 50px;
  background-size: 100% 50px;
}
</style>