<template>
  <div class="fondo">
    <div align="center" justify="end">
      <v-row>
        <v-col
          cols="3"
          sm="1"
          md="1"
          lg="1"
          xl="1"
          class="flex-grow-0 flex-shrink-0"
        ></v-col>
        <v-col xs="1" sm="8" md="10" lg="10" xl="10">
          <v-img
            :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
            class="mb-n5"
            max-width="150"
            min-width="150"
          ></v-img>
          <v-stepper class="elevation-0" alt-labels v-model="e1">
            <v-stepper-header class="elevation-0">
              <v-stepper-step color="#7900ff" :complete="e1 > 1" step="1">
                Verificación
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="#7900ff" :complete="e1 > 2" step="2">
                Confirmación
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="#7900ff" step="3">
                Actualización
              </v-stepper-step>
            </v-stepper-header>
            <!-- contenido de seccion verificación | Genesis -->
            <v-stepper-items color="red">
              <v-stepper-content step="1">
                <h2 align="center" justify="end">Verificación de datos</h2>
                <p class="code">
                  Necesitamos confirmar tu identidad, selecciona que método de
                  <br />
                  verificacion quieres utilizar y sigue los pasos.
                </p>
                <br />
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="5">
                    <p align="left" class="label mb-1">
                      Verificar vía correo electrónico
                    </p>
                    <v-row class="ml-n6">
                      <v-col xl="1">
                        <v-checkbox class="ml-4" color="#7900ff"></v-checkbox>
                      </v-col>
                      <v-col xl="11">
                        <v-text-field
                          outlined
                          placeholder="Correo electrónico"
                          class="textfield"
                          color="#7900ff"
                        >
                          <template #prepend-inner>
                            <div class="mr-4" style="width: 25px">
                              <v-img
                                max-height="25"
                                max-width="30"
                                :src="require('@/assets/icons/icon_email.svg')"
                              />
                            </div>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <p align="left" class="mb-1 label">Verificar vía SMS</p>
                    <v-row class="ml-n6">
                      <v-col xl="1">
                        <v-checkbox class="ml-4" color="#7900ff"></v-checkbox>
                      </v-col>
                      <v-col xl="11">
                        <v-text-field
                          outlined
                          placeholder="Número telefónico"
                          class="textfield"
                          color="#7900ff"
                        >
                          <template #prepend-inner>
                            <div class="mr-4" style="width: 25px">
                              <v-img
                                max-height="25"
                                max-width="30"
                                :src="require('@/assets/icons/icon_sms.svg')"
                              />
                            </div>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <div>
                      <v-col class="d-flex justify-space-between mt-4">
                        <v-btn
                          width="30%"
                          class="restore btnn ml-n3 mt-n4"
                          color="#999999"
                          outlined
                          large
                          >Cancelar</v-btn
                        >
                        <v-btn
                          width="30%"
                          large
                          class="white--text btn mr-n3 mt-n4"
                          color="#7900FF"
                          @click="e1 = 2"
                        >
                          Siguiente
                        </v-btn>
                      </v-col>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- contenido de seccion formulario registro  | Genesis -->
              <v-stepper-content step="2">
                <h2 align="center" justify="end">Confirmación de datos</h2>
                <p class="code">
                  Ingresa a continuación el código de 6 caracteres que te
                  enviamos al <br />
                  método de verificación que seleccionaste.
                </p>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="5">
                    <p align="left" class="label mb-1">
                      Código de verificacion*
                    </p>
                    <v-otp-input color="#7900ff" length="6"></v-otp-input>
                    <div>
                      <v-col class="d-flex justify-space-between mt-6">
                        <v-btn
                          width="30%"
                          class="restore btnn ml-n3"
                          color="#999999"
                          outlined
                          large
                          >Cancelar</v-btn
                        >
                        <v-btn
                          width="30%"
                          large
                          class="white--text btn mr-n3"
                          color="#7900FF"
                          @click="e1 = 3"
                        >
                          Siguiente
                        </v-btn>
                      </v-col>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- 2. FORMULARIO DE REGISTRO -->

              <!-- contenido de seccion Perfil | Genesis -->
              <v-stepper-content step="3">
                <h2 align="center" justify="end">Confirmación de datos</h2>
                <p class="code">
                  Ingresa a continuación el código de 6 caracteres que te
                  enviamos al <br />
                  método de verificación que seleccionaste.
                </p>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="5">
                    <p align="left" class="label mb-1">
                      Correo electrónico nuevo*
                    </p>
                    <v-text-field
                      outlined
                      class="textfield"
                      color="#7900ff"
                    ></v-text-field>
                    <p align="left" class="label mt-3 mb-1">
                      Confirma tu dirrección de correo nuevo*
                    </p>
                    <v-text-field
                      outlined
                      class="textfield"
                      color="#7900ff"
                    ></v-text-field>
                    <div>
                      <v-col class="d-flex justify-space-between">
                        <v-btn
                          width="30%"
                          class="restore btnn ml-n3 mt-4"
                          color="#999999"
                          outlined
                          large
                          >Cancelar</v-btn
                        >
                        <v-btn
                          v-on:click="overlay = !overlay"
                          width="30%"
                          large
                          class="white--text btn mr-n3 mt-4"
                          color="#7900FF"
                          @click="e1 = 1"
                        >
                          Siguiente
                        </v-btn>
                        <v-overlay v-if="overlay" v-model="overlay">
                          <v-alert
                            class="rounded-xl"
                            icon="mdi-check-circle"
                            color="green"
                            >Datos actualizados correctamente.</v-alert
                          >
                        </v-overlay>
                      </v-col>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
        <v-col
          cols="3"
          sm="1"
          md="2"
          lg="1"
          xl="1"
          class="flex-grow-0 flex-shrink-1"
        ></v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  layout: 'auth',
  data() {
    return {
      overlay: false,
      specialties: '',
      name: 'Juan carlos',
      specialty: '16',
      identification_card: '',
      institution: 'UNACH',
      check: '',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      e1: 1,
    }
  },
  mounted() {
    /*  if (localStorage.token) {
        console.log("si pinta")
        this.token = localStorage.getItem("token")
      } */
    /*  this.token = $localStorage.getItem("token") */
    // this.storage();
    // console.log(localStorage.getItem("token"))
    // this.$axios.post('/api/v1/physician',{
    //   headers:{
    //     Autorization: "Bearer ${token}",
    //     token: localStorage.getItem("token")
    //   }
    // })
  },
  methods: {
    create() {
      this.$axios
        .post(
          '/api/v1/physician',
          {
            professional_name: this.name,
            specialties: [
              {
                specialty_id: this.specialty,
                license: this.identification_card,
                institution: this.institution,
              },
            ],
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((response) => {
          console.log(response.data.specialties)
        })
    },
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
.fondo {
  height: 100%;
  color: white;
  background: white;
}
h2 {
  color: #4f565f;
  font-family: MontserratMedium;
}
h3 {
  font-family: 'MontserratLight';
  margin-top: 10px;
  font-size: 100%;
  margin-bottom: 10px;
  color: #9966ff;
}
p.code {
  font-family: MontserratMedium;
  color: #999999;
}
p.terms {
  color: #4f565f;
  font-family: MontserratMedium;
  font-size: 90%;
}
.label {
  color: #999999;
  font-family: Montserrat;
}
.btn {
  font-family: MontserratMedium;
  text-transform: unset !important;
}
.btnn {
  font-family: MontserratMedium;
  text-transform: unset !important;
}
.textfield {
  margin-left: -8px;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-input__icon--append .v-icon {
  font-size: 52px;
  color: #999999;
}
.v-input__icon--prepend-inner .v-icon {
  color: #7900ff;
  font-size: 35px;
}
</style>