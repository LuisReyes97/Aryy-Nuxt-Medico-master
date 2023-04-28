<template>
  <nuxt-link to="/medical-record/medical-record">
  <v-card
    class="greeting-card "
    outlined
    color="#ffffff"
  >
    <v-row class="ma-0 pa-0">
      <v-col cols="12">
          <div>
            <p class="texto" align="left">
                INICIAR <br> NUEVA CONSULTAS
            </p>
          </div>
      </v-col>
      <v-col cols="3">
           <img
          contain
          class="greeting-card-trophy"
          src="@/assets/icons/icon_consulta.svg"
        />
      </v-col>
    </v-row>
  </v-card>
</nuxt-link>
</template>
<style lang="scss" scoped>
.greeting-card {
  position: relative;
  background: rgb(255,255,255);
  background: linear-gradient(254deg, rgba(255,255,255,1) 0%, rgba(245,239,255,1) 58%); 
  border-radius: 30px;
      .greeting-card-bg {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .greeting-card-trophy {
        position: absolute;
        max-height: 50vh;
        max-width: 13vh;
        bottom: 25%;
        right: 10%;
      }
}
.texto{
  position: absolute;
  top: 12vh;
  font-size: 2vh;
  font-family: MontserratBold;
  color: #4f565f;
  margin-left: 3vh;
}
.greeting-card{
  color: #f4edff;
  box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  height: 25vh;
  width: 50vh;
}
.greeting-card:hover {
  color: #ffffff;
  background: rgb(121,0,255);
  background: linear-gradient(170deg, rgba(121,0,255,1) 0%, rgba(121,0,255,1) 78%, rgba(89,227,255,1) 100%); 
    .texto{
      color: #ffffff;
    }
}

.card :hover{
  color: #ffffff;
  background: #5d01db;
}
</style>