<!-- seccion de alergias dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <p class="titulo">Alergias</p>
    <div class="mb-2 mt-n11 d-flex justify-end">
      <!-- componente agregar datos -->
      <new-allergies v-if="!msg" />
      
       <!-- componente editar datos -->
      <edit-allergies v-else />
    </div>
    <v-divider class="mt-n1 mb-3"></v-divider>
    <list-alergies />
    <p class="ml-3 mb-n1 mt-n1 d-flex justify-end">
      <img
        class="mr-3"
        width="20"
        :src="require('@/assets/icons/icon_timestamp.svg')"
      />Editado el {{ time }}
    </p>
  </v-card-text>
</template>
  <script>
import listAlergies from '~/components/data-list-medicalrecord/list-allergies.vue'
import newAllergies from '~/components/newInfoForms/newAllergies.vue'
import editAllergies from '~/components/editableForms/editAllergies.vue'
export default {
  layout: 'medicalRecord',
  components: { listAlergies, newAllergies, editAllergies },
  data() {return {msg: '',}},
  methods: {
    alergiass() {
      this.$axios
        .get(
          `api/v1/medical-records/physician/allergies/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.msg = res.data.data.drug_allergy[0]
        })
    },
  },

  mounted() {
    this.alergiass()
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
p.cuestion {
  font-size: 115%;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
  font-size: 1.1rem;
}
</style>