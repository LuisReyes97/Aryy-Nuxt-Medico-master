<template>
  <div>
    <v-app-bar flat height="150px" color="#ffffff" dense fixed hide-on-scroll>
      <v-btn icon color="black" @click="$router.back()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-row >  <v-col md="4" lg="4" xl="5"></v-col>
        <v-col md="4" lg="4" xl="4">
          <v-img
            class="ml-n8"
            :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
            max-width="150"
          ></v-img>
          <p class="consul mt-n7 ml-n6 prueba">Consultorios</p></v-col
        >
        <v-col ms="3" lg="3" xl="3"></v-col>
      </v-row>
    </v-app-bar>
    <v-card color="card" height="100%" flat class=" mt-16">
      <v-card-text class="pa-10">
        <v-row class="mt-4">
          <v-form class="d-flex justify-center mt-16 " ref="form" v-model="valid">
        
            <v-col md="10" lg="10" xl="9">
              <v-row>
                <v-col md="12" cols="12">
                  <p>Nombre del consultorio*</p>
                  <v-text-field
                    disabled
                    prepend-inner-icon="mdi-magnify"
                    v-model="facilities.name"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Nombre del consultorio"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="6" cols="12">
                  <p>Teléfono para citas*</p>
                  <v-text-field
                    disabled
                    v-model="facilities.phone"
                    color="#9966ff"
                    class="textfield"
                    placeholder="XXX XXX XXXX"
                    outlined
                  ></v-text-field>
               
                  </v-col>
                  <v-col md="6" cols="12">
                  <p>Extensión</p>
                  <v-text-field
                    disabled
                    v-model="extension"
                    color="#9966ff"
                    class="textfield"
                    placeholder="No. Extensión"
                    outlined
                  ></v-text-field>
                </v-col> <v-col  cols="12">
                  <p >Horario para recepción de llamadas*</p>
               <schedule-chips/>
                </v-col>
              
                <v-col md="4" cols="12">
                  <p>Código postal*</p>
                  <v-text-field
                    disabled
                    v-model="zipcode"
                    color="#9966ff"
                    maxlength="5"
                    counter="5"
                    class="textfield"
                    placeholder="00000"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Estado*</p>
                  <v-text-field
                    disabled
                    v-model="state"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Estado"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Ciudad o Municipio*</p>
                  <v-text-field
                    disabled
                    v-model="city"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Ciudad o Municipio"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Colonia*</p>
                  <v-text-field
                    disabled
                    v-model="suburb"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una colonia"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="8" cols="12">
                  <p>Ubicación*</p>
                  <v-text-field
                    disabled
                    v-model="address"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Escribe la calle avenida"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Número exterior*</p>
                  <v-text-field
                    disabled
                    v-model="number_ext"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Número exterior"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Número interior</p>
                  <v-text-field
                    disabled
                    v-model="number_int"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Número interior"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <p>Referencias*</p>
                  <v-text-field
                    disabled
                    v-model="reference"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Escribe referencias de la ubicación"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-7">
                <v-col cols="12" md="6" lg="6" xl="6">
                  <H1 class="mb-5">ACCESIBILIDAD</H1>

                  <v-checkbox
                    disabled
                    v-model="lift"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Ascensor con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="ramp"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Rampa con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="restroom"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios con accesos para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="area"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Área de descanso con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="sign"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Personal capacitado en lengua de señas"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="braille"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Señaletica con braile para personas invidentes"
                  ></v-checkbox>
                </v-col>
                <v-col md="6" lg="6" xl="6">
                  <H1 class="mb-5">PÚBLICOS USUALES</H1>
                  <v-checkbox
                    disabled
                    v-model="lgbt"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Amigable con la comunidad LGBTQ+"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="trans"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Espacio seguro para personas transgénero"
                  ></v-checkbox>
                  <br/>
                  <H1 class="mb-5 ">SERVICIOS</H1>
                  <v-checkbox
                    disabled
                    v-model="toilets"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="unisex"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitario unisex"
                  ></v-checkbox>
                  <v-checkbox
                    disabled
                    v-model="wifi"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Wi-Fi"
                  ></v-checkbox>
                </v-col>
                <div class="mt-5 mb-n15"></div>
              </v-row>
            </v-col>
           
          </v-form>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
  <script>
