<!-- seccion de antecedentes no patologicos dentro de medical record | Genesis -->
<template>
   <v-card-text class="mb-6">
    <div class="hidden-sm-and-down">  <p class="titulo">Antecedentes no patológicos </p></div>
      <div class="hidden-md-and-up">  <p class="titulo">Antecedentes <br/> no patológicos</p></div>
  
    <div class="mb-2 mt-n11 d-flex justify-end">

      <!-- componente agregar datos -->
    <new-non-pathologic v-if="this.dataNull===true"/>

    <!-- componente editar datos -->
    <edit-non-pathologic v-else/>
    </div>
    <v-divider class="mt-n1"></v-divider>
     
<list-nonpathologic  @getData="getData"/>
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
  import ListNonpathologic from '~/components/data-list-medicalrecord/list-nonpathologic.vue'
 import newNonPathologic from '~/components/newInfoForms/newNonPathologic.vue' 
import editNonPathologic from '~/components/editableForms/editNonPathologic.vue'
export default {
  components: {editNonPathologic,ListNonpathologic,newNonPathologic},
  layout: 'medicalRecord',
  data() {
    return {
      null:'',
      dataNull:true,
      alcoholismNull:'',
      other_substancesNull:'',
      physical_activityNull:'',
      rest_timeNull:'',
      smokingNull:'',
      dataerror:'',
      incompleto:false,
      errordata:'',
      overlay: false,
      editt: false,
      create: false,
    }
  },
  mounted() {
    this.datos()
  },
  methods: {
    getData(data) {
      this.null = data;
    },
    /* obtener informacion | Genesis */
    datos() {
      this.$axios
        .get(
          `api/v1/medical-history/physician/non-pathological-background/patient/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.diet = res.data.data.diet
          this.other_substances = res.data.data.other_substances
          this.nullVerify()

         /* para verificar si es nulo | Genesis */
          this.alcoholismNull = res.data.data.alcoholim
          this.physical_activityNull= res.data.data.physical_activity
          this.smokingNull=res.data.data.smoking

        }).catch((error) => {
          this.dataerror = ''
          this.dataerror = error
        })
    },
    nullVerify(){
      if(this.alcoholismNull===null){
        console.log("datanull if")
      }else{
        this.dataNull=false
        console.log("datanull else")
      }
    },

    reloadPage(){
      this.$router.go()
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
</style>