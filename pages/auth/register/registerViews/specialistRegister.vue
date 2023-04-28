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
                Formulario
                <p class="ml-3">registro</p>
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="#7900ff" step="3"> Perfil </v-stepper-step>
            </v-stepper-header>
            <!-- contenido de seccion verificación | Genesis -->
            <v-stepper-items color="red">
              <v-stepper-content step="1">
                <h2 align="center" justify="end">
                  Crea tu perfil gratuito como especialista
                </h2>
                <p class="code">
                  Ingresa el código que recibiste vía WhatsApp o SMS al número
                  que <br />
                  nos proporcionaste con anterioridad.
                </p>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link
                      style="text-decoration: none
        color: inherit;"
                      to="/auth/register/registerViews/registerPatient"
                      ><h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon
                        >Registrarme como paciente
                      </h3>
                    </router-link>
                    <p align="left" class="mb-1 label">Celular</p>
                    <code-country />
                    <p align="left" class="mb-1 label">
                      Código de verificación
                    </p>
                    <v-text-field
                      outlined
                      placeholder="Verifica tu código"
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <div align="right">
                      <v-btn
                        class="btn mt-n11"
                        text
                        color="#9966ff"
                        @click="e1 = 2"
                        >Reenviar código</v-btn
                      >
                      <br /><br />
                      <v-btn
                        width="30%"
                        large
                        class="white--text btn mt-n4"
                        color="#7900FF"
                        @click="e1 = 2"
                      >
                        Siguiente
                      </v-btn>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- contenido de seccion formulario registro  | Genesis -->
              <v-stepper-content step="2">
                <h2 align="center" justify="end">
                  Crea tu perfil gratuito como especialista
                </h2>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link
                      style="text-decoration: none color: inherit;"
                      to="/auth/register/registerViews/registerPatient"
                      ><h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon
                        >Registrarme como paciente
                      </h3>
                    </router-link>

                    <!--2.  FORMULARIO DE REGISTRO -->
                    <!-- NOMBRE DEL DOCTOR -->
                    <p align="left" class="mb-1 label">Nombre</p>
                    <v-text-field
                      v-model="name"
                      outlined
                      placeholder="Nombre"
                      class="textfield mb-n3"
                      color="#b380ff"
                    >
                    </v-text-field>
                    <!-- CAMPO DE ESPECIALIDAD -->
                    <p align="left" class="mb-1 label">Especialidad*</p>
                    <v-autocomplete
                      v-model="specialty"
                      outlined
                      :items="especialidades"
                      placeholder="Selecciona una especialidad"
                      class="textfield mb-n3"
                      color="#b380ff"
                    ></v-autocomplete>
                    <!-- CAMPO DE CÉDULA -->
                    <p align="left" class="mb-1 label">Cédula C1</p>
                    <v-text-field
                      v-model="identification_card"
                      outlined
                      placeholder="Número de cédula"
                      class="textfield mb-n3"
                      color="#b380ff"
                    ></v-text-field>
                    <!-- CAMPO DE INSTITUCIÓN -->
                    <p align="left" class="mn-1 label" label>Institución</p>
                    <v-text-field
                      v-model="institution"
                      outlined
                      placeholder="Institución"
                      class="textfield mb-n3"
                      color="#b3380ff"
                    >
                    </v-text-field>
                    <!-- BOTON DE GUARDAR CAMBIOS -->
                    <div class="mt-n7" align="right">
                      <v-checkbox color="#7900ff" class="mt-n3" v-model="check">
                        <template v-slot:label>
                          <div>
                            <p class="terms mt-4">
                              He leído y aceptado los Terminos y Condiciones de
                              uso de aryy.
                            </p>
                          </div>
                        </template>
                      </v-checkbox>
                      <v-btn
                        v-on:click="create"
                        @click="e1 =3"
                        block
                        large
                        class="white--text btn mt-n3"
                        color="#7900FF"
                        :disabled="!check"
                        >Siguiente
                      </v-btn>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- 2. FORMULARIO DE REGISTRO -->

              <!-- contenido de seccion Perfil | Genesis -->
              <v-stepper-content step="3">
                <h2 align="center" justify="end">
                  Crea tu perfil gratuito como especialista
                </h2>
                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <router-link
                      style="text-decoration: none
            color: inherit;"
                      to="/auth/register/registerViews/registerPatient"
                      ><h3 align="left" class="a mb-13">
                        <v-icon color="#9966ff">mdi-arrow-left</v-icon
                        >Registrarme como paciente
                      </h3>
                    </router-link>
                    <p align="left" class="mb-1 label">Nombre (s)*</p>
                    <v-text-field
                      outlined
                      placeholder="Escriba su nombre"
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      placeholder="Apellido (s)"
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <p align="left" class="mb-1 mt-n2 label">
                      Fecha de nacimiento*
                    </p>
                    <!-- calendario para seleccionar fecha de nacimiento  | Genesis -->
                    <v-dialog
                      ref="dialog"
                      v-model="menu2"
                      :return-value.sync="date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="textfield"
                          color="#b380ff"
                          v-model="date"
                          outlined
                          placeholder="Fecha de nacimiento*"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        color="#9966ff"
                        locale="MX-ES"
                        v-model="date"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="#b380ff" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="#b380ff"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                    <p align="left" class="mb-1 mt-n2 label">Consultorio*</p>
                    <v-text-field
                      outlined
                      placeholder="Nombre del consultorio o clínica"
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <p align="left" class="mb-1 mt-n2 label">Dirección*</p>
                    <v-autocomplete
                      outlined
                      :items="especialidades"
                      placeholder="Dirección de consultorio o clínica"
                      class="textfield"
                      color="#b380ff"
                    ></v-autocomplete>
                    <v-btn
                     
                      block
                      large
                      class="white--text btn"
                      color="#7900FF"
                      href="/"
                    >
                      Registrarme
                    </v-btn>
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
      specialties: "", 
      name: "Juan carlos",
      specialty: "16",
      identification_card: "",
      institution: "UNACH",
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
      .post('/api/v1/physician', {
          professional_name: this.name,
          specialties: [
            {
              specialty_id: this.specialty,
              license: this.identification_card,
              institution: this.institution
            }
          ]
      }, 
      { 
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
      })
      .then((response) => {
        console.log(response.data.specialties)
      })
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
  font-family: MontserratBold;
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
  color: #4f565f;
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
.textfield {
  margin-left: -8px;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-input__icon--append .v-icon {
  font-size: 52px;
  color: #999999;
}
</style>