<template>
  <div>
    <v-row>
      <v-card flat>
        <menu-med />
      </v-card>
      <v-col md="8" cols="12">
        <v-card flat height="800px" class="pa-3 mt-2">
          <v-card-subtitle>ENFERMEDADES QUE TRATA</v-card-subtitle>
          <v-autocomplete
              v-model="dbSelect"
              :loading="isLoading"
              :items="items"
              item-text="name"
              item-value="disease_id"
              outlined
          ></v-autocomplete>
          <v-card-subtitle class="pa-3 mt-n2 mb-n10"
            ><H1 class="mb-5">ENFERMEDADES QUE TRATA</H1></v-card-subtitle
          >
          <v-card-text class="pa-3">
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col v-for="(prueba, i) in enfermedades" :key="i" xl="6">
                <v-checkbox
              
                    class="mb-n6"
                    hide-details
                    :label="prueba.name"
                  ></v-checkbox> 
                </v-col>
              </v-row>
              <br />
              <v-dialog> </v-dialog>
              
              
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="btn ml-n5"
                color="#9966ff"
                text
                ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro</v-btn>
              
              
                <div class="mt-5">
                <v-btn
                  @click="overlay = !overlay"
                  v-on:click="submit() "
                  height="50px"
                  class="white--text save"
                  color="#7900ff"
                  large
                  >Guardar cambios </v-btn
                >
                <v-btn
                  @click="reset"
                  height="50px"
                  class="restore ml-3"
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
              </div>
            </v-form>
          </v-card-text>
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
      selectedItem: 1,
      
      pruebas: [
        { name: 'Infecciones urinarias en adultos' },
        { name: 'Sindrome de vejiga dolorosa' },
        { name: 'Disfunción eréctil' },
        { name: 'Varicocele' },
        { name: 'Piedras en los riñones' },
        { name: 'Incontinencia urinaria de esfuerzos' },
        { name: 'Cáncer de testículos' },
        { name: 'Eyaculación precoz' },
        { name: 'Hiperplasia prostática' },
        { name: 'Enfermedades de Transmisión sexual (ETS)' },
      ],
      
      dbSelect : { disease_id: null, name: null},
      items : [],
      enfermedades: [],
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },

      /* OBTENER ENFERMEDADES */
      getDiseases(){
      this.$axios
      .get('/api/v1/catalogue/diseases',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.items= res.data.data
      })
    },
      
    submit() {
       console.log(this.dbSelect)
       this.$axios
        .post('/api/v1/physician/disease',{
          disease_id: this.dbSelect
        },{
            headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
        })
     },

     getEnfermedades(){
      this.$axios
       .get('/api/v1/physician/disease',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
       })
       .then(res =>{
        console.log(res)
        this.enfermedades = res.data.data
       })
     }
  },

  mounted() {
    this.getDiseases()
    this.getEnfermedades()
    this.dbSelect = {disease_id: null, name: null};
  },






  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    },
  },
}
</script>
  
  <style>
/* .checkbox {
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
span {
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
} */
</style>