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
    <account v-if="$vuetify.breakpoint.lgAndUp" class="mb-2"/>
    <v-row>
       <v-row>
          <menu-personal v-if="$vuetify.breakpoint.lgAndUp" />
         
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" height="800px" flat class="pa-3">
          <v-col xl="12">
            <!-- alert para notificar error | Genesis -->
            <v-alert
              v-if="error"
              class="alert mt-n6 mb-9"
              v-model="errorphone"
              dense
              outlined
              type="error"
            >
              {{ errorphone }} <br />
              {{ passworderror }} <br />
              {{ erroremail }}
            </v-alert>
          </v-col>
          <!--  <v-card-subtitle
            ><H1 class="mb-5 mt-n8">FOTO DE PERFIL</H1></v-card-subtitle>
          {{ buttonText }}
          <v-card-text class="d-flex">
            <v-avatar class="me-6" size="80">
              <v-img
                v-if="!photo"
                v-bind:src="require('@/assets/icons/avatar.png')"
              ></v-img>
              <v-img v-else :src="imageUrl" />
            </v-avatar>
            <div>
              <v-btn
                height="50px"
                class="white--text save"
                style="text-transform: uppercase"
                :loading="isSelecting"
                @click="handleFileImport"
                color="#7900ff"
                large
              >
                Actualizar foto
              </v-btn>
              <input
                :v-model="selectedFile"
                ref="uploader"
                class="d-none"
                type="file"
                v-on:click="uploadfoto()"
                @change="onFileChanged"
              />
              <v-btn
                height="50px"
                class="restore ml-3"
                color="#999999"
                outlined
                large
                >Restaurar foto</v-btn
              >
              <p class="text-sm mt-5">
                Formatos permitidos: JPG o PNG. Tamaño máximo de archivo 2 MB, y
                512x512 píxeles.
              </p>
            </div>
          </v-card-text> -->
          <!-- formulario | Luis Reyes -->
          <v-card-subtitle class="mt-n8 mb-3" >
             INFORMACIÓN DE PERFIL</v-card-subtitle
            >
          <v-card-text class="mt-n6">
         
            <v-form ref="form" class="multi-col-validation">
              <v-row>
                <v-col xs="7" md="7" lg="7" xl="7" cols="10">
                  <p>Nombre completo*</p>
                  <v-text-field
                    v-model="full_name"
                    color="#9966ff"
                    :disabled="!named"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col  cols="1">
                  <v-btn @click="named = !named" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="10">
                  <p>Género*</p>
                  <v-text-field
                    v-model="gender"
                    color="#9966ff"
                    :disabled="!genderd"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-btn @click="genderd = !genderd" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

           

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="10">
                  <p>Fecha de nacimiento</p>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        color="#9966ff"
                        class="textfield"
                        outlined
                        :disabled="!dated"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      locale="es-mx"
                      color="#9966ff"
                      v-model="date"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col  cols="1">
                  <v-btn @click="dated = !dated" class="iconos mt-9" icon
                    ><v-img
                      :src="require('@/assets/icons/icon_edit.svg')"
                      max-width="25"
                    ></v-img> </v-btn
                ></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="10">
                  <p>Teléfono personal*</p>
                  <v-text-field
                    v-model="phone_number"
                    color="#9966ff"
                    :disabled="!phoned"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xl="1"></v-col>

                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="10">
                  <p>Correo*</p>
                  <v-text-field
                    v-model="email"
                    :disabled="!emaild"
                    color="#9966ff"
                    class="textfield"
                    placeholder="Selecciona una especialidad"
                    outlined
                  ></v-text-field>
                </v-col>

              
                <v-col xs="3" sm="5" md="3" lg="3" xl="3" cols="10">
                  <p>Contraseña*</p>
                  <v-text-field
                    v-model="password"
                    color="#9966ff"
                    :disabled="!passwordd"
                    class="textfield"
                    placeholder="********"
                    outlined
                  ></v-text-field>
                </v-col>
              
              </v-row>
              <v-row>
                <v-col cols="10" xl="2">
                <v-btn
                block
                  height="50px"
                  class="white--text save"
                  v-on:click="update"
                  color="#7900ff"
                  large
                  ><span class="btnsave">Guardar cambios</span></v-btn
                >
                <v-overlay v-if="ok" v-model="overlay">
                  <v-alert
                    class="rounded-xl"
                    icon="mdi-check-circle"
                    color="green"
                    >Datos actualizados correctamente.</v-alert
                  >
                </v-overlay>
              </v-col>
              <v-col cols="10" xl="2">
                <v-dialog v-model="dialog" persistent max-width="450">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      block
                      v-bind="attrs"
                      v-on="on"
                      height="50px"
                      class="restore "
                      color="#999999"
                      outlined
                      large
                      ><span class="btnrestore">Restaurar todo</span></v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 justify-center">
                      <p class="reset">¿Está seguro de restaurar los datos?</p>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn color="#9966ff" text @click="dialog = false">
                        No
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#9966ff"
                        text
                        v-on:click="reset"
                        @click="dialog = false"
                      >
                        si
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Account from './account.vue'
import accountMenu from './accountMenu.vue'
import menuPersonal from '@/pages/accounts/edit/PersonalProfile/menuPersonal.vue'

