<template>
  <div>
    <v-row>
      <v-card flat>
      </v-card>
      <v-col md="10" lg="9" xl="10">
        <v-card flat height="100%" class="pa-3 mt-2">
          <v-card-subtitle class="pa-3  mt-n2 mb-n10"><H1 class="mb-5">IDENTIDAD MÉDICA</H1></v-card-subtitle>
            <v-card-text class="pa-3 mt-5 ">
              <v-form ref="form" v-model="valid">
              
              
              <v-row>
                <!-- LOGOTIPO IDENTIDAD MÉDICA | LUIS REYES -->
                <v-col xl="6">
                  <span>Logotipo propio*</span>
                  <v-file-input 
                    chips 
                    color="#9966ff" 
                    class="textfield" 
                    placeholder="Adjunta tu logotipo" 
                    outlined
                    v-model="logo"
                  ></v-file-input >
                  <v-input 
                    class="input mb-n4"
                  >
                    Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 5 MB
                  </v-input>
                </v-col>
              </v-row> 
                <!-- FOTOGRAFIA DEL ESPECIALISTA -->
                  <H1 class="mb-5 mt-5">FOTOGRAFÍAS</H1>
                  <span>Fotografías del especialista</span>
                    <VueFileAgent 
                      :multiple="true" 
                      :deletable="true" 
                      :helpText="'Selecciona o arrastra tus archivos aquí'" 
                      :uploadUrl="uploadUrl" 
                      v-model="files"
                    ></VueFileAgent>
                   <div>
                    <v-tooltip color="transparent" bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <span class="input"
                          v-bind="attrs"
                          v-on="on"
                        ><v-icon
                            color="#9966ff"
                            small
                        >
                        mdi-information
                        </v-icon>Más información sobre las fotos</span>
                      </template>
                      <v-alert shaped color="#7900ff"><p class="alertDi mb-n2 mt-n2">
                    ∙En su escritorio <br/>   ∙En su consultorio (preferentemente usando bata) <br/>   
                    ∙Utilizando algún aparato dentro del consultorio <br/>   ∙Realizando algún procedimiento a algun paciente <br/>   ∙De cuerpo completo 
                    <br/>   ∙Medio cuerpo (preferentemente usando bata) </p>
                    </v-alert>
                    </v-tooltip>
                   </div>
                   
                  <!-- FOTOGRAFIA DEL ESTABLECIMIENTO -->
                  <div class="mt-5">
                    <span>Fotografías del establecimiento</span>
                    <VueFileAgent 
                      ref="vueFileAgent"
                      :theme="'grid'"
                      :multiple="true"
                      :deletable="true"
                      :meta="true"
                      :accept="'image/*'"
                      :maxSize="'2MB'"
                      :maxFiles="5"
                      :helpText="'Selecciona o arrastras tus archvios aquí'"
                      :errorText="{
                        type: 'Tipo de archivo invalido. Solo se permiten imágenes',
                        size: 'Los archivos no deben exceder los 2 MB de tamaño',
                      }"
                      @select="filesSelected($event)"
                      @beforedelete="onBeforeDelete($event)"
                      @delete="fileDeleted($event)"
                      v-model="fileRecords"
                    ></VueFileAgent>
                   <div>


                    <v-tooltip color="transparent" bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <span class="input"
                          v-bind="attrs"
                          v-on="on"
                        ><v-icon
                            color="#9966ff"
                            small
                        >
                        mdi-information
                        </v-icon>Más información sobre las fotos</span>
                      </template>
                      <v-alert shaped color="#7900ff"><p class="alertDi mb-n2 mt-n2">
                    ∙Del interior de su consultorio <br/>   ∙De la sala de espera o del lobby <br/>   
                    ∙Fachada exterior del consultorio </p>
                    </v-alert>
                    </v-tooltip>
                   </div>
                  </div>


                    <!-- BOTONES PARA GUARDAR / RESTABLECER -->
                    <v-btn  
                      @click="overlay = !overlay" 
                      height="50px" 
                      class="white--text save mt-7" 
                      color="#7900ff" 
                      large
                      v-on:click="postLogo"
                    >Guardar cambios</v-btn>
                    <v-btn  
                        @click="reset" 
                        height="50px" 
                        class="restore ml-3 mt-7" 
                        color="#999999" 
                        outlined 
                        large
                        >Restaurar todo
                      </v-btn>
      <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green">Datos actualizados correctamente.</v-alert>
      </v-overlay>
      </v-form>
  </v-card-text>
   </v-card>
        </v-col>
        </v-row>
    </div>
</template>

<script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
export default {
  components: {
},
  data () {
    return {
      overlay: false,
      alert: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
      hover: false,
      hover2: false,
      selectedItem: 1,
      logo: [],
    }
  },
  created(){
    setTimeout(()=>{
      this.alert=false
    },5000)
  },
  
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },
  methods: {
    

      /* SUBIR FOTO DE LOGO IDENTIDAD MÉDICA | LUIS REYES */

      postLogo(){
        const formData = new FormData();
        formData.append('logo',this.logo);
        this.$axios
          .post('/api/v1/physician/medicalindentity/uploadlogo', formData,
          {
            headers:{
              "Authorization": 'Bearer ' + localStorage.getItem("token"),
              "Content-Type": "multipart/form-data"
            }
          })
      },
      uploadFiles: function () {
        // Usando el cargador predeterminado. Puede usar otro cargador en su lugar.
        this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
        this.fileRecordsForUpload = [];
      },
      deleteUploadedFile: function (fileRecord) {
        // Usando el cargador predeterminado. Puede usar otro cargador en su lugar.
        this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
      },
      filesSelected: function (fileRecordsNewlySelected) {
        const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
        this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
      },
      onBeforeDelete: function (fileRecord) {
        const i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
        // 
          this.fileRecordsForUpload.splice(i, 1);
          const k = this.fileRecords.indexOf(fileRecord);
          if (k !== -1) this.fileRecords.splice(k, 1);
        } 
      },
      fileDeleted: function (fileRecord) {
        const i = this.fileRecordsForUpload.indexOf(fileRecord);
        if (i !== -1) {
          this.fileRecordsForUpload.splice(i, 1);
        } else {
          this.deleteUploadedFile(fileRecord);
        }
      },
      
      /* OBTENER IDENTIDAD MEDICA | LUIS REYES */
    getMedicalindentity () {
      this.$axios
      .get('/api/v1/physician/medicalindentity',{
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then(res => {
        console.log(res)
        this.logo = res.data.data.logo[0]
      })
    },
  },
  mounted() {
      this.getMedicalindentity()
    },
}
</script>


<style>
p.alertDi{
  font-family: Montserrat;
  color: white;
  font-size: .89rem;
}
.v-input__icon--prepend .v-icon { 
  color: #9966ff;
}
.input{
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
}
.bgactive{
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
a{
    text-decoration: none !important;
  }
.save{
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore{
  font-family: Montserrat;
  text-transform: unset !important;
}
.btn{
  font-family: Montserrat;
  text-transform: unset !important;
  color: #9966ff;
}
.textfield{
    height: 50px;
    width: 100%;
    font-size: .9rem;
    font-family: Montserrat;
  }
h1{
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}  
span{
  font-family: Montserrat;
  font-size: 120%;
}
p{
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
</style>