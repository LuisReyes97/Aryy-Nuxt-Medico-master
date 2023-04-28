<template>
    <div>
        <p>{{hourss.day}}</p>
        <v-col md="6" cols="12"></v-col>
  <v-col md="1" lg="1" xl="1" class="mt-4"></v-col>
        <!-- chips para mostrar los horarios seleccionados | Genesis -->
        <v-col>
          <v-row class="mb-n10" v-if="lun">
<v-sheet v-for="hour in attention_time" :key="hour">
<p>aaa</p>
</v-sheet>

            <v-col class="mr-n16" xl="2"> <p class="weekday">Lun</p> </v-col>
            <v-col xl="12" class="mr-n16">
             <!--  <v-chip label v-if="!inicio[0]">No registrado</v-chip> -->
              <v-chip
                @click:close="chipLun = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">aaaa</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipLun2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip>
            </v-col>
            <!-- <v-col xl="3"  class="ml-n10"><v-chip>09:00 AM A 80:00 PM</v-chip></v-col> -->
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row class="mb-n10" v-if="mar">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Mar</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipMar = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipMar2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
            >
  
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row class="mb-n10" v-if="mie">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Mie</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipMie = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipMie2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
            >
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row class="mb-n10" v-if="jue">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Jue</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipJue = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipJue2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
            >
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row class="mb-n10" v-if="vie">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Vie</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipVie = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipVie2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
            >
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row class="mb-n10" v-if="sab">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Sab</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipSab = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipSab2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip>
            </v-col>
            <v-col xl="5"></v-col>
          </v-row>
  
          <v-row v-if="dom">
            <v-col class="mr-n16" xl="2"> <p class="weekday">Dom</p> </v-col>
            <v-col xl="12" class="mr-n16">
              <v-chip label v-if="!inicio[0]">No registrado</v-chip>
              <v-chip
                v-if="inicio[0]"
                @click:close="chipDom = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
              >
              <v-chip
                v-if="final2[0]"
                @click:close="chipDom2 = false"
                close-icon="mdi-close"
                style="border: thin solid #7900ff"
                color="#f4edff"
                label
                close
                ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
              >
              <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
            >
            <v-col xl="5"></v-col>
          </v-row>
          <v-btn color="#9966ff" class="btnhour ml-n5" @click="addDay" text>
            Agregar horario</v-btn>
        </v-col>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        hourss: [],
        schedule: '',
        day: '',
        attention_time: '',
        dias: [],
        inicio: [],
        final: [],
        inicio2: [],
        final2: [],
  
        initialhour: '',
        endhour: '',
        initialhour2: '',
        endhour2: '',
        /* valores de los chips de horario | Genesis */
        chipLun: true, chipMar: true, chipMie: true, chipJue: true,
        chipVie: true, chipSab: true, chipLun2: true, chipMar2: true,
        chipMie2: true, chipJue2: true, chipVie2: true, chipSab2: true,
  
        /*  v-models de los checkbox | Genesis */
        lun: false,
        mar: false,
        mie: false,
        jue: false,
        vie: false,
        sab: false,
        dom: false,
  
        days: [
          { value: 0, name: 'Lun' },
          { value: 1, name: 'Mar' },
          { value: 2, name: 'Mie' },
          { value: 3, name: 'Jue' },
          { value: 4, name: 'Vie' },
          { value: 5, name: 'Sab' },
          { value: 6, name: 'Dom' },
        ],
  
        hours: [
          '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',
          '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
          '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM',
        ],
        inputs: [
          {
            name: '',
          },
        ],
        hour: false,
        visible: false,
        time: null,
        menu2: false,
        modal2: false,
        time2: null,
        menu: false,
        modal: false,
        selectedItem: 1,
      }
    },
  
    methods: {
      getHour(){
      this.$axios
          .get('api/v1/facilities', {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
          })
          .then((res) => {
            console.log(res)
            console.log('exito en GET')
            this.hourss = res.data.data[0].schedule
            this.day = res.data.data[0].schedule[0].day
            this.attention_time = res.data.data[0].schedule[0].attention_time
         
          })
            },
      addDay() {
        const initialHour = [this.initialhour]
        const hourInitial = initialHour.join()
        this.inicio = hourInitial
        const endHour = [this.endhour]
        const hourFinal = endHour.join()
        this.final = hourFinal
  
        const initialHour2 = [this.initialhour2]
        const hourInitial2 = initialHour2.join()
        this.inicio2 = hourInitial2
        const endHour2 = [this.endhour2]
        const hourFinal2 = endHour2.join()
        this.final2 = hourFinal2
  
        const time = [this.inicio + ' a ' + this.final]
        const time2 = [this.inicio2 + ' a ' + this.final2]
        const attentiontime2 = time.join(' ')
        this.attentiontimee = attentiontime2
  
        const attentiontime3 = time2.join(' ')
        this.attentiontime4 = attentiontime3
  
        if (!this.hour) {
          this.attentiontime4 = []
        }
  
        const horario = [this.attentiontimee + this.attentiontime4]
        const horario2 = horario.join()
        this.attentiontime = horario2
        console.log(this.attentiontime)
      },
  
      getFacility() {
        this.$axios
          .post('/api/v1/facilities', {
            schedule: [
              {
                day: this.lun,
                attention_time: this.attention_time,
              },
              {
                day: this.mar,
                attention_time: this.attention_time,
              },
              {
                day: this.mie,
                attention_time: this.attention_time,
              },
              {
                day: this.jue,
                attention_time: this.attention_time,
              },
              {
                day: this.vie,
                attention_time: this.attention_time,
              },
              {
                day: this.sab,
                attention_time: this.attention_time,
              },
              {
                day: this.dom,
                attention_time: this.attention_time,
              },
            ],
            type_schedule: this.type_schedule,
            consultation_length: this.consultation_length,
          })
          .then((response) => {
            console.log(response.data.data)
            localStorage.setItem('token', response.data.access_token)
          })
          .catch((error) => {
            /*   alert(error.response.data.errors.email) */
            console.log(error)
          })
      },
      putFacility() {
        this.$axios
          .put('/api/v1/physician', {})
          .then((response) => {
            console.log(response.data.data)
            localStorage.setItem('token', response.data.access_token)
          })
          .catch(console.log('error'))
      },
    },
    mounted() {
            console.log('verificando');
            this.addDay();
        },
  }
  </script>
  <style>
  .v-list-item--link::before {
    background-color: #9966ff;
  }
  </style>