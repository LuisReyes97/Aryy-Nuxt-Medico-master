<template>
          <v-card  color="card" flat >
      <v-card-text  >
          <v-form class="d-flex justify-center " ref="form" v-model="valid">
         
            <v-col md="10" lg="10" xl="10">
              <v-row>
                <v-col md="12" cols="12">
                  <p>Nombre del consultorio*</p>
                  <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    v-model="facility_name"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Nombre del consultorio"
                    outlined
                  ></v-text-field>
                  <v-input class="input mb-n9 mt-4"
                    ><v-icon class="mr-3" color="#9966ff" size="15px"
                      >mdi-information</v-icon
                    >Realizaremos una búsqueda de tu establecimiento en Google,
                    si no aparece puedes agregarlo desde aqui.</v-input
                  >
                </v-col>
                <v-row v-for="input in inputs" :key="input.id" class="ml-1 mt-2">
                  <v-col md="6" cols="12">
                  <p>Teléfono para citas*</p>
                  <v-text-field :for="input.id"
                    v-model="phone_number"
                    color="#9966ff"
                    class="textfield mb-5"
                    placeholder="XXX XXX XXXX"
                    outlined
                  ></v-text-field>
                 </v-col>
                  <v-col md="6" cols="12">
                  <p>Extensión (opcional)</p>
                  <v-text-field 
                    v-model="extension"
                    color="#9966ff"
                    class="textfield"
                    placeholder="No. Extensión"
                    outlined
                  ></v-text-field>
                  
                </v-col>  </v-row>
                  <v-col class="mb-n7" md="11" cols="12">
                    <v-btn @click="addInput" class="btn ml-n5 mt-n5" color="#9966ff" text
                    ><v-icon class="icon ">mdi-plus-circle</v-icon><span>Agregar otro
                    número</span></v-btn>
        <p>Horario para recepción de llamadas*</p> 
        <v-col class="mt-n7 mb-n4" cols="12" xl="8">
        <v-row>
        <v-col cols="3" xl="1">
          <v-checkbox
            v-model="lun"
            class="checkbox mr-5"
            color="#7900ff"
            label="Lun"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
          <v-checkbox
            v-model="mar"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mar"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
           <v-checkbox
            v-model="mie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mie"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
          <v-checkbox
            v-model="jue"
            class="checkbox mr-5"
            color="#7900ff"
            label="Jue"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
          <v-checkbox
            v-model="vie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Vie"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
          <v-checkbox
            v-model="sab"
            class="checkbox mr-5"
            color="#7900ff"
            label="Sab"
          ></v-checkbox></v-col>
          <v-col cols="3" xl="1">
          <v-checkbox
            v-model="dom"
            class="checkbox mr-5"
            color="#7900ff"
            label="Dom"
          ></v-checkbox></v-col>
        </v-row></v-col>

      <!--  inputs para agregar los horarios desde un select | Genesis -->
      <v-col class="mb-n7 mt-n8" md="11" xl="6" cols="12">
        <v-row class="ml-0">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
              v-model="initialhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>

          <p class="mt-8">A</p>
          <v-col cols="10" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
              v-model="endhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 PM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>
          <v-col cols="1">
          <v-btn
            @click="hour = !hour"
            class="btn ml-n7 mt-2"
            color="#9966ff"
            text
            ><v-icon class="icon">mdi-plus-circle</v-icon></v-btn
          ></v-col>
        </v-row>
        <v-row v-if="hour" class="ml-0 mt-n2">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" xl="4">
            <v-select
              v-model="initialhour2"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-select>
          </v-col>
          <span class="mt-8">A</span>
          <v-col cols="11" sm="3" xl="4">
            <v-select
              v-model="endhour2"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-select>
          </v-col>
        </v-row> </v-col
      ><v-col md="1" lg="1" xl="1" class="mt-4"></v-col>
      <!-- chips para mostrar los horarios seleccionados | Genesis -->
      <v-col xl="9">
        <v-row class="mb-n10" v-if="lun">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Lun</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="lun = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2 && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip>
          </v-col>
          <!-- <v-col xl="3"  class="ml-n10"><v-chip>09:00 AM A 80:00 PM</v-chip></v-col> -->
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mar">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Mar</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="mar = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="!initialhour2 && hour">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mie">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Mie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="mie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="jue">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Jue</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="jue = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span> </v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="vie">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Vie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="vie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="sab">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Sab</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="sab = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span> </v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip>
          </v-col>
          <v-col xl="5"></v-col>
        </v-row>

        <v-row v-if="dom">
          <v-col class="mr-n10" xl="1"> <p class="weekday">Dom</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!initialhour">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="dom = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour">a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2">a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2  && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>
      </v-col>
            </v-col>
                
            
                <v-col  md="4" cols="12">
                  <p>Código postal*</p>
                  <v-text-field
                    v-model="zip_code"
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
                    v-model="reference"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Escribe referencias de la ubicación"
                    outlined
                  ></v-text-field>
                <!--   <v-text-field
                    v-model="coordinates"
                    color="#9966ff"
                    class="textfield"
                    placeholder="coordenada"
                    outlined
                  ></v-text-field> -->
                </v-col>
              </v-row>
              <v-row class="mt-7">
                <v-col cols="12" md="6" lg="6" xl="6">
                  <H1 class="mb-5">ACCESIBILIDAD</H1>
                  <v-checkbox
                    v-model="parking"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Estacionamiento con acceso al establecimiento"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="lift"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Ascensor con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ramp"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Rampa con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="restroom"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios con accesos para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="area"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Área de descanso con acceso para silla de ruedas"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="sign"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Personal capacitado en lengua de señas"
                  ></v-checkbox>
                  <v-checkbox
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
                    v-model="lgbt"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Amigable con la comunidad LGBTQ+"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="trans"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Espacio seguro para personas transgénero"
                  ></v-checkbox>
                  <br/>
                  <H1 class="mb-5 ">SERVICIOS</H1>
                  <v-checkbox
                    v-model="toilets"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitarios"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="unisex"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Sanitario unisex"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="wifi"
                    class="vcheckbox"
                    color="#7900ff"
                    hide-details
                    label="Wi-Fi"
                  ></v-checkbox>
                </v-col>
               <v-col xl="1" cols="12">
                  <v-btn
                  v-on:click="create"
                    height="50px"
                    class="white--text save mt-4 mb-4"
                    color="#7900ff"
                    large
                    ><span class="save">Guardar cambios</span></v-btn
                  >
                  <v-overlay :value="overlay">
                    <v-alert
                      class="rounded-xl"
                      icon="mdi-check-circle"
                      color="green"
                      >Datos actualizados correctamente.</v-alert
                    >
                  </v-overlay>
                </v-col>
              </v-row>
            </v-col>
         
          </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  components:{
  },
  data() {
    return {
      
      lunes:'', martes:'', miercoles:'', jueves:'', viernes:'', sabado:'', domingo:'',
      valid: '',
      dias: [],
      hourss: [],
      facility_name: '',
      phone_number: '',
      extension: '',
      zip_code: '',
      state: '',
      city: '',
      suburb: '',
      address: '',
      number_ext: '',
      number_int: '',
      reference: '',
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
      coordinates: '',
      horas: '',
      name: '',
      day: '',
      inputs: [
        {
          name: '',
        },
      ],
       hour: false,
      overlay: false,
      dialog: false,
      selectedItem: 1,
      time: null,
      menu2: false,
      modal2: false,
      lun: false,
      mar: false,
      mie: false,
      jue: false,
      vie: false,
      sab: false,
      dom: false,
      initialhour: '',
      endhour: '',
      initialhour2: '',
      endhour2: '',
        hours: [
        '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM','09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM', 
      ],
      matutino:'',
      vespertino:'',
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
  },
  methods: {
     /*    método post para añadir un consultorio | Genesis */
     create() {
      this.addDay()
      this.days()
      this.$axios
      .post('api/v1/facilities/full', {
        
        name: this.facility_name,
        location: 
          {
            address: this.address,
            state: this.state,
            suburb: this.suburb,
            number_ext: this.number_ext,
            number_int: this.number_int,
            reference: this.reference,
          },
          phone: this.phone_number,
          extension: this.extension,
          zipcode: this.zip_code,
          calling_attetion_schedule: [
            {
              day: this.lunes,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.martes,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.miercoles,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.jueves,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.viernes,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.sabado,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
            {
              day: this.domingo,
              attention_time1: this.matutino,
              attention_time2: this.vespertino
            },
          ],
          accessibility_and_others: 
          {
            accessibility:
              {
                parking_with_access_to_the_establishment: this.ramp,
                wheelchair_lift_or_ramp: this.ramp,
                wheelchair_lift: this.lift,
                wheelchair_ramp: this.ramp,
                toilets_with_wheelchair_access: this.restroom,
                rest_area_with_wheelchair_access: this.area,
                staff_trained_in_sign_language: this.sign,
                braille_signage_for_blind_people: this.braille,
              }
            ,
            usual_audiences:
              {
                lgtb_friendly: this.lgbt,
                safe_space_for_transgender_people: this.trans,
              },
            services:
              {
                toilets: this.toilets,
                unisex_toilets: this.unisex,
                wifi: this.wifi,
              },
            
          },
          city_id: '2',
          coordinates: "123456789"
      }, 
      { 
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then((response) => {
        this.overlay=true
      })
    },
    
   /* unir los horarios en una sola variable por turno  */
  addDay() {
     const rango1 = [this.initialhour, this.endhour]
     const rango2 = [this.initialhour2, this.endhour2]
     const turno1 = rango1.join(' a ')
     const turno2 = rango2.join(' a ')

     this.matutino=turno1
     if(turno2===' a '){
      this.vespertino=null
     }else{
      this.vespertino=turno2
     }
    },
   /*  mandar los dias en ingles */
   days(){
      if(this.lun===true){this.lunes='monday'}
      else if(this.lun===false){this.lunes='n/a'}
      if(this.mar===true){this.martes='tuesday'}
      else if(this.mar===false){this.martes='n/a'}
      if(this.mie===true){this.miercoles='wednesday'}
      else if(this.mie===false){this.miercoles='n/a'}
      if(this.jue===true){this.jueves='thursday'}
      else if(this.jue===false){this.jueves='n/a'}
      if(this.vie===true){this.viernes='friday'}
      else if(this.vie===false){this.viernes='n/a'}
      if(this.sab===true){this.sabado='saturday'}
      else if(this.sab===false){this.sabado='n/a'}
      if(this.dom===true){this.domingo='sunday'}
      else if(this.dom===false){this.domingo='n/a'}
    },

    save(start, end) {
      this.$refs.dialog[0].save(start, end)
    },
    add(index) {
      this.inputs.push({ name: '' })
    },
    remove(index) {
      this.inputs.splice(index, 1)
    },
    reset() {
      this.$refs.form.reset()
    },
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
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
  font-size: 1.6vh !important;
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
  font-size: 120%;
  color: #999999 !important;
}
p.span {
  font-family: Montserrat;
  font-size: 120%;
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
</style>