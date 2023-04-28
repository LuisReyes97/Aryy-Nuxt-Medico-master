<!-- seccion de historial de vacunacion dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <p class="titulo">Historial de vacunación</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <new-vaccination />
    </div>
    <v-divider class="mt-n1"></v-divider>
    <list-vaccination />

    <p class="ml-3 mb-n1 mt-n1 d-flex justify-end">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el 25 de diciembre de 2022
    </p>
  </v-card-text>
</template>
  <script>
import listVaccination from '~/components/data-list-medicalrecord/list-vaccination.vue'
import newVaccination from '~/components/newInfoForms/newVaccination.vue'
export default {
  layout: 'medicalRecord',
  components: { listVaccination, newVaccination },
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
p.cuestion {
  font-size: 115%;
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
.textfieldd {
  font-size: Montserrat;
}
</style>