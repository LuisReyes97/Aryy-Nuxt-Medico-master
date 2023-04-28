<template>
  <div>
    <v-dialog persistent v-model="dialog" max-width="150vh">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          @click="sendMessage"
          v-bind="attrs"
          v-on="on"
          class="greeting-card"
          outlined
          color="card"
          solo
        >
          <v-row class="ma-0 pa-0">
            <v-col cols="12" md="6">
              <div>
                <p class="texto" align="left">
                  AGENDAR <br />
                  NUEVA CITA <br />
                  EN CONSULTORIO
                </p>
              </div>
            </v-col>
            <v-col cols="3">
              <img
                contain
                class="greeting-card-trophy"
                src="@/assets/icons/icon_CitaConsultorio.svg"
              />
            </v-col>
          </v-row>
        </v-card>
      </template>
      <!--   componente hijo identifica que card se seleccionó | Genesis -->
      <form-new-patient :parentValue="parentValue" @getData="getData" />
    </v-dialog>
  </div>
</template>

<script>
import formNewPatient from './formNewPatient.vue'
export default {
  components: { formNewPatient },
  data() {
    return {
      dialog: false,
      parentValue: '',
    }
  },
  methods: {
    sendMessage() {
      this.parentValue = 1
    },

    getData(data) {
      this.dialog = data;
    },
  },
}
</script>

<style lang="scss" scoped>
.greeting-card {
  position: relative;
  border-radius: 30px;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    max-height: 50vh;
    max-width: 13vh;
    bottom: 25%;
    right: 10%;
  }
}
.texto {
  position: absolute;
  top: 10vh;
  font-size: 2vh;
  font-family: MontserratBold;
  color: #4f565f;
  margin-left: 3vh;
}
.greeting-card {
  color: #f4edff;
  box-shadow: 6px 11px 19px -1px rgba(235, 225, 252, 0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235, 225, 252, 0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235, 225, 252, 0.93);
  height: 25vh;
}
.greeting-card:hover {
  color: #ffffff;
  background: rgb(121, 0, 255);
  background: linear-gradient(
    170deg,
    rgba(121, 0, 255, 1) 0%,
    rgba(121, 0, 255, 1) 78%,
    rgba(89, 227, 255, 1) 100%
  );
  .texto {
    color: #ffffff;
  }
}
</style>
