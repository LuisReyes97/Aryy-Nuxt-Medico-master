<template>
  <v-card color="card" flat>
    <div class="margen mt-16">
      <v-img
        :src="require('@/assets/logotipos/ISOLOGO_ARYY.svg')"
        max-width="150"
      ></v-img>
      <h1>
        Especialistas, medicinas y <br />
        análisis clínicos en un solo lugar
      </h1>
      <p>
        Haz una cita, cotiza tus medicamentos y análisis <br />
        clínicos o lleva control de tu tratamiento con <br />
        ayuda de aryy.
      </p>
      <!-- ---- Sección de vista iniciar/registrar | Genesis ---- -->
      <v-tabs v-model="tabs"  class="tabs"  color="#7900ff">
        <v-tab id="1" to="/auth/login"  class="tabs">Iniciar sesión</v-tab>
        <v-tab id="2" class="tabs">
          <!-- SELECTOR DE TIPO DE USUARIOS -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                large
                class="tabs boton gray--text"
                v-bind="attrs"
                v-on="on"
              >
                <span class="tabs">Registrarse</span>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list class="listitem">
              <!--               <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item> -->
              <v-list-item>
                <v-list-item-title v-model="paciente"
                  >PACIENTE</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-model="especialista" v-on:click="typeUser" 
                  >ESPECIALISTA</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- SELECTOR DE TIPO DE USUARIOS -->
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item> <!--  ----Iniciar sesión |Génesis---- --> </v-tab-item>
        <!--  ----Tab de registro |Génesis---- -->
        <v-tab-item>
          <v-card color="card" flat>
            <v-card-text>
              <v-row>
                <v-col xs="11" sm="11" md="11" lg="11" xl="9">
                  <v-row>
                    <v-col xs="11" sm="11" md="11" lg="11" xl="10">
                      <!-- CORREO ELECTRONICO -->
                      <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        required
                        outlined
                        placeholder="Correo electrónico"
                        class="textfield mb-2"
                        color="#b380ff"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                      ></v-text-field>
                      <!--                       <v-alert dense v-model="errormail" outlined type="error">
                        {{ errormail }}
                      </v-alert> -->
                      <br />
                      <!-- CONTRASEÑA 1 -->
                      <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        required
                        height="25"
                        outlined
                        class="textfield mb-2"
                        color="#b380ff"
                        placeholder="Establece tu contraseña"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        
                      >
                      </v-text-field>
                      <!--        <v-alert dense v-model="password_error" outlined type="error">
                        {{ password_error }}
                      </v-alert> -->

                      <!-- CONTRASEÑA 2 -->
                      <br />
                      <v-text-field
                        v-model="password_confirmation"
                        height="25"
                        outlined
                        class="textfield mb-2"
                        color="#b380ff"
                        placeholder="Confirmar contraseña"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password2'"
                        @click:append="show1 = !show1"
                      ></v-text-field>
                      <p class="hint">{{ msg }}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col lg="5">
                      <!-- CODIGO DE PAIS -->
                      <v-text-field
                        v-model="code"
                        outlined
                        placeholder="codigo pais"
                        color="#b380ff"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col lg="5">
                      <!-- NUMERO DE TELEFONO -->
                      <v-text-field
                        v-model="phone"
                        outlined
                        placeholder="numero de telefono"
                        color="#b380ff"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <br />
                  <v-row>
                    <v-col xs="11" sm="11" md="11" lg="11" xl="10">
                      <v-btn
                      
                        class="btnn"
                        color="#7900ff"
                        block
                        height="50"
                        v-on:click="register"
                        >Registrarme</v-btn
                      >
                      <p class="accede mt-5 mb-5">O registrate usando</p>

                      <v-btn outlined class="btn" color="#999999" height="50"
                        ><v-img
                          class="mr-3"
                          :src="require('@/assets/icons/icon_facebook.svg')"
                          max-width="35"
                        ></v-img>
                        Registrarse con Facebook
                      </v-btn>
                      <v-btn
                        class="margen4 btn"
                        color="#999999"
                        outlined
                        height="50"
                      >
                        <v-img
                          class="mr-8"
                          :src="require('@/assets/icons/icon_google.svg')"
                          max-width="30"
                        ></v-img>
                        Registrarse con Google
                      </v-btn>
                    </v-col>
                  </v-row>
                  <br />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, password } from 'vuelidate/lib/validators'
