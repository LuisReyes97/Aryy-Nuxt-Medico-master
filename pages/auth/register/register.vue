<template>
  <v-row class="fondo">
    <!-- división de la pantalla en video y componente de login | Genesis -->
    <v-col xs="12" sm="12" md="5" lg="7" mg="7">
      <div class="d-flex flex-column justify-space-between align-end">
        <video
          id="video-player"
          playsinline
          loop
          autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
          class="mb-n16"
          :aspect-ratio="16 / 9"
          width="1300px"
          height="1200px"
        ></video>
      </div>
    </v-col>
    <v-col class="fondo ml-n6" xs="12" sm="12" md="7" lg="5" mg="5">
      <specialist-view />
    </v-col>
  </v-row>
</template>
  <script>
import specialistView from './registerViews/specialistView.vue'
export default {
  name: 'LoginRA',
  components: {
    specialistView,
  },
  layout: 'auth',
  data: () => ({
    cld: null,
    width: 200,
    player: null,
  }),
}
</script>
  <style>
/* estilos para cubrir completamente la pantalla del video | Genesis */
@media screen and (max-width: 960px) {
  #video-player {
    display: none;
  }
}
.fondo {
  height: 1210px;
  color: white;
  background: white;
}
</style>