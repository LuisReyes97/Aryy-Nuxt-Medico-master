
<template>
  <div>
    <v-row class="mt-n3">
      <v-card color="card" v-show="!$vuetify.breakpoint.xs" flat class="mr-6">
        <date-picker @getData="getData" /><today
      /></v-card>
      <!-- Calendario vista dia |Genesis -->
      <v-col>
        <v-breadcrumbs class="breadcrumbs" :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-card>
          <v-sheet height="84">
            <v-toolbar flat>
              <v-btn
              style="background-color: #7900ff"
              width="10%"
              outlined
              color="white"
              class="mr-4 today"
              @click="setToday"
            >
              <span class="today"
                >Este <br />
                mes</span
              >
            </v-btn>

              <v-spacer class="mr-16"></v-spacer>
              <v-btn
                class="mt-7 ml-5"
                fab
                text
                small
                color="grey darken-2"
                @click="prev"
              >
                <v-icon x-large color="#9966ff"> mdi-chevron-left </v-icon>
              </v-btn>
              <v-toolbar-title class="calendar mt-7" v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-btn
                class="mt-7"
                fab
                text
                small
                color="grey darken-2"
                @click="next"
              >
                <v-icon color="#9966ff" x-large> mdi-chevron-right </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    width="10%"
                    class="list white--text mt-7 ml-5 rounded-lg"
                    outlined
                    v-on="on"
                  >
                    <span background="#5a09ff">{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list style="font-family: Montserrat">
                  <v-list-item @click="type = 'day'" to="/calendario/dayView">
                    <v-list-item-title>Día</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'" to="/calendario/week">
                    <v-list-item-title>Semana</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'" to="/calendario/month">
                    <v-list-item-title>Mes</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="800">
            <v-calendar
            ref="calendar"
            interval-width="80px"
            interval-height="80px"
            v-model="focus"
            event-text-color="white"
            class="calend white--text"
            locale="mx-es"
            :type="type"
            color="#7900ff"
            event-start="appointment_start"
            event-end="appointment_start_end"
            event-name="patient_full_name"
            event-color="#1abc9c"
            :events="evento"
            style="font-family: Montserrat"
            :short-intervals="false"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
              >
            </v-calendar>
            <v-dialog
              width="1040px"
              v-model="newDate"
              offset-x
              :close-on-content-click="false"
            >
              <new-appointment />
            </v-dialog>
            <v-dialog
              width="640px"
              v-model="selectedOpen"
              offset-x
              :close-on-content-click="false"
              :activator="selectedElement"
            >
              <v-card color="card" min-width="350px" flat>
                <div class="d-flex justify-end">
                  <v-btn
                    class="mb-n5"
                    dark
                    icon
                    color="grey"
                    @click="selectedOpen = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
                <v-card-text>
                  <br />
                  <v-row>
                    <v-col>
                      <h1 class="eventName">
                        {{ selectedEvent.patient_full_name }}
                      </h1>
                      <p class="eventPhone mt-5">
                        No. {{ selectedEvent.id_appointment }}
                      </p>
                      <p class="eventPhone mt-n3">{{ number }}</p>
                    </v-col>
                    <v-col xl="4"
                      ><v-btn large width="192px" color="#999999" outlined>
                        <span class="titleAction">Reagendar cita</span>
                      </v-btn>
                      <v-dialog v-model="dialog" persistent max-width="450">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            large
                            width="192px"
                            class="mt-2 mb-3"
                            color="red"
                            outlined
                          >
                            <span class="titleAction2" color="red"
                              >cancelar cita</span
                            >
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="text-h5 justify-center">
                            <p class="reset">
                              ¿Está seguro de cancelar la cita?
                            </p>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn color="#9966ff" text @click="dialog = false">
                              <p class="confirm">No</p>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="#9966ff"
                              text
                              v-on:click="cancelAppointment"
                              @click="dialog = false"
                            >
                              <p class="confirm">Si</p>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <div class="mt-5">
                    <v-row>
                      <v-col cols="2" xs="2" sm="1" md="1" lg="1" xl="1"
                        ><v-img
                          :src="require('@/assets/icons/Iconos_CITAS.svg')"
                          max-width="23"
                        ></v-img
                      ></v-col>
                      <v-col>
                        <p class="infor">
                          {{ date }}
                        </p>
                        <p class="infor mt-n3">
                          {{ selectedEvent.appointment_time }} -
                          {{ selectedEvent.appointment_time_end }} hrs
                        </p>
                        <p class="type mt-n3">
                          {{ selectedEvent.appointment_type }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n6">
                      <v-col cols="2" xs="2" sm="1" md="1" lg="1" xl="1">
                        <v-img
                          :src="require('@/assets/icons/icon_ubi.svg')"
                          max-width="23"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <p class="infor">
                          {{ selectedEvent.facility_name }}
                        </p></v-col
                      >
                    </v-row>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="eventAction"
                    outlined
                    color="green"
                    @click="selectedOpen = false"
                    ><v-icon color="green">mdi-eye</v-icon>
                    <span class="eventAction ml-3">ASISTIÓ</span>
                  </v-btn>
                  <v-btn
                    class="eventAction"
                    outlined
                    color="red"
                    @click="selectedOpen = false"
                  >
                    <v-icon color="red">mdi-eye-off</v-icon>
                    <span class="eventAction ml-3">NO ASISTIÓ</span>
                  </v-btn>
                </v-card-actions>
                <br />
              </v-card>
            </v-dialog>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      color: '',
      dialog: false,
      number: '',
      value: '',
      prueba: '',
      newDate: false,
      show: false,
      ready: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Semana',
        day: 'Dia',
        '4day': '4 Dias',
      },
      selectedEvent: {},
      selectedElement: null,
      start: null,
      end: null,
      selectedOpen: false,
      evento: [],
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Calendario',
          disabled: false,
          href: '/calendario/month',
        },
        {
          text: 'Dia',
          disabled: true,
          href: '/calendario/dayView',
        },
      ],
      colors: ['#1abc9c', '#3498db'],
    }
  },
  computed: {
    cal() {
      return this.ready ? this.$refs.calendar : null
    },
    nowY() {
      return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
    },
  },
  mounted() {
    this.$refs.calendar.checkChange()
    this.ready = true
    this.scrollToTime()
    this.updateTime()
    this.citas()
  },
  methods: {
    /*  metodo para traer todas las citas registradas en el servidor | Genesis */
    citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.evento = res.data.data
          console.log(res)
        })
    },
    /* obtener datos de cita por ID | Genesis */
    citaId() {
      this.$axios
        .get(
          'api/v1/calendar/appointments/' + this.selectedEvent.id_appointment,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.cita = res.data.data
          this.number = res.data.data.patient.user_phone_number
          this.date = res.data.data.appointment_date
          console.log(res)
        })
    },
    /* cancelar cita | Genesis */
    cancelAppointment() {
      this.$axios.put(
        'api/v1/calendar/appointments/' + this.selectedEvent.id_appointment,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
    },
    /* mostrar datos de evento seleccionado | Genesis */
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        )
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }
      nativeEvent.stopPropagation()
      this.citaId()
    },

    addEvent() {
      this.newDate = true
    },
    getCurrentTime() {
      return this.cal
        ? this.cal.times.now.hour * 60 + this.cal.times.now.minute
        : 0
    },
    scrollToTime() {
      const time = this.getCurrentTime()
      const first = Math.max(0, time - (time % 30) - 30)
      this.cal.scrollToTime(first)
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000)
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    /* recibir datos de componente date picker | Genesis */
    getData(data) {
      this.focus = data;
    },
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.v-btn__content {
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
}
.calend {
  box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  color: white;
}
v-calendar-weekly__head {
  color: black;
}

