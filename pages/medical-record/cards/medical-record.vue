<!-- seccion de expediente médico | Genesis -->
<template>
  <div>
    <!-- sección de alergias | Genesis -->
    <v-card><allergies /></v-card>
    <!--    seccion antecedentes patológicos | Genesis -->
    <v-card><pathologic-antecedents /></v-card>
    <!--    seccion antecedentes no patológicos | Genesis -->
    <v-card><non-pathologic-antecedents /></v-card>
    <!--    seccion antecedentes heredofamiliares | Genesis -->
    <v-card><family-history /></v-card>
    <!--    seccion medicamento activo | Genesis -->
    <v-card><medicine /></v-card>
    <!--    seccion medicamento anterior | Genesis -->
    <v-card><previuos-medication /></v-card>
    <!--    seccion historial de vacunación | Genesis -->
    <v-card><vaccination /></v-card>
     <!--    otros antecedentes | Genesis -->
     <br/>
     <v-card><others/></v-card>
  </div>
</template>
<script>
import Allergies from './medical-records/allergies.vue'
import PathologicAntecedents from './medical-records/pathologic-antecedents.vue'
import NonPathologicAntecedents from './medical-records/non-pathologic-antecedents.vue'
import FamilyHistory from './medical-records/family-history.vue'
import medicine from './medical-records/medicine.vue'
import PreviuosMedication from './medical-records/previuos-medication.vue'
import vaccination from './medical-records/vaccination.vue'
import others from './medical-records/others.vue'
export default {
  layout: 'medicalRecord',
  components: {
    Allergies,
    PathologicAntecedents,
    NonPathologicAntecedents,
    FamilyHistory,
    medicine,
    PreviuosMedication,
    vaccination,
    others,
  },
  data() {
    return {
    }
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
</style>