<!-- seccion de "antecedentes psiquiatricos" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
<v-row justify="center">
  <v-dialog
    v-model="dialog"
    max-width="600px"
    scrollable
  >
<!-- BOTON DE DIALOG -->
  <template 
    #activator="{ on, attrs }">
    <v-btn block class="justify-start" outlined color="#7900ff" v-bind="attrs" v-on="on">
       <v-icon color="#7900ff">mdi-plus</v-icon> 
        ANTECEDENTES PSIQUIÁTRICOS
    </v-btn>
  </template> 
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title class="title">ANTECEDENTES PSIQUIATRICOS</v-toolbar-title>
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
 
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <!-- HISTORIA FAMILIAR -->
                <p>Historia familiar</p>
                <v-text-field
                  v-model="family_history" 
                  outlined 
                  placeholder="Escribe aqui"
                  dense
                >
                </v-text-field>
                <!-- CONCIENCIA DE ENFERMEDAD -->
                <p>Conciencia de enfermedad</p>
                <v-radio-group v-model="radiogroup_1" row>
                  <v-radio  label="Si" v-bind:value="true"></v-radio>
                  <v-radio label="No" v-bind:value="false"></v-radio>
                </v-radio-group>
                <!-- si la respuesta es si se activa el campo -->
                <v-text-field
                  v-if="radiogroup_1"
                  v-model="disease_awareness"
                  outlined 
                  placeholder="Escribe aqui" 
                  dense
                >
                </v-text-field>
                <!-- ÁREA AFECTADAS POR LA ENFERMEDAD -->
                <p>Áreas afectadas por la enfermedad</p>
                <v-text-field
                  v-model="areas_affected_by_the_disease"
                  outlined
                  placeholder="Escribe aqui"
                  dense
                ></v-text-field>

                <!-- APOYO FAMILIAR DEL GRUPO FAMILIAR -->
                <p>Ápoyo familiar del grupo familiar</p>
                <v-radio-group v-model="radiogroup_2" row>
                  <v-radio  label="Si" v-bind:value="true"></v-radio>
                  <v-radio label="No" v-bind:value="false"></v-radio>
                </v-radio-group>
                <v-text-field
                  v-if="radiogroup_2"
                  v-model="family_support_group"
                  outlined
                  dense
                  placeholder="Escribe aqui"
                >
                </v-text-field>

                <!-- GRUPO FAMILIAR DEL PACIENTE -->
                <p>Grupo familiar del paciente</p>
                <v-text-field
                  v-model="family_group_of_the_patient"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>

                <!-- ASPECTO DE LA VIDA SOCIAL-->
                <p>Aspecto de la vida social</p>
                <v-text-field
                  v-model="aspects_of_social_life"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>

                <!-- ASPECTO DE LA VIDA LABORAL -->
                <p>Aspecto de la vida laboral</p>
                <v-text-field
                  v-model="aspects_of_working_life"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>

                <p>Relación con la autoridad</p>
                <v-text-field
                  v-model="relationship_whit_authority"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>

                <p>Control de impulsos</p>
                <v-text-field
                  v-model="inpulse_control"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>

                
                <p>Manejo de frustaciónsu vida</p>
                <v-text-field
                  v-model="frustration_management"
                  dense
                  outlined
                  placeholder="Escribe aqui"
                ></v-text-field>
              </v-col>
            </v-row>
  
              <v-btn
            color="#7900ff"
            dark
            block
            @click="psychiatricPost"
          >
            Guardar cambios
          </v-btn>
          </v-container>
          <small></small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default{
  data(){
    return{
      dialog: false,
      family_history: "",
      disease_awareness:"",
      areas_affected_by_the_disease:"",
      family_support_group:"",
      family_group_of_the_patient:"",
      aspects_of_social_life:"",
      aspects_of_working_life:"",
      relationship_whit_authority:"",
      inpulse_control:"",
      frustration_management:"",
      radiogroup_1: null,
      radiogroup_2: null,
    }
  },

  methods: {
   psychiatricPost(){
      this.$axios
        .post('api/v1/physician/medical-history/psycological-background/',{
          family_history: this.family_history,
          disease_awareness: this.disease_awareness,
          areas_affected_by_the_disease: this.areas_affected_by_the_disease,
          family_support_group: this.family_support_group,
          family_group_of_the_patient: this.family_group_of_the_patient,
          aspects_of_social_life: this.aspects_of_social_life,
          aspects_of_working_life:this.aspects_of_working_life,
          relationship_whit_authority:this.relationship_whit_authority,
          inpulse_control: this.inpulse_control,
          frustration_management: this.inpulse_control,
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),} 
        })
    }, 
  },


}

</script>

<style scoped>

.title{
  font-family: MontserratBold;
}
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
  font-family: MontserratBold;
}

l {
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
</style>

