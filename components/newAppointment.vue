<!-- Card para crear cita en calendario | Genesis -->
<template>
  <v-card>
    <v-card-title>CITA NUEVA </v-card-title>
    <v-alert
      v-if="errordate"
      style="font-family: Montserrat"
      dense
      outlined
      type="error"
    >
      Fecha no disponible, <strong>vuelva a intentarlo.</strong>
    </v-alert>
    <v-alert
      v-if="bad"
      style="font-family: Montserrat"
      dense
      outlined
      type="error"
    >
      Datos incorrectos, <strong>verifique.</strong>
    </v-alert>
    <v-card-text>
      <v-row class="montserrat">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Paciente*</p>
          <v-text-field
            v-model="patient"
            color="#7900ff"
            hide-details
            outlined
            placeholder="Escribe el nombre del paciente"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Teléfono*</p>
          <v-row>
            <v-col cols="3" xs="2" sm="1" md="2" lg="2" xl="2">
             <!--  libreria para select de codigo de paises | Genesis -->
              <vue-country-code
                style="height: 56px"
                enabled-country-code
                :preferred-countries="['MX', 'us', 'gb']"
                default-country="mx"
                @onSelect="onSelect"
              >
              </vue-country-code>
            </v-col>
            <v-col cols="9" xs="9" sm="11" md="10" lg="10" xl="10">
              <v-text-field
                v-model="phone"
                color="#7900ff"
                class="ml-5"
                hide-details
                outlined
                placeholder="XXX XXX XXXX"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Teléfono de emergencia*</p>
          <v-row>
            <v-col cols="3" xs="2" sm="1" md="2" lg="2" xl="2">
              <vue-country-code
                style="height: 56px"
                enabled-country-code
                default-country="mx"
                :preferred-countries="['MX', 'us', 'gb']"
                @onSelect="onSelect"
              >
              </vue-country-code>
            </v-col>
            <v-col cols="9" xs="9" sm="11" md="10" lg="10" xl="10">
              <v-text-field
                v-model="emergency_phone"
                color="#7900ff"
                class="ml-5"
                hide-details
                outlined
                placeholder="XXX XXX XXXX"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Consultorio*</p>
          <v-autocomplete
            v-model="facilitie"
            color="#7900ff"
            hide-details
            outlined
            placeholder="Nombre del consultorio"
          >
            <template #append>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0"
                  max-height="20"
                  max-width="20"
                  :src="require('@/assets/icons/icon_arrowDown.svg')"
                />
              </div> </template
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Fecha de la cita*</p>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
              v-model="date"
                color="#9966ff"
                class="mb-n9"
                outlined
                placeholder="Selecciona la fecha"
                v-bind="attrs"
                v-on="on"
              >
                <template #append>
                  <div style="width: 30px">
                    <v-img
                      style="margin: auto 0"
                      max-height="25"
                      max-width="22"
                      :src="require('@/assets/icons/iconos_citas.svg')"
                    />
                  </div>
                </template>
              </v-text-field>
            </template>
            <v-date-picker
            v-model="date"
              locale="MX-ES"
              color="#9966ff"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text class="btnn" color="#7900ff" @click="modal = false">
                <p class="can">Cancelar</p>
              </v-btn>
              <v-btn
                text
                class="btnn"
                color="#7900ff"
                v-on:click="modal = false"
                @click="$refs.dialog.save(date)"
              >
              <p class="can">Ok</p>
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Horario*</p>
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
              v-model="time"
                color="#9966ff"
                outlined
                placeholder="Selecciona el horario"
                class="mb-n9"
                v-bind="attrs"
                v-on="on"
              >
                <template #append>
                  <div style="width: 30px">
                    <v-img
                      style="margin: auto 0"
                      max-height="20"
                      max-width="20"
                      :src="require('@/assets/icons/icon_arrowDown.svg')"
                    />
                  </div> </template
              ></v-text-field>
            </template>
            <v-time-picker
            v-if="modal2"
              v-model="time"
              color="#9966ff"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn class="btnn" text color="#9966ff" @click="modal2 = false">
                <p class="can">Cancelar</p>
              </v-btn>
              <v-btn
                class="btnn"
                text
                color="#9966ff"
                @click="$refs.dialog.save(time)"
              >
              <p class="can">Ok</p>
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <p>Servicio*</p>
          <v-autocomplete 
          v-model="service"
          :items="items"
            hide-details
            color="#9966ff"
            outlined
            placeholder="Escribe el tipo de servicio"
          >
            <template #append>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0"
                  max-height="20"
                  max-width="20"
                  :src="require('@/assets/icons/icon_arrowDown.svg')"
                />
              </div> </template
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
          <v-btn
            block
            height="50px"
            class="white--text btn save"
            color="#7900ff"
            large
            @click="agendar"
            ><span class="span">Guardar cambios</span></v-btn
          >
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3">
          <v-btn
            block
            height="50px"
            class="restore btnn"
            color="#999999"
            outlined
            large
            ><span class="grey--text">Restaurar todo</span></v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import Vue from 'vue'
import VueCountryCode from 'vue-country-code'
Vue.use(VueCountryCode)
export default {
  data() {
    return {
      errordate: '',
      selectedCountry: '',
      patient: '',
      phone: '',
      emergency_phone: '',
      facilitie: '',
      time: '',
      service: '',
      error: '',
      bad: '',
      items: ["Consulta de primera vez","Consulta subsecuente"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      modal2: false,
    }
  },
  methods: {
   /*  metodo post para mandar los datos de la cita al servidor | Genesis */
    agendar() {
      this.$axios
        .post(
          'api/v1/calendar/appointments',
          {
            phone_number: this.phone,
            country_code: this.selectedCountry.dialCode,
            full_name: this.patient,
            emergency_number: this.emergency_phone,
            facility_id: '10',
            appointment_date: this.date,
            appointment_type: this.service,
            appointment_time: this.time,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((response) => {
          location.reload()
        })
        .catch((error) => {
          this.error = 'error'
          this.errordate = error.response.message
        })
    },
    onSelect(data) {
      this.selectedCountry = data
    },
  },
}
</script>
<style scoped>
p {
  font-family: MontserratMedium;
  font-size: 110%;
  color: #999999;
  margin-bottom: 4px;
}
.v-card > .v-card__title {
  font-size: 1.1rem;
  font-family: MontserratBold;
  color: #4f565f;
  font-weight: 500;
  letter-spacing: 0.0125em;
  padding: 16px 24px 10px;
}
.montserrat {
  font-family: Montserrat;
}

.btn {
  text-transform: capitalize;
}
.theme--light.v-time-picker-clock {
  background: #4f565f;
}
.v-application {
  font-family: 'Montserat';
  line-height: 1.5;
}
.btn-calendar {
  font-family: Montserrat;
  text-transform: uppercase;
}
p.can{
  font-family: Montserrat;
  color: #4f565f;
  text-transform: capitalize;
  font-size: 100%;
}
</style>