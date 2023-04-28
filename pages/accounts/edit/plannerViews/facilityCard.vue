   <!-- card para mostrar datos de consultorio | Genesis -->
<template>
  <div>
    <p class="empty" v-if="!facilities[0]">
      Todavía no tienes consultorios registrados.
    </p>
    <v-card
      flat
      class="mt-5"
      v-for="facility in facilities"
      :key="facility"
      color="card"
    >
      <v-row>
        <v-img
          class="ml-5 mr-2 mt-3"
          :src="require('@/assets/icons/icon_CitaConsultorio.svg')"
          max-width="5vh"
          max-height="5vh"
        ></v-img>
        <v-col cols="9" xs="11" sm="11" md="3" lg="3" xl="3"
          ><p class="mt-3" id="facility_name">{{ facility.name }}</p></v-col
        >
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="6"
          ><p class="mt-3" id="address">
            {{ address }}, {{ number_ext }} {{ number_int }}, {{ state }}
          </p></v-col
        >

        <v-col xl="1">
          <v-btn-toggle borderless class="botones d-flex justify-end">
            <v-btn
              :to="'/accounts/edit/plannerviews/' + facility.id"
              v-model="check"
              class="iconos"
              icon
            >
              <v-img
                :src="require('@/assets/icons/icon_watch.svg')"
                max-width="25"
              ></v-img>
            </v-btn>

            <v-btn
              :to="'/accounts/edit/plannerviews/edit/' + facility.id"
              v-model="check"
              class="iconos ml-n3"
              icon
            >
              <v-img
                :src="require('@/assets/icons/icon_editlist.svg')"
                max-width="25"
              ></v-img>
            </v-btn>

            <v-dialog v-model="dialog2" persistent max-width="550">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="iconos ml-n3 mr-n3" icon>
                  <v-img
                    :src="require('@/assets/icons/icon_delete.svg')"
                    max-width="25"
                  ></v-img>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5 justify-center">
                  <p class="reset">
                    ¿Está seguro de eliminar el establecimiento?
                  </p>
                </v-card-title>
                <v-card-actions class="reset">
                  <v-btn color="#9966ff" text @click="dialog2 = false">
                    <p class="actions">Cancelar</p>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#9966ff"
                    text
                    @click="deleteCard(facility.id)"
                    v-on:click="dialog2 = false"
                  >
                    <p class="actions">Confirmar</p>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      dialog: false,
      horas: [],
      facilities: [],
      props: {
        facilities: Object,
      },
      check: '',
      dialog2: '',
      name: '',
      address: '',
      number_ext: '',
      number_int: '',
      state: '',
      selectedItem: 1,
      consultorios: [],
    }
  },
  mounted() {
    console.log('verificando')
    this.infoFacility()
    const facilityId = this.$route.params.id
    return facilityId
  },
  methods: {
    /*   metodo get para mostrar datos en card | Genesis */
    infoFacility() {
      this.$axios
        .get('api/v1/facilities', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.facilities = res.data.data
          this.consultorios = res.data.data.length
          this.name = res.data.data[0].name
          this.address = res.data.data[0].location.address
          this.number_ext = res.data.data[0].location.number_ext
          this.number_int = res.data.data[0].location.number_int
          this.state = res.data.data[0].location.state
        })
    },
    deleteCard(id) {
      this.$axios
        .delete('api/v1/facilities/' + id, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log('Datos eliminados')
          console.log(res)
          location.reload()
        })
    },
  },
}
</script>
<style scoped>
span {
  font-family: MontserratMedium;
  color: #999999;
}
p {
  text-transform: capitalize !important;
}
p.empty {
  text-transform: none !important;
}
p.reset {
  text-transform: none !important;
  font-size: 2.3vh !important;
}
p.actions {
  font-family: Montserrat;
  color: #7900ff !important;
  font-size: 1.7vh !important;
}
</style>