<!-- Maquetación => Componente => Dialog Cuestionario | Génesis & Responsivo | Luis Reyes &  Consumo de Api | Luis Reyes-->
<template>
  <v-dialog scrollable v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="justify-start" width="360px" outlined color="#7900ff" v-bind="attrs" v-on="on">
        <v-icon color="#7900ff">mdi-plus</v-icon>
        <span class="l">CUESTIONARIO PERSONALIZADO</span>
      </v-btn>
    </template>
    <v-card>
      <v-col>
        <v-toolbar
          flat
        >
        <v-text-field
            v-model="title"
            solo
            style="font-size: 17px"
            class="ml-n2 edit mb-n8"
            :disabled="!text"
            flat
            placeholder="PLANTILLA DE CUESTIONARIO"
          ></v-text-field>
          <v-btn  @click="text = !text" icon>
          <img
            width="20"
            height="20"
            :src="require('@/assets/icons/icon_edit.svg')"
        /></v-btn>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-col>

      
      <v-card-text>
        <v-container>
          <v-row>
            <v-col >
              <div class="d-flex justify-space-between">
                <v-text-field
                  v-model="pregunta"
                  class="ml-n3 editar"
                  :disabled="!editar"
                  solo
                  flat
                  label="Pregunta personalizada"
                ></v-text-field>
                <v-btn @click="editar = !editar" icon>
                  <img
                    width="24"
                    height="24"
                    :src="require('@/assets/icons/icon_editpaciente.svg')"
                /></v-btn>
              </div>
              <v-text-field
                v-model="respueta"
                style="font-family: Montserrat"
                outlined
                label="Respuesta"
              ></v-text-field>
              
              <div class="inputArea" v-for="input in inputs" :key="input.id">
                <div class="d-flex justify-space-between mt-n2">
                  <v-text-field
                    class="ml-n3 editar"
                    :disabled="!edit"
                    solo
                    flat
                    value="Pregunta personalizada"
                  ></v-text-field>

                  <v-btn @click="edit = !edit" icon>
                    <img
                      width="24"
                      height="24"
                      :src="require('@/assets/icons/icon_editpaciente.svg')"
                  /></v-btn>
                  <v-btn @click="deleteInput" icon>
                    <img
                      width="24"
                      height="24"
                      :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                  /></v-btn>
                </div>
                <v-text-field
                  style="font-family: Montserrat"
                  outlined
                  placeholder="Escriba aquí"
                ></v-text-field>
              </div>
              <v-btn
                @click="addInput"
                class="btnn ml-n5 mt-n3"
                color="#9966ff"
                text
                ><v-icon class="icon">mdi-plus-circle</v-icon>Agrega otro
                campo</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="mt-n10 ml-5 mr-5">
        <v-btn
          block
          @click="cuestionarioPost"
          height="50px"
          class="white--text save mb-5 mt-5"
          color="#7900ff"
          large
          >Guardar cambios</v-btn
        >
        <v-overlay :value="overlay">
          <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
            >Datos actualizados correctamente.</v-alert
          >
        </v-overlay>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      overlay: false,
      n: 0,
      editar: '',
      edit: '',
      text: '',
      inputs: [],
      modal: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      medicamentos: [
        {
          name: 'Enalapril',
          mg: '10 mg',
          presentation: 'Tabletas',
          indication: '1 tableta cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
        {
          name: 'Losartán',
          mg: '50 mg',
          presentation: 'Comprimido',
          indication: '1 comprimido cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
      ],
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      cons: '',
      support: '',
      title:'',
      pregunta:'',
      respuesta: ''

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

  methods: {
    addInput() {
      this.inputs.push({})
    },
    deleteInput(i) {
      this.inputs.splice(i, 1)
    },

    cuestionarioPost(){
      this.$axios
        .post('https://app.aryymd.com/api/v1/physician/personalized-questionnaire',{
        title: this.title,
        questions:[
          {
            title: 'fdfffs',
            answers: [
              {
                title: 'dsffsfffsfs',
              }
            ]
          }
        ] 
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
       
        console.log(this.cuestionarioPost)
    }
  },
}
</script>
<style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #999999;
}
p.sub {
  font-family: MontserratMedium;
  color: #999999;
}
span {
  color: #4f565f;
  font-family: Montserrat;
}
.l{
  color: #7900ff;
  font-size: 90%;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.checkbox {
  font-family: Montserrat;
}
.vradio {
  font-size: 5px;
}
.btn {
  font-family: MontserratMedium;
  font-size: 16px;
  text-transform: unset !important;
  color: #9966ff;
}
.btnn {
  font-family: MontserratMedium;
  font-size: 16px;
  text-transform: unset !important;
  color: #9966ff;
}
.editar {
  font-family: MontserratMedium;
  margin-bottom: -35px;
}
.edit {
  font-family: MontserratBold;
}
</style>

