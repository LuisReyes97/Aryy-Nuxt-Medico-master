<!-- seccion de medicamento activo dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <p class="titulo">Medicamento activo</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <edit-medicine />
    </div>
    <v-divider class="mt-n1"></v-divider>
    <listMedicine />
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
import editMedicine from '~/components/editableForms/editMedicine.vue'
import listMedicine from '~/components/data-list-medicalrecord/list-medicine.vue'
export default {
  layout: 'medicalRecord',
  components: { editMedicine, listMedicine },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
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