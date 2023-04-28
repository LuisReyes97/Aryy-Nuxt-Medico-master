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
      <v-card flat>
        <menu-med />
      </v-card>
      <v-col md="10" lg="10" xl="10">
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle class="pa-3 mt-n2 mb-n10">
            <H1 class="mb-5">MIS DATOS FISCALES</H1>
          </v-card-subtitle>
          <v-form ref="form" v-model="valid">
            <v-card-text class="pa-3 mt-5">
              <v-row>
                <!-- CAMPO DE RFC | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>RFC</span>
                  <v-text-field
                    placeholder="Escribe tu RFC"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- CAMPO DEl CONTRIBUYENTE | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Nombre completo</span>
                  <v-text-field
                    placeholder="Nombre del contribuyente"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- REGIMEN FISCAL | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Régimen fiscal</span>
                  <v-autocomplete
                    dense
                    outlined
                    placeholder="Selecciona un régimen físcal"
                  >
                  </v-autocomplete>
                </v-col>
                <!-- CAMPO DEl CORREO DEL CONTRIBUYENTE | LUIS REYES -->
                <v-col md="4" cols="12">
                  <v-text>Correo*</v-text> <br />
                  <v-text-field
                    color="#9966ff"
                    v-model="email"
                    dense
                    outlined
                    :rules="emailRules"
                    placeholder="Escribe tu Email"
                    required
                  >
                  </v-text-field>
                </v-col>
                <!-- CAMPO DOMICILIO FISCAL | LUIS REYES -->
                <v-col md="8" cols="12">
                  <v-text>Domicilio fiscal*</v-text> <br />
                  <v-text-field
                    color="#9966ff"
                    v-model="email"
                    dense
                    outlined
                    :rules="emailRules"
                    placeholder="Escribe la dirección"
                    required
                  >
                  </v-text-field>
                  
                </v-col>
                <v-card-subtitle class="">
                  <H1 class="mb-5">CONSTACIA DE SITUACIÓN FISCAL</H1>
                </v-card-subtitle>
                <v-col md="4" cols="12">
                </v-col>
                <v-row>
                    <v-col md="6" lg="6" xl="6" cols="12">
                        
                    <p class="cedu mb-1">Constacia de situación físcal*</p>
                  <v-file-input v-model="fileIden" chips color="#9966ff" class="textfield" placeholder="Adjunta tu constancia físcal" outlined></v-file-input >
                    <v-input class="input mt-3 mb-n4">Formatos pemitidos: JPG o PNG. Tamaño máximo de archivo 2 MB</v-input>
                  </v-col><v-col md="6" lg="6" xl="6" cols="12"></v-col>
                </v-row>

              </v-row>

              <!-- botones -->
              <BR /><BR />
              <v-btn
                @click="overlay = !overlay"
                height="50px"
                class="white--text save mt-7"
                color="#7900ff"
                large
                >Guardar cambios</v-btn
              >
              <v-btn
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
export default {
  data() {
    return {
      overlay: false,
      fileRecords: [],
      uploadUrl: 'https://example.com',
      selectedItem: 1,
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
  },
}
</script>
  
  
    <style>
.v-input__icon--prepend .v-icon {
  color: #9966ff;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 100%;
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
  text-transform: capitalize !important;
  font-size: 1.7vh !important;
}
.restore {
  font-family: Montserrat;
  text-transform: capitalize !important;
  font-size: 1.7vh !important;
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
h1 {
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
p {
  color: #999999 !important;
  font-family: Montserrat;
  font-size: 120%;
  text-transform: lowercase !important;
}
p::first-letter {
  text-transform: uppercase !important;
}
p.cedu {
  font-family: Montserrat;
  font-size: 120%;
  color: #999999;
}
.v-input__icon--append .v-icon {
  font-size: 50px;
  color: #999999;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
    color: #4f565f !important;
  }
</style>