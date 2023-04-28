<template>
  <div id="myapp">
    <div class="row">
      <div class="col-md-6">
        <div class="input-group">
          <div class="custom-file mb-3">

            <input
              type="file"
              class="custom-file-input"
              id="uploadfiles"
              ref="uploadfiles"
              multiple
              required
            />
          </div>
            <label class="custom-file-label" for="uploadfiles"
              >Elija varias archivos para cargar</label
            >
        </div>
      </div>
      <div class="col-md-2">
        <v-btn
          type="button"
          @click="uploadFile()"
          name="upload"
          class="btn btn-primary"
        >
          Cargar Archivos
        </v-btn>
      </div>
    </div>
    <hr />
    <!-- Mostrando los archivos cargados -->

    

 

  </div>

</template>

<script>

export default {
    data(){
        return {
            file: '',
            filenames: [],
        }
    },
    methods: {
    uploadFile: function () {
      const el = this
      
    //   const formData = new FormData()

      // Leer archivos seleccionados
      const files = this.$refs.uploadfiles.files
      const totalfiles = this.$refs.uploadfiles.files.length
    

    //   formData.append('certificate_photo', files[0])

    // console.log(formData)

    // files.forEach(element => console.log(element));

//       files.forEach((file) => {
//     formData.append('certificate_photo', file);
// });

const datos = new  FormData()

    // datos.append('certificate_photo', files[0])
      for (let index = 0; index < totalfiles; index++) 
      {
        datos.append("certificate_photo[]", files[index]);
      }
    

      this.$axios
        .post('/api/v1/physician/educationalbackground/uploadcertificate', datos, {
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'multipart/form-data',
           
          },
        })
        .then(function (response) {
          el.filenames = response.data

          alert(el.filenames.length + ' los archivos se han subido.')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}

</script>