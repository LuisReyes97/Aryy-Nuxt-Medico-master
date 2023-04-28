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
          <v-stepper class="elevation-0" width="1000px" alt-labels v-model="e1">
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
                <v-col xl="8">
                  <p class="code">
                    Necesitamos confirmar tu identidad, ingresa tu correo
                    electrónico o tu teléfono, te enviaremos un código para
                    validar tu identidad.
                  </p>
                </v-col>

                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <p align="left" class="mb-1 label">
                      Ingresa tu correo electrónico o tu teléfono*
                    </p>
                    <v-text-field
                      outlined
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <div class="d-flex justify-space-between mb-6">
                      <v-btn
                        outlined
                        width="30%"
                        large
                        class="white--text btn"
                        color="grey"
                        @click="e1 = 2"
                      >
                        Cancelar
                      </v-btn>
                      <br /><br />
                      <v-btn
                        width="30%"
                        large
                        class="white--text btn"
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
                <h2 align="center" justify="end">Confirmación de datos</h2>
                <v-col xl="8">
                  <p class="code">
                    Ingresa a continuación el código de 6 caracteres que te
                    enviamos al método de verificación que seleccionaste.
                  </p>
                </v-col>

                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <p align="left" class="mb-1 label">
                      Código de verificación*
                    </p>
                    <v-text-field
                      outlined
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    <div class="d-flex justify-space-between mb-6">
                      <v-btn
                        outlined
                        width="30%"
                        large
                        class="white--text btn"
                        color="grey"
                        @click="e1 = 2"
                      >
                        Cancelar
                      </v-btn>
                      <br /><br />
                      <v-btn
                        width="30%"
                        large
                        class="white--text btn"
                        color="#7900FF"
                        @click="e1 = 3"
                      >
                        Siguiente
                      </v-btn>
                    </div>
                  </v-col>
                </div>
              </v-stepper-content>
              <!-- contenido de seccion Perfil | Genesis -->
              <v-stepper-content step="3">
                <h2 align="center" justify="end">Actualización de datos</h2>
                <v-col xl="8">
                  <p class="code">
                    Ingresa una nueva contraseña para acceder a tu cuenta.
                  </p>
                </v-col>

                <div align="">
                  <v-col xs="11" sm="8" md="8" lg="7" xl="7">
                    <p align="left" class="mb-1 label">Nueva contraseña *</p>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      outlined
                      placeholder="Escribe tu contraseña"
                      class="textfield"
                      color="#b380ff"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    {{ error }}
                    <v-text-field
                      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      v-model="password_confirmation"
                      placeholder="Confirma tu contraseña"
                      outlined
                      @click:append="show2 = !show2"
                      :type="show2 ? 'text' : 'password'"
                      class="textfield"
                      color="#b380ff"
                    ></v-text-field>
                    {{ error }}{{ msg }}
                    <div class="d-flex justify-space-between mb-6">
                      <v-btn
                        outlined
                        width="30%"
                        large
                        class="white--text btn"
                        color="grey"
                        @click="e1 = 2"
                      >
                        Cancelar
                      </v-btn>
                      <br /><br />
                      <v-btn
                        width="30%"
                        large
                        class="white--text btn"
                        color="#7900FF"
                        @click="e1 = 2"
                      >
                        Siguiente
                      </v-btn>
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
      e1: 1,
      error: '',
      msg: '',
      /* contraseña visibilidad */
      show1: false,
      show2: false,
      hasVisiblePassword: false,
    }
  },
  watch: {
    password() {
      if (this.password.length > 8) {
        if (this.password.length < 8) {
          this.error = 'Debe contener al menos 8 carácteres'
        } else {
          this.error = ''
        }
      }
    },
    password_confirmation() {
      if (this.password === this.password_confirmation) {
        this.msg = ''
      } else {
        this.msg = 'Las contraseñas no coinciden'
      }
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
.textfield {
  margin-left: -8px;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-input__icon--append .v-icon {
  font-size: 25px;
  color: #999999;
}
</style>