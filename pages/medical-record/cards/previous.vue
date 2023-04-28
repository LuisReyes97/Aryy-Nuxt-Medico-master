<!-- seccion de citas anteriores | Genesis -->
<template>
  <div>
    <v-card
      v-for="date in dates"
      :key="date"
      class="mx-auto montserrat mb-5"
      max-width="100%"
      outlined
    >
      <v-list-item class="lista" two-line>
        <v-list-item-avatar tile size="70">
          <v-row>
            <v-col>
              <b style="font-size: 150%">{{date.day}}</b> <br />{{date.month}} <br /> {{date.year}}</v-col
            >
          </v-row>
        </v-list-item-avatar>
        <v-sheet class="mr-3" :color="date.status" height="100" width="3"></v-sheet>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            <p class="montserrat mb-0">{{date.diagnosis}}</p>
          </v-list-item-title>
          <v-list-item-subtitle v-if="date.name"
            >{{date.name}} • {{date.medicine}} • {{date.mg }} <br />
            {{date.presentation}}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar
          ><v-icon :color="date.status"
            >{{date.icon}}</v-icon
          >
          <v-icon>mdi-note-outline</v-icon>
          </v-list-item-avatar
        >
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'medicalRecord',
  data() {
    return {
      dates: [
       /*  ejemplo cita exitosa | Genesis */
        {
            day: '12', month: 'OCT', year: '2022',
            diagnosis: 'Gastroenteritis y colitis nerviosa',
            name: 'Peptobismol',
            medicine: 'Subsalicilato de Bismuto',
            mg: '',
            presentation: 'Tabletas',
            status: 'green',
            icon: 'mdi-checkbox-marked-circle',
        },
        {
            day: '5', month: 'SEPT', year: '2022',
            diagnosis: 'Diarrea infecciosa',
            name: 'Topron',
            medicine: 'Nifuroxsazida',
            mg: '400 mg',
            presentation: 'Capsula',
            status: 'green',
            icon: 'mdi-checkbox-marked-circle',
        },
        /*  ejemplo cita cancelada | Genesis */
        {
            day: '19', month: 'AGO', year: '2022',
            diagnosis: 'CITA CANCELADA',
            name: '',
            medicine: '',
            mg: '',
            presentation: '',
            status: 'red',
            icon: 'mdi-alert',
        },
         /*  ejemplo cita pospuesta | Genesis */
        {
            day: '5', month: 'JUN', year: '2022',
            diagnosis: 'CITA POSPUESTA',
            name: '',
            medicine: '',
            mg: '',
            presentation: '',
            status: 'amber',
             icon: 'mdi-alert',
        },
        {
            day: '1', month: 'ABR', year: '2022',
            diagnosis: 'CITA POSPUESTA',
            name: '',
            medicine: '',
            mg: '',
            presentation: '',
            status: 'amber',
             icon: 'mdi-alert',
        },
    ],
    }
  },
}
</script>
<style scoped>
.montserrat {
  font-family: Montserrat;
  font-size: 90%;
}
p.montserrat {
  font-size: 85%;
  margin-bottom: -5px;
}
</style>