v-row {
  border-radius: 30px;
}

v-event-summary {
  background-color: aqua;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #cccccc;
}
.today {
  text-transform: capitalize;
  color: white;
  font-size: 1.5vh;
}
.caja {
  margin-left: 4vh;
  margin-right: 4vh;
}

h4 {
  text-transform: capitalize;
  font-family: 'Montserrat';
  color: black;
}

v-col {
  margin-top: 1em;
}

.theme--light.v-calendar-weekly.v-calendar-weekly__day:hover {
  color: #f4edff;
}

.v-event-summary {
  color: white;
  font-family: 'Montserrat';
  font-size: 15px;
  text-transform: capitalize;
}

.content-calendar {
  margin-top: 2rem;
  margin-left: 2vh;
  margin-right: 2vh;
}
.list {
  margin-left: 2rem;
  width: 7rem;
  background: #7900ff;
}
/* estilos para barra de busqueda | Genesis */
.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 2rem;
}
.v-input__icon--prepend-inner .v-icon {
  color: #cccccc;
}
span {
  font-size: 1rem;
  font-family: MontserratMedium;
  align-items: start;
  color: white;
  text-transform: lowercase;
}
span::first-letter {
  text-transform: uppercase;
}
.v-calendar-weekly__head {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 20px;
}
.v-calendar-weekly__head-weekday {
  flex: 1 0 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0px 4px 0px 4px;
  font-size: 16px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.v-btn__content {
  font-size: 14px;
  text-transform: capitalize;
  font-family: 'Montserrat';
}
.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #f7f7f7;
}
.titleAction {
  text-transform: uppercase;
  font-size: 90%;
  color: gray;
}
.titleAction2 {
  text-transform: uppercase;
  font-size: 90%;
  color: red;
}
p.infor {
  font-family: MontserratBold;
  font-size: 110%;
}
p.type {
  font-family: Montserrat;
  font-size: 110%;
}
p.eventPhone {
  font-size: 120%;
  color: gray;
  font-family: Montserrat;
}
h1.eventName {
  font-size: 220%;
  color: #7900ff;
  font-family: Montserrat;
}
.eventAction {
  color: black;
  text-transform: capitalize;
}
.v-breadcrumbs {
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 8px 12px;
    padding-left: 12px;
}
.v-toolbar__title {
  font-size: 1.25rem;
  font-family: montserratBold;
  line-height: 1.5;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>