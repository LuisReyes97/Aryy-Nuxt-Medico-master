<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="breadcrumbs">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
    <account v-if="$vuetify.breakpoint.lgAndUp"/>
    <v-row>
       <v-row>
          <menu-planner v-if="$vuetify.breakpoint.lgAndUp"/>
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
      <v-card color="card" flat class="pa-3 mt-2">
        <v-card-subtitle class="pa-3 mt-n2"
          >CONFIGURACIÓN DE HORARIOS </v-card-subtitle
        >
        <v-card-text class="pa-3">
          <v-row>
            <v-col md="7" lg="6" xl="6" cols="12">
              <p>Consultorio*</p>
              <v-autocomplete
                color="#7900ff"
                @change="facilityInfo"
                v-model="userId"
                :items="items"
                item-text="name"
                item-value="id"
                return-object
                class="textfield mt-n3"
                placeholder="Seleccione el consultorio"
                outlined
              ></v-autocomplete>  <!-- | {{ userId.id }} | -->
            </v-col>
            <v-col md="5" lg="6" xl="6" cols="12"></v-col>
            <v-col md="7" lg="6" xl="6" cols="12">
              <h1 class="mt-4 mb-4">TIPO DE HORARIO</h1>
              <v-autocomplete
                color="#7900ff"
                v-model="type_schedule"
                :items="type"
                class="textfield"
                placeholder="Permanente"
                outlined
              ></v-autocomplete>
            </v-col>
            <v-col class="mb-n7" md="11" cols="12">
        <h1 class="mt-4 mb-4">HORARIOS DE CONSULTA</h1>
        <div>
        <v-btn-toggle borderless class="botones mb-n5 mt-n4">
          <v-checkbox
            v-model="lun"
            class="checkbox mr-5"
            color="#7900ff"
            label="Lun"
          ></v-checkbox>
          <v-checkbox
            v-model="mar"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mar"
          ></v-checkbox>
          <v-checkbox
            v-model="mie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Mie"
          ></v-checkbox>
          <v-checkbox
            v-model="jue"
            class="checkbox mr-5"
            color="#7900ff"
            label="Jue"
          ></v-checkbox>
          <v-checkbox
            v-model="vie"
            class="checkbox mr-5"
            color="#7900ff"
            label="Vie"
          ></v-checkbox>
          <v-checkbox
            v-model="sab"
            class="checkbox mr-5"
            color="#7900ff"
            label="Sab"
          ></v-checkbox>
          <v-checkbox
            v-model="dom"
            class="checkbox mr-5"
            color="#7900ff"
            label="Dom"
          ></v-checkbox>
        </v-btn-toggle>
      <v-col md="6" cols="12"></v-col>

      <!--  inputs para agregar los horarios desde un select | Genesis -->
   
        <v-row class="ml-0">
          <p class="mt-8">De</p>
          <v-col cols="4" xl="2">
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
          <v-col cols="4" xl="2">
            <v-autocomplete
              v-model="endhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 PM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>
          <v-btn
            @click="hour = !hour"
            class="icono ml-n5 mt-5"
            color="#9966ff"
            text
            ><v-icon>mdi-plus-circle</v-icon></v-btn
          >
        </v-row>
        <v-row v-if="hour" class="ml-0 mt-n2">
          <p class="mt-8">De</p>
          <v-col cols="4" xl="2">
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
          <v-col cols="4" xl="2">
            <v-select
              v-model="endhour2"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-select>
          </v-col>
        </v-row>
     <!-- chips para mostrar los horarios seleccionados | Genesis -->
      <v-col class="mt-3 ml-n3" cols="11" xl="6">
        <v-row class="mb-n10" v-if="lun">
          <v-col  xl="1"> <p class="weekday">Lun</p> </v-col>
          <v-col  xl="11" class="">
            <v-chip label v-if="(!initialhour )">No registrado</v-chip>
            <v-chip
              v-if="lun && initialhour"
              @click:close="lun = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }}<span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2 && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip>
          </v-col><v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mar">
          <v-col xl="1"> <p class="weekday">Mar</p> </v-col>
          <v-col xl="11" >
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="mar && initialhour"
              @click:close="mar = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mie">
          <v-col  xl="1"> <p class="weekday">Mie</p> </v-col>
          <v-col xl="11" >
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="mie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="jue">
          <v-col  xl="1"> <p class="weekday">Jue</p> </v-col>
          <v-col xl="11">
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="jue = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="vie">
          <v-col  xl="1"> <p class="weekday">Vie</p> </v-col>
          <v-col xl="11" >
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="vie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="sab">
          <v-col  xl="1"> <p class="weekday">Sab</p> </v-col>
          <v-col xl="11" >
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="sab = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip>
          </v-col>
          <v-col xl="5"></v-col>
        </v-row>

        <v-row v-if="dom">
          <v-col xl="1"> <p class="weekday">Dom</p> </v-col>
          <v-col xl="11">
            <v-chip label v-if="(!initialhour)">No registrado</v-chip>
            <v-chip
              v-if="initialhour"
              @click:close="dom = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour }} <span v-if="endhour"> a</span> {{ endhour }}</span></v-chip
            >
            <v-chip
              v-if="(initialhour2  && hour)"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ initialhour2 }} <span v-if="endhour2"> a</span> {{ endhour2 }}</span></v-chip
            >
            <v-chip label v-if="(!initialhour2 && hour)">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>
      </v-col><v-col cols="12"></v-col>
  </div>
            </v-col>
          </v-row>
          <v-row >
            <v-col  cols="10" xl="3">
              <h1 class="">DURACIÓN DE LA CONSULTA</h1>
              <v-text-field
                color="#7900ff"
                v-model="consultation_length"
                class="textfield"
                placeholder="XX"
                outlined
              ></v-text-field> </v-col
            ><v-col cols="2" xl="2">
              <p class="text mt-9 ml-n4">minutos</p> </v-col
            ><v-col md="6" cols="12"></v-col>
          </v-row>
          <v-row>
            <v-col  cols="10" xl="3"> 
              <h1 class="mb-4">TIEMPO PARA MOSTRAR AGENDA </h1>
              <v-autocomplete
                :items="timeagenda"
                color="#7900ff"
                v-model="agenda"
                class="textfield "
                placeholder="4 semanas"
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            
           <v-col xl="3" cols="10">
            <h1 class="mb-4">FESTIVOS NO LABORABLES </h1>
            <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            
            <v-combobox class="textfield"
                        outlined
                        color="#7900ff"
              v-model="dates"
              multiple
              chips
              small-chips
              placeholder="Seleccione fechas"
              v-bind="attrs"
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker
            v-model="dates"
            multiple
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
           </v-col> 
          </v-row>
        </v-card-text>
        <v-card-actions>
              <v-row >
                <v-col xl="2" cols="12">
              <v-btn
              block
                @click="putFacility"
                height="50px"
                class="white--text save mt-4"
                color="#7900ff"
                large
                ><span class="white--text">Guardar cambios</span></v-btn
              ></v-col>
             
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
            </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
  import Account from '../account.vue';
  import accountMenu from '../accountMenu.vue';
