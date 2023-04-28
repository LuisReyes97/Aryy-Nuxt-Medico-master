<!-- seccion de antecedentes patologicos dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <p class="titulo">Antecedentes patológicos</p>
    <div class="mb-2 mt-n11 d-flex justify-end">

      <!-- componente agregar datos -->
      <new-pathologic v-if="this.msg" />

       <!-- componente editar datos -->
      <edit-pathologic v-else />

    </div>
    <v-divider class="mt-n1"></v-divider>
    <list-pathologic />
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
import listPathologic from '~/components/data-list-medicalrecord/list-pathologic.vue'
import editPathologic from '~/components/editableForms/editPathologic.vue'
import newPathologic from '~/components/newInfoForms/newPathologic.vue'
export default {
  layout: 'medicalRecord',
  components: { listPathologic, editPathologic, newPathologic },
  data() {return {msg: '',}},
  
  mounted() {
    this.datos()
  },
  methods: {
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.msg = res.data.msg
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
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
</style>