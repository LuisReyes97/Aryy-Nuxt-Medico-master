<template>
  <div>
    <v-row>
    <v-col xl="12">
      <p class="titulo mt-n4">Otros estudios</p>
      <v-divider class="mb-4 mt-n3"></v-divider>
    </v-col></v-row>

    <v-dialog scrollable v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-col xl="4">
          <v-btn
            class="ml-n2 mt-n2 odont justify-start"
            block
            outlined
            color="#7900ff"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="#7900ff">mdi-plus</v-icon>
            ODONTOGRAMA
          </v-btn>
        </v-col>
      </template>
      <v-card color="card" max-height="600px">
        <v-card-title>
          <span>ODONTOGRAMA</span>
        </v-card-title>

        <v-card-text> 
         <!--  insertar odontograma -->
         <p>(Insertar odontograma) </p>
         <v-row>
          <v-col xl="6">
            <p>Diagnóstico</p>
            <v-text-field outlined placeholder="Escibre aqui"></v-text-field>
          </v-col>
          <v-col xl="6">
            <p>Procedimiento</p>
            <v-text-field outlined placeholder="Escibre aqui"></v-text-field>
          </v-col>
         </v-row>
        
        </v-card-text>
        
        <v-col class="ml-6">
          <v-btn
            height="50px"
            class="white--text save mb-5"
            color="#7900ff"
            large
            >Guardar cambios</v-btn
          >
          <v-btn
            height="50px"
            class="restore ml-3 mb-5"
            color="#999999"
            outlined
            large
            >Restaurar todo</v-btn
          >
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>
  
  <script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
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
    }
  },
}
</script>
    <style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 120%;
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
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.odont{
  font-family: MontserratBold;
  color: #7900ff;
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