export default {
  components: {
    menuPersonal,
    Account,
    accountMenu
  },

  data() {
    return {
      error: '',
      ok: '',
      errorphone: '',
      passworderror: '',
      erroremail: '',
      msg: '',
      photo: '',
      defaultButtonText: '',
      imageUrl: '',
      emaild: '',
      genderd: '',
      phoned: '',
      named: '',
      dated: '',
      passwordd: '',
      passwords: [],
      overlay: false,
      full_name: '',
      gender: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: '',
      password_confirmationerror: '',
      birthday: '',
      isSelecting: false,
      selectedFile: null,
      dialog: false,
      dialogg: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      select: { state: 'Hombre', estado: 'chiapas' },
      items: [
        { state: 'Hombre', estado: 'Chiapas' },
        { state: 'Mujer', estado: 'Guerrero' },
        { state: 'No binario', estado: 'Puebla' },
      ],
      emailRules: [
        (v) => !!v || 'E-mail is necesario',
        (v) => /.+@.+/.test(v) || 'E-mail invalido',
      ],
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Perfil personal',
          disabled: false,
          href: '/accounts/edit/general-info',
        },
        {
          text: 'Perfil',
          disabled: true,
          href: '/accounts/edit/general-info',
        },
      ],
    }
  },
  computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
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
  methods: {
    getinfoUser() {
      this.$axios
        .get('/api/v1/user/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
          this.full_name = res.data.data.full_name
          this.gender = res.data.data.gender
          this.email = res.data.data.email
          this.phone_number = res.data.data.phone_number
          this.birthday = res.data.data.birthday
          this.password = res.data.data.password
          /*  this.password = res.data.data.password */
        })
    },

    update() {
      this.$axios
        .put(
          '/api/v1/user/profile',
          {
            full_name: this.full_name,
            gender: this.gender,
            email: this.email,
            phone_number: this.phone_number,
            birthday: this.date,
            country_code: '52',
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then(() => {
          this.overlay = true
          this.ok = 'ok'
          if (this.password_confirmation === '') {
            this.$router.go(this.$router.currentRoute)
          } else {
            localStorage.removeItem('token')
            console.log('cierre de sesión')
            this.$router.replace('/auth/login')
          }
        })
        .catch((error) => {
          this.error = 'error'
          this.errorphone = error.response.data.errors.phone_number[0]
          this.passworderror = error.response.data.errors.password[0]
          this.erroremail = error.response.data.errors.email[0]
        })
    },

    reset() {
      this.$refs.form.reset()
    },
  },

  mounted() {
    console.log('verificando')
    this.getinfoUser()
  },
}
</script>
<style>
p.reset {
  font-family: Montserrat;
  font-size: 90%;
}
.alert {
  font-family: Montserrat;
}
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
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
  border: 2px solid #999999;
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
  font-family: Montserrat !important;
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
  span.btnrestore{
    font-size: 1.6vh !important;
    color: #999999 !important;
  }
  span.btnsave{
    font-size: 1.6vh !important;
    color: white !important;
  }
</style>

