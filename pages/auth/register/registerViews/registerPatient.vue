<template>
  <v-row class="fondo">
    <!-- división de la pantalla en video y componente para el tab de registro | Genesis -->
    <v-col xs="12" sm="12" md="6" lg="7" mg="7">
      <video
        id="video-player"
        playsinline
        loop
        autoplay
        :src="require('@/assets/videos/introprueba.mp4')"
        class="video"
      ></video>
    </v-col>
    <v-col class="fondo" xs="12" sm="12" md="5" lg="5" mg="5">
      <patient-view />
    </v-col>
  </v-row>
</template>
  <script>
import patientView from './patientView.vue'
export default {
  name: 'LoginRA',
  components: {
    patientView,
  },
  layout: 'auth',
  data: () => ({
    cld: null,
    player: null,
  }),
}
</script>
  <style>
/* estilos para cubrir completamente la pantalla del video | Genesis */
.video {
  margin-bottom: -50px;
  width: 110%;
  margin-left: -150px;
}
.fondo {
  color: white;
  background: white;
}
</style>