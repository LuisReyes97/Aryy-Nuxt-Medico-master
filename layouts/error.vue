<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ description }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <img src="@/assets/logotipos/ISOLOGO_ARYY.svg" alt="Aryy | Agenda de médicos">
    <v-btn class="btn" color="primary" nuxt to="/">Inicio</v-btn>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      description: '404 Not Found | Aryy en Construcción',
      pageNotFound: 'Página no encontrada',
      otherError: 'Error :(',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
/* código para centrar texto | Luis Reyes*/
h1 {
  display: block;
  font-size: 30px;
  text-align: center;
}

/* código para centrar logotipo de Aryy | Luis Reyes*/
img {
  height: 180px;
  width: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transform: rotateY(360deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}

/* código del boton | Luis Reyes*/
.btn{
  width: 10%;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
}
</style>
