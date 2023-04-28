<template>
  <v-card color="card" flat>
    <div class="margen">
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
      <v-tabs class="tabs" color="#7900ff" v-model="tabs">
        <v-tab to="/auth/login" id="1" class="tabs">Iniciar sesión</v-tab>
        <v-tab id="2" class="tabs">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bin="attrs"
                large
                text
                class="tabs boton gray--text"
              >
                <span class="tabs">Registrarse</span>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list class="listitem">
              <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item> <!--  ----Iniciar sesión |Génesis---- --> </v-tab-item>
        <!--  ----Tab de registro |Génesis---- -->
        <v-tab-item>
          <v-card color="card" flat>
            <h2>Crea tu perfil gratuito como paciente</h2>
            <router-link
              style="text-decoration: none; color: inherit"
              to="/auth/register/register"
              ><h3 class="a">
                <v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como
                especialista
              </h3>
            </router-link>
            <!--   <a href="/login"><h3 class="a"><v-icon color="#9966ff">mdi-arrow-left</v-icon>Registrarme como paciente</h3></a> -->
            <v-card-text>
              <v-row>
                <v-col xs="11" sm="11" md="11">
                  <v-text-field
                    outlined
                    placeholder="Ingresa un usuario"
                    class="textfield"
                    color="#b380ff"
                  ></v-text-field>
                  <br />
                  <v-text-field
                    outlined
                    placeholder="Ingresa un correo"
                    class="textfield"
                    color="#b380ff"
                  ></v-text-field>
                  <br />
                  <v-text-field
                    outlined
                    placeholder="Ingresa una contraseña"
                    color="#b380ff"
                    class="textfield"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    hint="Debe contener al menos 8 carácteres"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <br />
                  <v-text-field
                    outlined
                    placeholder="Confirma tu contraseña"
                    class="textfield"
                    color="#b380ff"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    hint="Debe contener mínimo 8 carácteres"
                    @click:append="show1 = !show1"
                  >
                  </v-text-field>
                  <br />
                  <v-btn class="btnn" color="#7900ff" height="50">
                    Registrarme
                  </v-btn>
                  <br />
                  <br />
                  <v-row>
                    <v-col xs="1" sm="3" md="5">
                      <p class="accede">O registrate usando</p>
                    </v-col>
                    <v-col xs="1" sm="2" md="3">
                      <a class="accede">Google</a>
                    </v-col>
                    <v-col xs="1" sm="2" md="3">
                      <a class="accede">Facebook</a>
                    </v-col>
                  </v-row>
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
/* import CountriesCodes from '~/components/CountriesCodes.json'; */

export default {
  name: 'formLogin',
  layout: 'auth',
  data: () => ({
    tabs: 1,
    /*           Countries: CountriesCodes, */
    items: [
      { title: 'COMO PACIENTE', to: '' },
      { title: 'COMO ESPECIALISTA', to: '/auth/register/register' },
      { title: 'COMO LABORATORIO', to: '' },
      { title: 'COMO FARMACIA', to: '' },
    ],
    /*  Reglas para el input de contraseña | Genesis */
    rules: {
      min: (v) => v.length >= 8 || 'Debe contener mínimo 8 carácteres',
    },
    checkbox: false,
    show1: false,
    hasVisiblePassword: false,
  }),
  myFunction: function () {
    if (this.enableDisable) {
      this.enableDisable = false
    } else {
      this.enableDisable = true
    }
  },
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
  color: black;
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
  width: 85%;
  margin-left: -8px;
  font-size: 0.9rem;
  font-family: Montserrat;
}
.label {
  margin-top: 35px;
  margin-left: -40px;
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

  width: 85%;
}
.btnn {
  margin-left: 10%;
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 65%;
}
.btnnn {
  text-transform: unset !important;
  font-family: Montserrat;
  border: thin solid #cccccc;
  color: white !important;
  width: 85%;
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