export default {
  
  name: 'formLogin',
  mixins: [validationMixin],

  layout: 'auth',

  validations: {
    email: { required, email },
    password: { required, password, maxLength: maxLength(8) },
  },

  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      code: '',
      phone: '',
      errormail: '',
      tabs: 1,
      error: '',
      msg: '',
      /*  Countries: CountriesCodes  */
      items: [
        {
          title: 'COMO PACIENTE',to: '/auth/register/registerComponents/registerPatient'},
        { title: 'COMO ESPECIALISTA', to: '' },
        { title: 'COMO LABORATORIO', to: '/auth/register/register' },
        { title: 'COMO FARMACIA', to: '/auth/register/register' },
      ],
      checkbox: false,
      /*  Reglas para el input de contraseña | Genesis */
      show1: false,
      hasVisiblePassword: false,
    }
  },

  computed: {
 
   /*  phone () {
      const errors = []
      if(!this.$v.phone.$dirty) return errors
      !this.$.phone.phone && errors.push('agrega correctamente')
      !this.$.phone.requiered && errors.push('telefono requerido')
      return errors

    },
    password2Errors(){
      const errors =[]
      if(!this.$v.password_confirmation.$dirty) return errors
      !this.$v.password_confirmation.password_confirmation && errors.push('no es la misma contraseña')
      return errors

    },
    passwordErrors () {
      const errors = []
      if(!this.$v.password.$dirty) return errors
      !this.$v.password.maxLength && errors.push('Debe contener al menos 8 carácteres')
      !this.$value.password.required && errors.push('contraseña requerida')
      return errors
    },  */


    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('correo invalido')
      !this.$v.email.required && errors.push('E-mail es necesario')
      return errors
    },
  },
  watch: {
          password(){
            if(this.password.length > 5){
            if(this.password.length < 5){
              this.error = "Debe contener al menos 8 carácteres"
            }else {
              this.error = ''
            }
          }
        },
        password_confirmation(){
            if(this.password === this.password_confirmation){
              this.msg = ""
            }else {
              this.msg = "Las contraseñas no coinciden"
            }
          }
        }, 
  methods: {
    register() {
      this.$axios
        .post('/api/v1/register', {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          country_code: this.code,
          phone_number: this.phone,
          type_user: 'Physician',
          
        })

        .then((response) => {
       
          localStorage.setItem('token', response.data.access_token)
          this.$router.push(
            '/auth/register/registercomponents/specialistregister'
          )
        })
        .catch((error) => {
          /*   alert(error.response.data.errors.email) */
          this.$v.$touch()
          this.errormail = ''
          this.errormail = error.response.data.errors.email[0]
          this.password_error = ''
          this.password_error = error.response.data.errors.password[0]
        })
    },

    /* enviaremos el metodo de custon */
    FormData(){


    },
  },

  /* TYPER_USER | LUIS REYES */
  typeUser() {
    this.$axios
      .post('/api/v1/register', {
        type_user: this.especialista,
      })
      .then((response) => {
       /*  console.log(response.data.data) */
      })
  },

  /*   myFunction: function () {
    if (this.enableDisable) {
      this.enableDisable = false
    } else {
      this.enableDisable = true
    }
  }, */
}
</script>


<style>
/*estilos para tipos de letra | Genesis*/
a {
  text-decoration: none !important;
}
h1 {
  font-family: 'MontserratBold';
  font-size: 155%;
  margin-top: -30px;
  margin-bottom: 10px;
  color: #4f565f;
}
h2 {
  font-family: 'MontserratBold';
  font-size: 150%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4f565f;
}
h3 {
  font-family: 'MontserratLight';
  margin-top: 10px;
  font-size: 105%;
  margin-bottom: 10px;
  color: #9966ff;
}
p {
  font-family: 'MontserratMedium';
  color: #999999;
  font-size: 16px;
}
p.hint {
  font-size: 12px;
  color: #7900ff;
  margin-top: 5px;
  margin-bottom: -3px;
}
p.accede {
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
}
p.label {
  font-family: 'MontserratLight';
  color: #999999;
  font-size: 120%;
  margin-top: -1px;
  margin-left: 1px;
  margin-bottom: 15px;
}
p.registro {
  color: #7900ff;
  text-transform: unset !important;
  font-family: MontserratMedium;
  margin-top: 15%;
  font-size: 100%;
}
a.accede {
  margin-top: 16px;
  font-size: 15px;
  font-family: 'MontserratBold';
}
p.checkbox {
  font-family: Montserrat;
  font-size: 11px;
  color: black;
}
r {
  text-transform: unset !important;
  font-family: MontserratMedium;
  color: #7900ff;
}
.listitem {
  font-family: Montserrat;
}
.hint {
  margin-top: -15px;
  font-family: Montserrat;
}
.textfield {
  height: 50px;
  width: 100%;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.v-messages__message {
  font-size: 11px;
  color: #7900ff;
}
.checkbox {
  margin-top: 15px;
}
.tabs {
  color: #7900ff;
  text-transform: unset !important;
  font-family: MontserratMedium;
}
/*degradado icono de google | Genesis */
.fa-google {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
/*estilos botones | Genesis */
.btn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  width: 100%;
}
.btnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  margin-left: 1px;
  left: 0;
  color: white !important;
  width: 100%;
}
.btnnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 100%;
} /* 
    .prueb{
      width: 100%;
    } */
.color {
  text-transform: unset !important;
  font-family: MontserratMedium;
  background-color: #ea4335;
  fill: #ea4335;
}
/*Margenes generales | Genesis */
.margen {
  margin: 34px;
}
.margen4 {
  margin-top: 16px;
}
</style>
