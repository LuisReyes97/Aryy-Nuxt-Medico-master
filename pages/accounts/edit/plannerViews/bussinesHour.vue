<template>
  <div>
    <v-col class="mb-n7" md="11" cols="12">
        <p class="mt-4 mb-4">Horario para recepción de llamadas*</p>
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
      <v-col class="mb-n7 mt-n8" md="11" xl="12" cols="12">
        <v-row class="ml-0">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
            @change="setData"
              v-model="initialhour"
              class="textfield"
              color="#9966ff"
              placeholder="08:00 AM"
              outlined
              :items="hours"
            ></v-autocomplete>
          </v-col>

          <p class="mt-8">A</p>
          <v-col cols="11" sm="3" md="4" lg="4" xl="4">
            <v-autocomplete
            @change="setData"
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
            class="btn ml-n5 mt-5"
            color="#9966ff"
            text
            ><v-icon class="icon">mdi-plus-circle</v-icon></v-btn
          >
        </v-row>
        <v-row v-if="hour" class="ml-0 mt-n2">
          <p class="mt-8">De</p>
          <v-col cols="11" sm="3" xl="4">
            <v-select
            @change="setData"
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
            @change="setData"
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
      <v-col>
        <v-row class="mb-n10" v-if="lun">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Lun</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="(!inicio[0]  && hour)">No registrado</v-chip>
            <v-chip
              v-if="chipLun && inicio[0]"
              @click:close="chipLun = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0] && hour)"
              @click:close="chipLun2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip>
          </v-col>
          <!-- <v-col xl="3"  class="ml-n10"><v-chip>09:00 AM A 80:00 PM</v-chip></v-col> -->
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mar">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Mar</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipMar = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipMar2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="mie">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Mie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0] "
              @click:close="chipMie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipMie2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="jue">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Jue</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipJue = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipJue2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="vie">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Vie</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipVie = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipVie2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>

        <v-row class="mb-n10" v-if="sab">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Sab</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipSab = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipSab2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip>
          </v-col>
          <v-col xl="5"></v-col>
        </v-row>

        <v-row v-if="dom">
          <v-col class="mr-n10" xl="2"> <p class="weekday">Dom</p> </v-col>
          <v-col xl="11" class="mr-n10">
            <v-chip label v-if="!inicio[0]">No registrado</v-chip>
            <v-chip
              v-if="inicio[0]"
              @click:close="chipDom = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio }} a {{ final }}</span></v-chip
            >
            <v-chip
              v-if="(final2[0]  && hour)"
              @click:close="chipDom2 = false"
              close-icon="mdi-close"
              style="border: thin solid #7900ff"
              color="#f4edff"
              label
              close
              ><span class="hour">{{ inicio2 }} a {{ final2 }}</span></v-chip
            >
            <v-chip label v-if="!final2[0]">No registrado</v-chip></v-col
          >
          <v-col xl="5"></v-col>
        </v-row>
        <v-btn color="#9966ff" class="ml-n13 mt-n7"  @change="setData" @click="addDay"  text>
          <span>Agregar horario</span></v-btn>
      </v-col>
  </div>
            </v-col>
  </div>
</template>
<script>
export default {
  components:{
  },
  data() {
    return {
      lunes:'',
      martes:'',
      miercoles:'',
      jueves:'',
      viernes:'',
      sabado:'',
      domingo:'',
      
      valid: '',
      dias: [],
      hourss: [],
      inicio: [],
      final: [],
      inicio2: [],
      final2: [],
     
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
      lun: false, mar: false, mie: false, jue: false, vie: false, sab: false, dom: false,
      initialhour: '',
      endhour: '',
      initialhour2: '',
      endhour2: '',
        hours: [
        '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM',
      ],
       /* valores de los chips de horario | Genesis */
       chipLun: true, chipMar: true, chipMie: true, chipJue: true,
      chipVie: true, chipSab: true, chipLun2: true, chipMar2: true,
      chipMie2: true, chipJue2: true, chipVie2: true, chipSab2: true,
      matutino:'',
      vespertino:'',
    }
  },
  methods: {
    setData() {
      this.$emit('getData', this.lunes)
    },
   /* unir los horarios en una sola variable por turno  */
  addDay() {
     const rango1 = [this.initialhour, this.endhour]
     const rango2 = [this.initialhour2, this.endhour2]
     const turno1 = rango1.join(' a ')
     const turno2 = rango2.join(' a ')
     this.matutino=turno1
     this.vespertino=turno2
    },
   /*  mandar los dias en ingles */
    days(){
      if(this.lun===true){this.lunes='monday'}
      if(this.mar===true){this.martes='tuesday'}
      if(this.mie===true){this.miercoles='wednesday'}
      if(this.jue===true){this.jueves='thursday'}
      if(this.vie===true){this.viernes='friday'}
      if(this.sab===true){this.sabado='saturday'}
      if(this.dom===true){this.domingo='sunday'}
    },

  },
}
</script>

<style>
.v-list-item--link::before {
  background-color: #9966ff;
}
</style>