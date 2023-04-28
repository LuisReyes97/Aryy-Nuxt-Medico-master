<template>
  <div>
    <v-sheet class="mt-n10" height="84">
      <v-toolbar flat>
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
        <v-btn
          width="5"
          height="20"
          color="#f4edff"
          class="mes mt-6 mr-n14"
          @click="viewMonth"
          v-if="this.type === 'day'"
        >
          Mes</v-btn
        >
        <v-spacer></v-spacer>
        <v-toolbar-title class="calendar mt-7" v-if="$refs.calendar">
          <l v-if="this.type === 'day'">{{
            this.$refs.calendar.$data.lastStart.day
          }}</l>
          {{ $refs.calendar.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mt-7" fab text small color="grey darken-2" @click="next">
          <v-icon color="#9966ff" x-large> mdi-chevron-right </v-icon>
        </v-btn>
      </v-toolbar>
    </v-sheet>
    <v-sheet height="46.6vh">
      <v-calendar
        hide-header
        ref="calendar"
        v-model="focus"
        event-text-color="white"
        class=" white--text"
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
        @click:more="viewDay"
        @click:date="viewDay"
      >
      </v-calendar>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focus: '',
      type: 'month',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: [],
      names: [],
    }
  },
  mounted() {
    this.$refs.calendar.checkChange()
    this.citas()
  },
  methods: {
    citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
        })
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    viewMonth({ date }) {
      this.focus = date
      this.type = 'month'
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    updateRange({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
<style>
.theme--light.v-calendar-weekly {
  background-color: #ffffff;
  border-top: #e0e0e0 0px solid;
  border-left: #e0e0e0 0px solid;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day {
  border-right: #e0e0e0 0px solid;
  border-bottom: #e0e0e0 0px solid;
}
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  border-right: #e0e0e0 0px solid;
  color: #000000;
}
.theme--light.v-calendar-daily {
  background-color: #FFFFFF;
  border-left: #e0e0e0 0px solid;
  border-top: #e0e0e0 0px solid;
}
.mes {
  font-family: Montserrat;
  text-transform: none;
}

</style>