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
      <!-- ---- Sección de vista iniciar sesión y registrar| Genesis ---- -->
      <v-tabs class="tabs" color="#7900ff" v-model="tabs">
        <v-tab class="tabs">Iniciar sesión</v-tab>
        <v-tab class="tabs">
          <!--    menu para mostrar el tipo de registro segun tipo de usuario | Genesis -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                large
                text
                class="tabs boton gray--text"
              >
                <span>Registrarse</span>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="listitem">
              <!-- recibir contenido de la lista desde script | Genesis -->
              <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                <v-list-item-title
                  ><p class="item">{{ item.title }}</p></v-list-item-title
                >
              </v-list-item>
            </v-list>

          </v-menu>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <!--  ----Iniciar sesión |Génesis---- -->
        <v-tab-item>
          <v-col xs="11" sm="11" md="11" lg="11" xl="7">
            <v-card color="card" flat>
              <v-card-text>
                <v-row>
                  <!-- CAMPO DE INICAIR SESION | LUIS REYES -->
                  <v-text-field
                    v-model="email"
                    justify-right
                    placeholder="Correo electrónico"
                    outlined
                    color="#b380ff"
                    class="textfield mb-8"
                  ></v-text-field>
                  <!-- CAMPO DE CONTRASEÑA | LUIS REYES  -->
                  <v-text-field
                    v-model="password"
                    height="25"
                    outlined
                    class="textfield mb-8"
                    color="#b380ff"
                    placeholder="Contraseña"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    hint="Respeta mayúsculas y minúsculas"
                  ></v-text-field>
                  <a href="/auth/passwordforget" class="pass">¿Olvidaste tu contraseña?</a>
                  <v-btn
                    v-on:click="login"
                    class="btnnn"
                    color="#7900ff"
                    height="50"
                  >
                    Iniciar sesión
                  </v-btn>

                  <p class="accede mt-5 mb-5">O accede usando</p>

                  <v-btn outlined class="btn" color="#999999" height="50"
                    ><v-img
                      class="mr-3"
                      :src="require('@/assets/icons/icon_facebook.svg')"
                      max-width="35"
                    ></v-img>
                    Iniciar sesión con Facebook
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
                    Iniciar sesión con Google
                  </v-btn>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-tab-item>
      </v-tabs-items>
      <v-card color="card" v-model="access_token">
        {{ access_token }}
      </v-card>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'formLogin',
  layout: 'auth',
  /* Correcciones | Luis Reyes  */
  data() {
    return {
      email: '',
      password: '',
      access_token: '',
      tabs: 2,
      items: [
        {
          title: 'COMO PACIENTE',
          to: 'register/registerViews/registerPatient',
        },
        { title: 'COMO ESPECIALISTA', to: 'register/register' },
        { title: 'COMO LABORATORIO', to: 'register/register' },
        { title: 'COMO FARMACIA', to: 'register/register' },
      ],
      /* contraseña visibilidad */
      show1: false,
      hasVisiblePassword: false,
    }
  },

  myFunction: function () {
    if (this.enableDisable) {
      this.enableDisable = false
    } else {
      this.enableDisable = true
    }
  },

  methods: {
    login() {
      this.$axios
        .post('api/v1/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data)
          localStorage.setItem('token', response.data.access_token)
          this.$router.push('/')
        })
      /*         .then(data => localStorage.setItem("token", access_token))
        this.access_token=""
        this.access_token = access_token */

      /*   this.$axios.defaults.headers.common['Authorization'] = 'Bearer' + response.data;
        this.$route.push('/');  */

      /* https://docs.hektorprofe.net/academia/javascript/cliente-nuxt/ */
    },
  },
}
</script>


<style>
a{
  text-decoration: none;
}
.split-btn {
  display: inline-block;
}
.main-btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 2px !important;
}
.actions-btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 !important;
  min-width: 35px !important;
  margin-left: -3.5px;
}
/*estilos para tipos de letra | Genesis*/
h1 {
  font-family: 'Montserrat';
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
a.pass {
  color: #7900ff;
  font-family: 'Montserrat';
  margin-bottom: 15px;
}
p.item {
  font-family: MontserratMedium;
}
p {
  font-family: 'MontserratMedium';
  color: #999999;
  font-size: 16px;
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
/*     estilos para elementos vuetify | Genesis */
.boton {
  width: 155px;
  margin-left: -15px;
  margin-right: -15px;
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
.label {
  margin-top: 35px;
  margin-left: -40px;
}
.v-messages__message {
  font-size: 10.5px;
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
/*estilos botones | Genesis */
.btn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  width: 100%;
}
.btnn {
  margin-left: 15%;
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 100%;
}
.btnnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 100%;
}
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
.textfield input::placeholder {
  color: #999999 !important;
  opacity: 1;
}
</style>