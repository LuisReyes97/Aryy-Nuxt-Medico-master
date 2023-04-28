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
       <v-row>
          <menu-med v-if="$vuetify.breakpoint.lgAndUp"/>
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" flat height="800px" class="pa-3 mt-2">
          <v-form ref="form" v-model="valid">
            <v-card-subtitle class="pa-3 mt-n2"
              >SERVICIOS</v-card-subtitle
            >
            <v-card-text class="pa-3">
              <v-row>
                <v-col xs="6" md="6" lg="6" xl="6">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mb-5"
                    value="Consulta de primera vez"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="2" md="2" lg="2" xl="1">
                  <v-text-field
                    :disabled="!check"
                    color="#7900ff"
                    class="textfield mb-5"
                    value="$800"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" md="1" lg="1" xl="1"
                  ><v-autocomplete
                    color="#7900ff"
                    :disabled="!check"
                    placeholder="MXN"
                    class="ml-n6"
                    outlined
                    background-color="rgb(242, 242, 242)"
                  ></v-autocomplete
                ></v-col>
                <v-col xs="1" md="1" lg="1" xl="2"></v-col>
                <v-col xs="1" md="1" lg="1" xl="1">
                  <v-btn-toggle borderless class="botones">
                    <v-btn
                      @click="check = !check"
                      v-model="check"
                      class="iconos"
                      icon
                    >
                      <v-img
                        :src="require('@/assets/icons/icon_editpaciente.svg')"
                        max-width="25"
                      ></v-img>
                    </v-btn>
                    <v-btn class="iconos ml-n3" @click="deleteItem(i)" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                        max-width="25"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col xs="6" md="6" lg="6" xl="6">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mt-n5"
                    value="Consulta subsecuente"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="2" md="2" lg="2" xl="1">
                  <v-text-field
                    :disabled="!checks"
                    color="#7900ff"
                    class="textfield mb-5 mt-n5"
                    value="$800"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" md="1" lg="1" xl="1"
                  ><v-autocomplete
                    color="#7900ff"
                    :disabled="!checks"
                    placeholder="MXN"
                    class="ml-n6 mt-n5"
                    outlined
                    background-color="rgb(242, 242, 242)"
                  ></v-autocomplete
                ></v-col>
                <v-col xs="1" md="1" lg="1" xl="2"></v-col>
                <v-col xs="1" md="1" lg="1" xl="1">
                  <v-btn-toggle borderless class="botones mt-n5">
                    <v-btn v-model="checks" class="iconos" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_editpaciente.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                    <v-btn class="iconos ml-n3" @click="deleteItem(item)" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_borrarpaciente.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col xs="6" md="6" lg="6" xl="6">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mt-n5"
                    placeholder="Escribe un servicio médico"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="4" md="4" lg="4" xl="4">
                  <v-text-field
                    color="#7900ff"
                    class="textfield mt-n5"
                    placeholder="Agregar precio de servicio"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col xs="1" md="1" lg="1" xl="1"
                  ><v-autocomplete
                    value="MXN"
                    placeholder="MXN"
                    class="ml-n6 mt-n5"
                    outlined
                    background-color="rgb(242, 242, 242)"
                  ></v-autocomplete
                ></v-col>
              </v-row>
              <v-row class="inputArea" v-for="input in inputs" :key="input.id">
                <v-col xs="6" md="6" lg="6" xl="6">
                  <p class="cedu mt-n5 mb-1">Idiomas*</p>
                  <v-text-field
                    color="#7900ff"
                    class="textfield mb-5"
                    placeholder="Español"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col xs="6" md="6" lg="6" xl="6">
                  <v-btn
                    @click="addInput"
                    v-bind="attrs"
                    v-on="on"
                    class="btn mt-n14 ml-n5"
                    color="#9966ff"
                    text
                    ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro
                    idioma</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-row class="mt-7">
                <v-col xl="2" cols="12">
              <v-btn
              block
              v-on:click="postMedicalinfo"
                @click="overlay = !overlay"
                height="50px"
                class="white--text save "
                color="#7900ff"
                large
                >Guardar cambios</v-btn
              ></v-col>
             
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
            </v-row>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
  import Account from '../account.vue';
  import accountMenu from '../accountMenu.vue';
import MenuMed from './menuMed.vue'
export default {
  components: {
    MenuMed, Account,accountMenu
  },
  data() {
    return {
      textfield: [],
      counter: 0,
      inputs: [
        {
          id: 'fruit0',
          label: 'Enter Fruit Name',
          value: '',
        },
      ],
      overlay: false,
      check: '',
      checks: '',
      selectedItem: 1,
      breadcrumbs: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Perfil médico',
          disabled: false,
          href: '/accounts/edit/medicalProfile-info',
        },
        {
          text: 'Servicios',
          disabled: true,
          href: '/accounts/edit/medicalProfileViews/services',
        },
      ],
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
    deleteItem: function (i) {
      this.textfield.splice(i, 1)
    },
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
  
  <style>
p.cedu {
  font-family: Montserrat;
  font-size: 120%;
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
H1 {
  font-family: MontserratMedium;
  font-size: 120%;
  color: #4f565f;
}
span {
  font-family: Montserrat;
  font-size: 120%;
}
p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
}
.v-card__subtitle{
    font-family: MontserratBold !important;
    font-size: 110% !important;
    color: #4f565f !important;
  }
</style>