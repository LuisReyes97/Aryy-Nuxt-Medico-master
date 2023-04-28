<template>
  <div>
    <v-card class="pa-4">
      <v-card-title v-if="parentValue === 1"> Cita nueva </v-card-title>
      <v-card-title v-if="parentValue === 0"> Paciente nuevo </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" xl="4">
            <p class="formPatient">Teléfono*</p>
            <v-text-field hide-details outlined>
              <template #prepend-inner>
                <vue-country-code
                  enabled-country-code
                  style="border: 0px; font-family: Montserrat; color: black"
                  :preferred-countries="['MX', 'us', 'gb']"
                  default-country="mx"
                  @onSelect="onSelect"
                >
                </vue-country-code
              ></template>
            </v-text-field>
          </v-col>

          <v-col cols="12" xl="4">
            <p class="formPatient">Paciente*</p>
            <v-text-field
              placeholder="Escribe el nombre del paciente"
              outlined
              hide-details
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" xl="4">
            <p class="formPatient">Teléfono de emergencia*</p>
            <v-text-field hide-details outlined>
              <template #prepend-inner>
                <vue-country-code
                  enabled-country-code
                  style="border: 0px; font-family: Montserrat"
                  :preferred-countries="['MX', 'us', 'gb']"
                  default-country="mx"
                  @onSelect="onSelect"
                >
                </vue-country-code
              ></template>
            </v-text-field>
          </v-col>

          <v-col v-if="parentValue === 1" cols="12" xl="4">
            <p class="formPatient">Consultorio*</p>
            <v-autocomplete
              placeholder="Seleccione el consultorio"
              outlined
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <v-col v-if="parentValue === 1" cols="12" xl="4">
            <p class="formPatient">Fecha de la cita*</p>
            <v-dialog
              transition="slide-y-transition"
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  hide-details
                  append-icon="mdi-calendar"
                  outlined
                  v-model="date"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker locale="mx-es" v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  <span>Cancelar</span>
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  <span>OK</span>
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>

          <v-col v-if="parentValue === 1" cols="12" xl="4">
            <p class="formPatient">Horario*</p>
            <v-dialog
              transition="slide-y-transition"
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  hide-details
                  placeholder="Seleccione el horario"
                  v-model="time"
                  append-icon="mdi-menu-down"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">
                  <span>Cancelar</span>
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(time)">
                  <span>OK</span>
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>

          <v-col cols="12" xl="4">
            <p class="formPatient">Servicio*</p>
            <v-autocomplete
              :items="type"
              placeholder="Seleccione el tipo de servicio"
              outlined
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <v-col cols="12" xl="4">
            <p class="formPatient">¿De dónde nos conoce?*</p>
            <v-autocomplete
              :items="where"
              placeholder="Seleccione una opción"
              outlined
              hide-details
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row class="ml-n1 mr-n1">
          <v-col cols="12" xl="6">
            <v-btn v-if="parentValue===1" block x-large color="primary" @click="dialog = false">
              <span>Guardar y agendar</span>
            </v-btn>

            <v-btn v-if="parentValue===0" block x-large color="primary" @click="dialog = false">
              <span>Iniciar consulta</span>
            </v-btn>
          </v-col>

          <v-col cols="12" xl="6">
            <v-btn
              class="btn"
              block
              x-large
              outlined
              color="#999999"
              @click="setData"
            >
              <span >Cancelar</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCountryCode from 'vue-country-code'

Vue.use(VueCountryCode)

export default {
  props: ['parentValue'],
  components: {},
  data() {
    return {
        dialog: false,
      selectedCountry: '',
      modal: false,
      modal2: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      time: '',
      type: ['Primera consulta', 'Consulta subsecuente'],
      where: [
        'Por un amigo/conocido',
        'Por un familiar',
        'Anuncio en Facebook',
        'Anuncio en instagram',
        'Anuncio en Google',
      ],
    }
  },
  methods: {
    onSelect(data) {
      this.selectedCountry = data
    },
    setData() {
      this.$emit('getData', this.dialog=false)
    },
  },
}
</script>
<style lang="scss">
.v-card__title {
  font-size: 110%;
  color: #4f565f;
  font-family: MontserratBold;
  text-transform: uppercase;
}
.v-input {
  font-family: Montserrat;
}
p.formPatient {
  font-family: MontserratMedium !important;
  margin-bottom: 2%;
}
.v-list-item__title {
  font-family: Montserrat;
}

.v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: 15px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
}

span {
  font-size: 95%;
  font-family: MontserratMedium;
  text-transform: lowercase;
}

span::first-letter {
  text-transform: uppercase !important;
}

.btn {
  border: solid 2px #cccccc;
}
</style>