import menuPlanner from './menuPlanner.vue';
export default {
  components: {
     Account,menuPlanner,accountMenu
  },
  data() {
    return {
      mon:'',
      tue:'',
      wed:'',
      thu:'',
      fri:'',
      sat:'',
      sun:'',
      dates:[],
      agenda:'',
      lunes:'',
      martes:'',
      miercoles:'',
      jueves:'',
      viernes:'',
      sabado:'',
      domingo:'',
      parentmessage:'',
      userId:'',
      overlay:false,
      type: ['Permanente','Temporal'],
      dias: [],
      inicio: [],
      final: [],
      inicio2: [],
      final2: [],
      consultation_length: '',
      facility_name: '',
      type_schedule: '',
      initialhour: '',
      endhour: '',
      initialhour2: '',
      endhour2: '',
      attention_time: '',

      /*  v-models de los checkbox | Genesis */
      lun: false,
      mar: false,
      mie: false,
      jue: false,
      vie: false,
      sab: false,
      dom: false, 
      hours: [
        '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',  '03:00 AM',  '03:30 AM',  '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM','08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
        '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM','11:30 PM', '12:00 AM',
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
      facilities: [],
      dbSelect : '',
        items : [],
      timeagenda: ['4 Semanas'],
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Agenda',
          disabled: false,
          href: '/accounts/edit/planner-info',
        },
        {
          text: 'Horarios',
          disabled: true,
          href: '/accounts/edit/plannerViews/schedule-info',
        },
      ],
      idfacility:'',
      day:'',
      attention: '',
      rest:'',
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
  mounted() {
          this.getFacility();
      },
  methods: {
    getFacility() {
      this.$axios
      .get('/api/v1/facilities',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        this.items= res.data.data
        this.idfacility = res.data.data.id
      })
    },

    facilityInfo() {
      this.$axios
      .get(`/api/v1/facilities/${this.userId.id}`,{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        this.type_schedule=res.data.data.type_schedule
        this.consultation_length=res.data.data.consultation_length
        this.dates=res.data.data.schedule.free_days
        this.mon=res.data.data.schedule.week[0].day      
        this.tue=res.data.data.schedule.week[1].day
        this.wed=res.data.data.schedule.week[2].day
        this.thu=res.data.data.schedule.week[3].day
        this.fri=res.data.data.schedule.week[4].day
        this.sat=res.data.data.schedule.week[5].day
        this.sun=res.data.data.schedule.week[6].day

        this.hour1=res.data.data.schedule.week[0].attention_time
        this.hour2=res.data.data.schedule.week[0].rest_hours
        this.daysGet()
        this.splitHours()
      })
    },
    putFacility() {
      this.addDay()
      this.days()
  this.$axios
    .put(
      `api/v1/schedule/facilities/${this.userId.id}`,
      {
        type_schedule: this.type_schedule,
      
        consultation_length: this.consultation_length,
        schedule:{
          free_days: this.dates,
          week: [
            {
              day: this.lunes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.martes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.miercoles,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.jueves,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.viernes,
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.sabado,
             
             
              attention_time: this.attention,
              rest_hours: this.rest
            },
            {
              day: this.domingo,
              attention_time: this.attention,
              rest_hours: this.rest
            },
          ],
        }
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      this.overlay=true
    })
},     
  /* unir los horarios en una sola variable por turno  */
  addDay() {
     const rango1 = [this.initialhour, this.endhour2]
     const rango2 = [this.endhour, this.initialhour2]
     const turno1 = rango1.join(' a ')
     const turno2 = rango2.join(' a ')
     this.attention=turno1
     this.rest=turno2

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
    daysGet(){
      if(this.mon==='monday'){this.lun=true}
      else if(this.mon==='n/a'){this.lun=false}

      if(this.tue==='tuesday'){this.mar=true}
      else if(this.tue==='n/a'){this.mar=false}

      if(this.wed==='wednesday'){this.mie=true}
      else if(this.wed==='n/a'){this.mie=false}

      if(this.thu==='thursday'){this.jue=true}
      else if(this.thu==='n/a'){this.jue=false}

      if(this.fri==='friday'){this.vie=true}
      else if(this.fri==='n/a'){this.vie=false}

      if(this.sat==='saturday'){this.sab=true}
      else if(this.sat==='n/a'){this.sab=false}

      if(this.sun==='sunday'){this.dom=true}
      else if(this.sun==='n/a'){this.dom=false}
    },

 /*    separar horarios por turno */
    splitHours(){
      const hora1 = (this.hour1).split('a')
      const attention1=(hora1[0])
      const attention2=(hora1[1])
      
      const hora2 = (this.hour2).split('a')
      const rest1=(hora2[0])
      const rest2=(hora2[1])

      const attention=[attention1,rest1]
      const rest=[attention2,rest2]
     this.initialhour=(attention.join('a '))
      this.initialhour2=(rest.join(' a'))
      if(this.initialhour2){this.hour=true}
    },
  
   
    save(time) {
      this.$refs.dialog[0].save(time)
    },
  },
}
</script>

<style>
.btnhour{
  font-family: Montserrat;
  color: #9966ff;
  text-transform: capitalize;
}
.chip {
  font-size: 10%;
}
p.weekday {
  font-family: MontserratBold;
  color: black;
}
span.hour {
  font-family: Montserrat;
  color: #7900ff;
  font-size: 100%;
}
.checkbox {
  font-family: Montserrat;
}
.text {
  font-family: MontserratMedium;
  color: black;
  font-size: 1.3vh;
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
  font-family: 'MontserratMedium', sans-serif;
  font-size: 15px;
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
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
span {
  font-family: Montserrat;
  font-size: 1.5vh;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
  }
  .v-icon.icono{
    border: 0px !important;
  }
</style>



