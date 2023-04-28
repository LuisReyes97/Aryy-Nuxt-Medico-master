<template>
  <div>
    <v-container>
    <v-row>
    <v-col cols="12" md="2">
      <v-select style="font-family: Montserrat"
        v-model="sortBy"
        flat
        outlined
        dense
        solo-inverted
        hide-details
        :items="keys"
      ></v-select>
      </v-col>
      <v-col cols="12" md="4" >
        <v-text-field
          v-model="search"
          class="search"
          color="grey"
          dense
          background-color="white"
          outlined
          label="Búsqueda   "
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2">
        <v-btn outlined>Importar</v-btn>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn outlined>Exportar</v-btn>
      </v-col>
    </v-row>  
    <v-data-table
      @click:row="rowClick"
      :headers="headers"
      :items="items"
      :search="search"
      hide-default-footer
    >
      
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :color="getColor(item.status)"
        dark
      >
        {{ item.status }}
      </v-chip>
    </template>

    <!-- ACCIONES POR ITEMS -->
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn
        color="purple"
        dark
        x-small
        @click="editItem(item)"
      >
        <v-icon  small dark>
          mdi-eye
        </v-icon>
      </v-btn>
      <v-btn
        color="red"
        dark
        x-small
        @click="deleteItem(item)"
      >
        <v-icon  small dark>
          mdi-delete
        </v-icon>
      </v-btn>
    </template>
    </v-data-table>
    <v-row class="ma-4 d-flex justify-end" wrap>
      <v-col class="ma-4 d-flex justify-end" cols="12" md="6">
        <v-pagination
          color="#7900ff"
          v-model="page"
          :length="pageCount"
          :total-visible="5"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      search:'',
      sortBy:'',
      users: '',
      idDate:'',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      keys: [
        'Nombre',
        'Teléfono',
        'Última cita',
      ],
      headers: [
        {
          text: 'Nombre completo',
          value: 'name',
        },
        {
          text: 'Teléfono',
          value: 'phone_number',
        },
        {
          text: 'Ultima cita',
          value: 'last_appointment',
        },
        {
          text: 'Status',
          value: 'status',
        },
        {
          text: 'Acciones',
          value: 'actions',
        },
      ],
      items: [],
    }
  },
  methods: {
    GET_DATA() {
      this.$axios
        .get('/api/v1/physician/list-patients/', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          console.log(response)
          const obj = response.data.data
          const tamano = obj.length
          for (let i = 0; i < tamano; i++) {
            const objeto = {
              name: obj[i].patient.full_name,
              phone_number: obj[i].patient.user_info.phone_number,
              last_appointment: obj[i].last_appointment,
              status: obj[i].status,
              idPatient: obj[i].patient_id,
              idAppointment: obj[i].id
            }
            this.items.push(objeto)
          }
        })
    },

  /*   acceder al expediente cachando el id */
    rowClick: function (item, row) {
      this.users = row.item.idPatient
      this.$router.push('/medical-record/' + this.users)
    },

    getColor (status) {
        const notassisted = "not-assisted"
        const cancelled = "cancelled"
        if (status  === notassisted) return 'grey'
        else if (status  === cancelled) return 'red'
        else return 'green'
      },
  },

  mounted() {
    this.GET_DATA()
  },
}
</script>
<style>
@media screen and (max-width: 810px) {
    .select, .option-btn{
        display:none;
    }
}

.theme--light.v-input {
  color: #7900ff !important; 
}

.v-application .primary--text {
  color: #7900ff !important; 
  color: #7900ff !important; 
}

.theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot {
  background: #f4edff;
}

.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections {
  color: #7900ff;
}
</style>