<!-- seccion de medicamento anterior dentro de medical record | Genesis -->
<template>
  <v-card-text class="mb-6">
      <p class="titulo">Medicamento anterior</p>
    
      <v-divider class="mt-n1"></v-divider>
      <listPreviousMedicine/>

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
  import listPreviousMedicine from '~/components/data-list-medicalrecord/list-previousMedicine.vue'
  export default {
    layout: 'medicalRecord',
    components: {listPreviousMedicine},
    data() {
      return {
        dialog: false,
        alimentarias: '',
        farmacos: '',
        ambientales: '',
        idif: '',
        medications: '',
        name: '',
      }
    },

    mounted() {
    this.medicine()
  },
  methods: {
    medicine() {
      this.$axios
        .get(
          `api/v1/physician/medical-history/previous-medication/${this.$route.params.medicalRecord}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.idif = res.data.data.id
          this.medications = res.data.data.previous_medication
          this.name = res.data.data.previous_medication[0]
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
  </style>