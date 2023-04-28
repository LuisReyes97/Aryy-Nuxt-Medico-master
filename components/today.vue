<template>
  <div class="mt-5">
    <p class="montserratMedium" style="font-size: 120%">Visitas de hoy</p>
    <v-list-item class="lista ml-n2">
      <v-list-item-content>
        <a style="color:#4f565f" class="montserratMedium">Enviar recordatorio <br />a todos hoy</a>
      </v-list-item-content>
      <v-list-item-avatar tile size="40">
        <v-btn icon>
            <v-img
          :src="require('@/assets/icons/icon_notification.svg')"
          max-width="23"
        ></v-img></v-btn
        ></v-list-item-avatar>
    </v-list-item>

    <v-card
    v-for="todo in todosFiltered" :key="todo.id_appointment"
      class="mx-auto mb-2"
      max-width="270"
      outlined
    >
      <!-- color="#1abc9c" -->
      <v-list-item class="lista" three-line>
        <v-sheet
          class="mr-5 ml-n4"
          color="#1abc9c"
          height="90"
          width="3"
        ></v-sheet>
        <v-list-item-content>
          <p class="montserratMedium">
            {{ todo.patient_full_name }}
          </p>
          <v-list-item-title class="montserratMedium">
            <span>{{ todo.appointment_type }}</span>
          </v-list-item-title>
          <v-list-item-subtitle class="montserratMedium">
            {{todo.appointment_time}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="40">
          <v-btn icon>
            <v-img
          :src="require('@/assets/icons/icon_notification.svg')"
          max-width="23"
        ></v-img></v-btn
          ></v-list-item-avatar
        >
      </v-list-item>
    </v-card>
<br/><br/>
    <p class="montserratMedium">Filtros</p>
    <v-checkbox
      value="primera" 
      v-model="selection"
      color="#9966ff"
      class="montserratMedium"
      hide-details
      label="Primera consulta"
    ></v-checkbox>
    <v-checkbox
      value="subsecuente"
      v-model="selection"
      color="#9966ff"
      class="montserratMedium"
      hide-details
      label="Subsecuente"
    ></v-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      type: '',
      hour: '',
      color: '',
      hora: '',
      selection:[],
      filtered: [],
      eventos: [],
    }
  },
  computed: {
    /*  filtrar por tipo de cita | Genesis */
    todosFiltered() {
      return this.eventos.filter((todo) => {
        return this.selection.every((select) => todo.appointment_type.toLowerCase().includes(select.toLowerCase()));
      });
    },
   /*  formattedDate() {
        return moment(this.todo.appointment_time).format('LT');
      } */
  },
  mounted() {
    this.today()
  },
  methods: {
    
    today() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'today',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.eventos = res.data.data
          this.prueba = res.data.data.appointment_time
          this.tipo = res.data.data[0].appointment_type
        })
    },
  },
/*  filtrar por tipo de cita | Genesis */
  watch: {
    selection: {
      handler() {
        this.filtered= []
        if (this.selection.length) {
          this.eventos.forEach(t => {
            this.selection.forEach(s => {
              if (t.appointment_type.split('_').find(w => w === s.toUpperCase())) {
                if (!this.filtered.find(f => f.appointment_type === t.appointment_type)) this.filtered = [ ...this.filtered, t]
              }
            })
          })
        } else {
          this.filtered = [...this.eventos]
        }
      },
      deep: true,
      immediate: true
    }
  },
}
</script>

<style scoped>
.montserratMedium {
  font-family: MontserratMedium;
}
span {
  color: #1abc9c;
  text-transform: capitalize;
 /*  font-family: MontserratBold; */
 font-size: 90%;
}
p{
    color: #4f565f;
}
</style>