<template>
    <div>
        <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <img
              width="24"
              height="24"
              :src="require('@/assets/icons/icon_edit.svg')"
            />
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
             <!--  span a mostrar en pantallas md/lg | Genesis -->
            <div class="hidden-sm-and-down">
            <span >HISTORIAL DE MEDICAMENTO</span><br/> </div>
            <div class="hidden-md-and-up">
           <!--    span a mostrar en pantallas xs/sm | Genesis -->
            <span >HISTORIAL <br/> DE MEDICAMENTO</span><br/> </div>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col  v-for="medication in medications" :key="medication" cols="12" sm="6" md="4" xl="12">
                  <div>
                  <p>{{ medication }}</p>
                 <!--  <p class="sub mt-n5">
                    1 comprimido cada 24 horas • 17/NOV/22 a 31/DIC/22
                  </p> -->
                  <v-row class="mt-n8">
                    <v-col cols="6" xl="3">
                      <v-checkbox
                        v-model="complete"
                        class="checkbox"
                        color="#7900ff"
                        label="Completado"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="6" xl="4">
                      <v-checkbox
                        v-model="incomplete"
                        class="checkbox"
                        color="#7900ff"
                        label="No completado"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mt-n10 ml-5 mr-5">
            <v-btn
              block
              v-on:click="status"
              @click="overlay = !overlay"
              height="50px"
              class="white--text save mb-5"
              color="#7900ff"
              large
              >Guardar cambios</v-btn
            >
            <v-overlay :value="overlay">
              <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
                >Datos actualizados correctamente.</v-alert
              >
            </v-overlay>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      name: '',
      idif: '',
      overlay: false,
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      medications: '',
      complete: false,
      incomplete: true,
      
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
  mounted() {
    this.medicine()
    this.medicineVer()
  },
  methods: {
    medicine() {
      this.$axios
        .get(
          `api/v1/physician/medical-history/current-medication/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.medications = res.data.data.medication
          this.name = res.data.data.medication[0]
         
        })
    },

    medicineVer() {
      this.$axios
        .get(
          `api/v1/physician/medical-history/current-medication/${this.$route.params.patient}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.medications = res.data.data.medication
          this.name = res.data.data.medication[0]
        })
    },

    status() {
      this.$axios
        .put(
          `api/v1/physician/status-medicine/${this.$route.params.medicalRecord}`,
          {},
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          location.reload()
          this.complete = true
          this.incomplete = false
        })
    },
  },
}
</script>
<style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #4f565f;
}
p.sub {
  font-family: MontserratMedium;
  color: #999999;
}
p.cuestion {
  font-size: 115%;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.checkbox {
  font-family: Montserrat;
}
</style>