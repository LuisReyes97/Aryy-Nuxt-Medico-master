<!-- seccion de antecedentes heredofamiliares dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
    <div class="hidden-sm-and-down">
      <p class="titulo">Antecedentes heredofamiliares</p>
              </div>
   
    <div class="hidden-md-and-up">
      <p class="titulo">Antecedentes <br/> heredofamiliares</p>
    </div>
    <div class="mb-2 mt-n11 d-flex justify-end">
    <!-- componente agregar datos -->
      <new-family-history v-if="this.errordata"/>

      <!-- componente editar datos -->
      <edit-family-history v-else/>
     
    </div>
    <v-divider class="mt-n1"></v-divider>
   <list-familyhistory/>
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
 import newFamilyHistory from '~/components/newInfoForms/newFamilyHistory.vue' 
import editFamilyHistory from '~/components/editableForms/editFamilyHistory.vue'
import listFamilyhistory from '~/components/data-list-medicalrecord/list-familyhistory.vue'
export default {
  components: {listFamilyhistory,editFamilyHistory,newFamilyHistory},
  layout: 'medicalRecord',
  data() {
    return {
      overlay: false,
      dialog: false,
      incompleto: false,
      errordata: '',
      edit:'',
      diabetes: '',
      family: [],
      disease: '',
      pressure: '',
      thyroid: '',
      blood: '',
      cancer: '',
      kidney: '',
      null: '',
      dataerror:'',
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
    this.datos()
  },
  methods: {
    /* obtener informacion | Genesis */
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/hereditary-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.null=res.data.data.blood_diseases
          console.log(res)
        }).catch((error) => {
          this.errordata = ''
          this.errordata = error.response.data.msg
        })
        
    },
  }
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
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  background-color: white;
  text-transform: unset !important;
}
</style>