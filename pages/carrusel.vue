<template>
  <div>


    <p>{{list}}</p>

    <v-col md="4" cols="12">
      <v-file-input
        v-model="files"
        color="deep-purple accent-4"
        counter
        label="seleccionar fotos"
        multiple
        placeholder="seleccionar foto"
        prepend-icon="mdi-paperclip"
        outlined
        single-line
        :show-size="1000"
      >
        <template  v-slot:selection="{ index, text }">
          <v-chip
            v-if="index < 2"
            color="deep-purple accent-4"
            dark
            label
            small
          >
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="text-overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
            <v-btn
                v-on:click="postArray()"
                elevation="2"
            >subir</v-btn>

    </v-col>
  </div>
</template>



<script>
export default {
  name: 'Example',
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      list: null,
      files: [],
    }
  },
  methods: {
    postMedical() {
      const formData = new FormData()
      
      formData.append('photo[]', this.selectedFile)
      this.$axios.post('/api/v1/user/uploadprofilephoto', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data',
        },
      })
    },

    getspecialty() {
      this.$axios
        .get('/api/v1/user/profile', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.list = res.data.data.profile_photo
          alert(res.data.data.profile_photo)
        })
    },

    handleFileImport() {
      this.isSelecting = true

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        'focus',
        () => {
          this.isSelecting = false
        },
        { once: true }
      )

      
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]

      
    },

    /* AREGLOS DE CERTIFICADOS  */

    postArray(){
        const formData = new FormData()
        formData.append('certificate_photo[]',this.files)
        this.$axios
         .post('/api/v1/physician/educationalbackground/uploadcertificate', formData, {
            headers:{
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "multipart/form-data"
            }
         })
    }
  },

  mounted() {
    this.getspecialty()
    console.log(this.files)
    this.getOneiewy()
    this.humano()
    this-binomao()
  },
}
</script>