<template>
    <div>
        <v-col class="mb-n6" cols="12" xl="4">
                  <v-row v-if="lunes">
                    <v-col class="mr-n9 mt-1 mb-n5" cols="12" xl="2">
                      <p >{{ lunes }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="lun" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="lun" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="lun" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="lun" /></v-col></v-row>

                      <v-row v-if="martes" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ martes }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="mar" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="mar" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="mar" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="mar" /></v-col></v-row>

                      <v-row v-if="miercoles" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ miercoles }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="mie" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="mie" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="mie" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="mie" /></v-col></v-row>

                      <v-row v-if="jueves" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ jueves }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="jue" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="jue" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="jue" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="jue" /></v-col></v-row>

                      <v-row v-if="viernes" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ viernes }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="vie" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="vie" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="vie" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="vie" /></v-col></v-row>

                      <v-row v-if="sabado" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ sabado }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="sab" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="sab" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="sab" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="sab" /></v-col></v-row>

                      <v-row v-if="domingo" class="mt-n5">
                    <v-col class="mr-n9 mt-1  mb-n5" cols="12" xl="2">
                      <p >{{ domingo }}</p>
                    </v-col>
                    <v-col class="mr-n4" cols="6" xl="5">
                      <v-chip v-if="dom" color="#f4edff" label>{{
                        time1
                      }}</v-chip
                      ><br v-if="dom" />
                      </v-col>
                      <v-col cols="6" xl="5">
                      <v-chip v-if="dom" color="#f4edff" label>{{
                        time2
                      }}</v-chip
                      ><br v-if="dom" /></v-col></v-row>
                  </v-col>
    </div>
</template>


<script>
export default {
  layout: 'auth',
  components: {},
  data() {
    return {
      lunes: '',
      martes: '',
      miercoles: '',
      jueves: '',
      viernes: '',
      sabado: '',
      domingo: '',
      attention_time1: '',
      lun: '',
      mar: '',
      mie: '',
      jue: '',
      vie: '',
      sab: '',
      dom: '',
      horas: '',
      time1:'',
      time2:'',
      attention_time: '',
      time: null,
      id: '',
    }
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
          /* horario */
          this.time1 = res.data.data.calling_attetion_schedule[0].attention_time1
          this.time2 = res.data.data.calling_attetion_schedule[0].attention_time2

          this.lun = res.data.data.calling_attetion_schedule[0].day
          this.mar = res.data.data.calling_attetion_schedule[1].day
          this.mie = res.data.data.calling_attetion_schedule[2].day
          this.jue = res.data.data.calling_attetion_schedule[3].day
          this.vie = res.data.data.calling_attetion_schedule[4].day
          this.sab = res.data.data.calling_attetion_schedule[5].day
          this.dom = res.data.data.calling_attetion_schedule[6].day
          this.days()
        })
    },

    /* cambiar los dias de ingles a español */
    days() {
      if (this.lun === 'monday') {
        this.lunes = 'Lun'
      }else if(this.lun === 'n/a'){
        this.lun=false
      }
      if (this.mar === 'tuesday') {
        this.martes = 'Mar'
      }else if(this.mar === 'n/a'){
        this.mar=false
      }
      if (this.mie === 'wednesday') {
        this.miercoles = 'Mie'
      }else if(this.mie === 'n/a'){
        this.mie=false
      }
      if (this.jue === 'thursday') {
        this.jueves = 'Jue'
      }else if(this.jue === 'n/a'){
        this.jue=false
      }
      if (this.vie === 'friday') {
        this.viernes = 'Vie'
      }else if(this.vie === 'n/a'){
        this.vie=false
      }
      if (this.sab === 'saturday') {
        this.sabado = 'Sab'
      }else if(this.sab === 'n/a'){
        this.sab=false
      }
      if (this.dom === 'sunday') {
        this.domingo = 'Dom'
      }else if(this.dom === 'n/a'){
        this.dom=false
      }
    },

  },
}
</script>