export default {
  layout: 'auth',
  components: {},
  data() {
    return {
      name: '',
      day: '',
      extension: '',
      city: '',

      parking: false,
      lift: false,
      ramp: false,
      restroom: false,
      area: false,
      sign: false,
      braille: false,

      lgbt: false,
      trans: false,
      toilets: false,

      unisex: false,
      wifi: false,
      address: '',
      number_ext: '',
      number_int: '',
      state: '',
      facilities: [],
      phone: '',
      zipcode: '',
      suburb: '',
      reference: '',
      inputs: [
        {
          name: '',
        },
      ],
      overlay: false,
      dialog: false,
      selectedItem: 1,
      time: null,
      menu2: false,
      modal2: false,
      valid: '',
      id: '',
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
  mounted() {
    this.getFacility()
  },
  created() {
    const facilityId = this.$route.params.id
    return facilityId
  },
  methods: {
    /*  metodo get para recibir datos de establecimiento | Genesis */
    getFacility() {
      this.$axios
        .get(`api/v1/facilities/${this.$route.params.watchFacility}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          this.id = res.data.data.id
          this.facilities = res.data.data
          this.consultorios = res.data.data.length
          this.zipcode = res.data.data.zipcode
          this.state = res.data.data.location.state
          this.city = res.data.data.city_id
          this.extension = res.data.data.extension
          this.suburb = res.data.data.location.suburb
          this.address = res.data.data.location.address
          this.number_ext = res.data.data.location.number_ext
          this.number_int = res.data.data.location.number_int
          this.reference = res.data.data.location.reference

          /*  accesibilidad */
          this.restroom =
            res.data.data.accessibility_and_others.accessibility.toilets_with_wheelchair_access
          this.area =
            res.data.data.accessibility_and_others.accessibility.rest_area_with_wheelchair_access
          this.sign =
            res.data.data.accessibility_and_others.accessibility.staff_trained_in_sign_language
          this.braille =
            res.data.data.accessibility_and_others.accessibility.braille_signage_for_blind_people
          this.lift =
            res.data.data.accessibility_and_others.accessibility.wheelchair_ramp
          this.ramp =
            res.data.data.accessibility_and_others.accessibility.wheelchair_lift

          /*  publicos usuales */
          this.lgbt =
            res.data.data.accessibility_and_others.usual_audiences.lgtb_friendly
          this.safe_space_for_transgender_people =
            res.data.data.accessibility_and_others.usual_audiences.lgtb_friendly

          /*  servicios */
          this.toilets = res.data.data.accessibility_and_others.services.toilets
          this.unisex =
            res.data.data.accessibility_and_others.services.unisex_toilets
          this.wifi = res.data.data.accessibility_and_others.services.wifi

        })
    },
  },
}
</script>
  
  <style>
.text {
  font-family: Montserrat;
  color: grey;
}
.vcheckbox {
  font-family: Montserrat;
}
.bgactive {
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}
.titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  text-transform: unset !important;
  color: black;
}
.titlee:hover {
  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
a {
  text-decoration: none !important;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn {
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
H1 {
  font-family: MontserratBold;
  font-size: 120%;
}
p {
  font-family: Montserrat;
  font-size: 1.7vh ;
  margin-bottom: -1px !important;
  color: #999999 !important;
}
span{
  font-size: 1.3vh !important;
 
}
.v-input__icon--prepend-inner .v-icon {
  color: #999999;
  width: 50px;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
}
.v-chip {
  margin-bottom: 0.7vh !important;
  border: thin solid #7900ff !important;
}
.theme--light.v-input--is-disabled {
  color: rgba(57, 12, 120, 0.38) !important;
}
p.consul{
  font-size: 2.4vh;
}
</style>