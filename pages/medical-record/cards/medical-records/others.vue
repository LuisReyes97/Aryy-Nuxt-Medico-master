<!-- seccion de otros dentro de medical record | Genesis -->
<template>
  <v-card-text class="mt-n7">
    <p class="titulo">Otros antecedentes</p>
    <v-divider class="mt-n2 mb-5" />
    <v-row>
      <v-col md="4" lg="4" xl="4">
        <psychiatric-history />
      </v-col>
      <v-col md="8" lg="8" xl="8"></v-col>
      <v-col md="4" lg="4" xl="4">
        <gynecological-history />
      </v-col>
      <v-col md="8" lg="8" xl="8"></v-col>
      <v-col md="4" lg="4" xl="4">
        <perinatal-history />
      </v-col>
      <v-col md="8" lg="8" xl="8"></v-col>
      <v-col md="4" lg="4" xl="4">
        <postnatal-history />
      </v-col>
      <v-col md="8" lg="8" xl="8"></v-col>
      <v-col md="4" lg="4" xl="4">
        <customized-questionnaire />
      </v-col>
    </v-row>
  </v-card-text>
</template>
  <script>
import GynecologicalHistory from './others/gynecological-history.vue'
import PsychiatricHistory from './others/psychiatric-history.vue'
import PerinatalHistory from './others/perinatal-history.vue'
import PostnatalHistory from './others/postnatal-history.vue'
import CustomizedQuestionnaire from './others/customized-questionnaire.vue'
export default {
  layout: 'medicalRecord',
  components: {
    PsychiatricHistory,
    GynecologicalHistory,
    PerinatalHistory,
    PostnatalHistory,
    CustomizedQuestionnaire,
  },
  data() {
    return {}
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
.vradio {
  font-size: 5px;
}
</style>