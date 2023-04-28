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
   <account  v-if="$vuetify.breakpoint.lgAndUp"/>
    <v-row>
       <v-row>
          <menu-personal  v-if="$vuetify.breakpoint.lgAndUp" />
        
        </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <account-menu v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" flat class="pa-3">
          <v-card-subtitle class="pa-3 mb-n5">
          DATOS DE LA SUSCRIPCIÓN
          </v-card-subtitle>
          <v-form ref="form" v-model="valid">
            <v-card-text class="pa-3 mt-5">
              <v-row>
                <!--  CAMPO TIPO DE PLAN| LUIS REYES -->
                <v-col md="4" cols="12">
                  <p>Tipo de plan</p>
                  <v-text-field
                    v-model="plan"
                    dense
                    :disabled="!isEditing"
                  >{{plan}}</v-text-field>
                </v-col>

                <!-- CAMPO NÚMERO DE USUARIO | LUIS REYES -->
                <v-col md="4" cols="12" xl="3">
                  <span>Precio</span>
                  <v-text-field
                    v-model="price"
                    placeholder="1 usuario"
                    dense
                    text
                    :disabled="!isEditing"
                  >
                  </v-text-field>
                  <v-spacer></v-spacer>
                </v-col>
                <!-- CAMPO DATOS DE PAGOS | LUIS REYES -->
                <v-col md="4" cols="12">
                  <span>Datos de pagos</span>
                  <v-autocomplete 
                      dense 
                      placeholder="No hay datos de pago"
                      :disabled="!isEditing"
                    >
                  </v-autocomplete>
                </v-col>
              </v-row>
              <p class="input mb-n4"
                >¿Quieres cancelar tu suscripción? Contacta a Soporte por el
                chat</p
              >
              <v-ship  ref="" solo></v-ship>
              <!-- botones | @click="overlay = !overlay" -->
              <BR /><BR />
              <v-btn
                height="50px"
                class="white--text save mt-7"
                color="#7900ff"
                large
                @click="isEditing = !isEditing"
                >Editar suscripción</v-btn
              >

              <v-btn
              v-on:clik="postSucription"
              >
                guardar datos
              </v-btn>
              <BR /><BR />
              <v-overlay :value="overlay">
                <v-alert
                  class="rounded-xl"
                  icon="mdi-check-circle"
                  color="green"
                  >Datos actualizados correctamente.</v-alert
                >
              </v-overlay>
              <v-card-subtitle class="pa-3 mt-n2 mb-n10">
                <H1 class="mb-5">MÉTODOS DE PAGO</H1>
              </v-card-subtitle>
            </v-card-text>
            <br /><br />
            <span>No hay método de pago guardado</span>
            <br /><br />
            
            
            <!-- boton de metodo de pago -->
     
              <v-row >
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                  rounded-xl
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn  text color="#9966ff"   dark v-bind="attrs" v-on="on">
                      <v-icon class="icon">mdi-plus-circle</v-icon>Agregar un método de
                            pago
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Métodos de Pagos</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <!-- PAGO DE TARJETA -->
                          <v-col cols="12" md="6">
                            <v-btn outlined small color="indigo">
                              <v-icon left> mdi-credit-card </v-icon> pagar con
                              tarjeta
                              </v-btn
                            >
                          </v-col>
                          <!-- PAGO DE PAYPAL -->

                          <v-col cols="12" md="6">
                            <v-btn outlined small color="indigo">
                              <v-icon left> mdi-parking </v-icon> pagar con
                              PayPal</v-btn
                            >
                          </v-col>
                            <!-- PAGO DE GooglePay -->
                          <v-col cols="12" md="6">
                            <v-btn outlined small color="indigo">
                              <v-icon left> mdi-google </v-icon> pagar con
                              GooglePay</v-btn
                            >
                          </v-col>
                            <!-- PAGO DE APPLE PAY -->
                          <v-col cols="12" md="6">
                            <v-btn outlined small color="indigo">
                              <v-icon left> mdi-food-apple </v-icon> pagar con
                              ApplePay</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-row>
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
      selectedItem: 1,
      isEditing: null,
      plan: "",
      price: "",
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

      /* OBTENER plan */
    getSuscription(){
      this.$axios
       .get('/api/v1/users/subscriptions',{
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
       })
       .then((res) => {
       /*  console.log(res) */
        this.price = res.data.data[0].price
        this.plan = res.data.data[0].name
        /* console.log(res.data.data[0].name) */
       })

    },

    postSucription(){
      this.$axios
        .post('/api/v1/users/subscriptions',{
          user_subscription:[{
            name: this.plan,
            price: this.price,
          }],
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
        })
        
    },

  },
  mounted() {
    this.getSuscription()
  },
}
</script>
<style>
.v-input__icon--prepend .v-icon {
  color: #9966ff;
  backdrop-filter: pa;
}
.input {
  margin-top: 5px;
  color: #9966ff !important;
  font-family: MontserratMedium;
  font-size: 15px;
}
p.input::first-letter {
  text-transform: uppercase !important;
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
  text-transform: lowercase !important;
  color: #9966ff;
  border: 0px;
}
span.btn::first-letter {
  text-transform: uppercase !important;
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
span {
  color: #999999;
  font-family: Montserrat;
  font-size: 110%;
  text-transform: lowercase !important;
}
p {
  color: #999999 !important;
  font-family: Montserrat;
  font-size: 110%;
  text-transform: lowercase !important;
}

p::first-letter {
  text-transform: uppercase !important;
}

.payment {
  color: #999999 !important;
  font-family: Montserrat;
  font-size: 110%;
  text-transform: lowercase !important;
}

p {
  font-family: MontserratMedium;
  color: gray;
  font-size: 110%;
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