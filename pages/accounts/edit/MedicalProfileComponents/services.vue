<template>
  <div>
    <v-row>
      <v-card flat>
        <menu-med />
      </v-card>
      <v-col md="10" lg="9" xl="10">
        <v-card flat height="800px" class="pa-3 mt-2">
          <v-form ref="form" v-model="valid">
            <v-card-subtitle class="pa-3 mt-n2 mb-n5"
              ><H1 class="mb-5">SERVICIOS</H1></v-card-subtitle
            >
            <v-card-text class="pa-3">
              <v-row>

<!--------------------------- CAMPO DDE CITA POR PRIMERA VEZ ----------------------->
                <v-col md="6" cols="12" sm>
                  <v-text-field
                    color="#7900ff"
                    class="textfield mb-5"
                    value="Consulta de primera vez"
                    disabled
                    outlined
                  ></v-text-field>
                </v-col>

                <!-- CAMPO DE $PRECIO DE LA CONSULTA -->
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    v-model="first_time_consultation"
                    :disabled="!check"
                    color="#7900ff"
                    prefix="$"
                    suffix="MXN"
                    class="textfield mb-5"
                    value="800"
                    filled
                    outlined
                  ></v-text-field>
                </v-col>

                <!-- BOTONES DE EDITAR Y ELIMINAR -->
                <v-col cols="12" sm="6" md="3">
                  <v-btn-toggle borderless class="botones">
                    <v-btn v-model="check" class="iconos" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_editpaciente.svg')"
                        max-width="25"
                      >
                      </v-img>
                    </v-btn>
                    <v-btn class="iconos ml-n3" @click="deleteItem(item)" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                        max-width="25"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
<!--------------------------- CAMPO DDE CITA POR PRIMERA VEZ ----------------------->


<!-- ---------------------CAMPOS DE CITAS SUBSECUENTE --------------------------------->

                <v-col md="6" cols="12">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mb-5"
                    value="Consulta subsecuente"
                    disabled
                    outlined
                  ></v-text-field>
                </v-col>

                <!-- CAMPO DE $PRECIO DE LA CONSULTA -->
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    :disabled="!check"
                    color="#7900ff"
                    prefix="$"
                    suffix="MXN"
                    class="textfield mb-5"
                    value="800"
                    filled
                    outlined
                    v-model="subsequent_consultation"
                  ></v-text-field>
                </v-col>

                <!-- BOTONES DE EDITAR Y ELIMINAR -->
                <v-col cols="12" sm="6" md="3">
                  <v-btn-toggle borderless class="botones">
                    <v-btn v-model="check" class="iconos" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_editpaciente.svg')"
                        max-width="25"
                      >
                      </v-img>
                    </v-btn>
                    <v-btn class="iconos ml-n3" @click="deleteItem(item)" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                        max-width="25"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
              </v-row>
<!-- ---------------------TIPO DE SERVICIOS MÉDICOS--------------------------------->         
              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model="dbSelect"
                    class="textfield mb-5"
                    placeholder="Selecciona un servicio"
                    outlined
                    :items="items"
                    item-text="name"
                    item-value="medical_service_id"
                  ></v-autocomplete>
                </v-col>

<!-- ---------------------PRECIO DEL SERVICIOS MÉDICOS--------------------------------->      
                <v-col cols="12" md="4">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mb-5"
                    placeholder="Agregar precio del servicio"
                    outlined
                    prefix="$"
                    suffix="MXN"
                    v-model="price"
                  ></v-text-field>
                </v-col>
              </v-row>
<!-- ---------------------CAMPOS IDIOMAS --------------------------------->    
              <v-row>
                <v-col cols="12" md="6">
                  <p align="left" class="mb-1 label">Idioma*</p>
                  <v-combobox
                    v-model="languages"
                    :items="idioma"
                    placeholder="Selecciona tu idioma"
                    multiple
                    chips
                    outlined
                    
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                      >
                        <v-avatar
                          class="accent white--text"
                          left
                      
                        ></v-avatar>
                        {{ data.item }}
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-col>
              </v-row>
              <v-btn
                @click="overlay = !overlay"
                height="50px"
                class="white--text save mt-7"
                color="#7900ff"
                large
                v-on:click="putMedicalService"
              >Guardar cambios</v-btn>
              <v-btn
                @click="reset"
                height="50px"
                class="restore ml-3 mt-7"
                color="#999999"
                outlined
                large
                >Restaurar todo</v-btn
              >
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import MenuMed from './menuMed.vue'
export default {
  components: {
    MenuMed,
  },
  data() {
    return {
      overlay: false,
      check: '',
      checks: '',
      selectedItem: 1,
    

      idioma: "'Español', 'Ingles', 'Frances', 'Italiano'",

      
      dbSelect: "7",
      items: [],

      first_time_consultation: "",
      subsequent_consutation: "",
      price: "952",
      medical_service_id: "7"



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
  methods: {
    reset() {
      this.$refs.form.reset()
    },
  /* OBTENER ESPECIALIDADES */
    getMedicalService() {
      this.$axios
      .get('/api/v1/catalogue/medicalservices',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.items= res.data.data
        console.log(res.data)
       
      })
    },

    putMedicalService(){
      this.$axios
      .put('https://app.aryymd.com/api/v1/physician/medicalservice',{
        first_time_consultation: this.first_time_consultation,
        subsequent_consultation: this.subsequent_consultation,
        languages: this.idioma,
        medical_services: [{
              medical_service_id: this.medical_service_id,
              price: this.price,
        }]
      },
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),} 
      })
    },


    

    getMedical() {
      this.$axios
      .get('/api/v1/physician/profile', 
      {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.first_time_consultation = res.data.data.first_time_consultation
        this.subsequent_consultation = res.data.data.subsequent_consultation
        this.languages = res.data.data.languages
        this.medical_service_id = res.data.physician_medical_services.medical_service_id[0]
        this.price = res.data.physician_medical_services.price[0]
      })
    },

  },
  mounted() {
    this.getMedicalService() 
    this.getMedical()
  },
}

</script>
  
  <style>
p.cedu {
  font-family: Montserrat;
  font-size: 120%;
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
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
span {
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
</style>