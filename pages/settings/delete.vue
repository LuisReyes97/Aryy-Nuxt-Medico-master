<template>
  <div>
    <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-row v-if="$vuetify.breakpoint.lgAndUp">
        <v-col  cols="12">
          <menu-settings />
        </v-col>
      </v-row>
      <v-col cols="12" md="10" lg="10" xl="11">
        <menu-settings v-if="$vuetify.breakpoint.smAndDown"/>
        <v-card color="card" min-height="800px" flat class="pa-3 montserrat">
          <v-card-title>ELIMINAR CUENTA</v-card-title>
          <v-card-subtitle
            >Al hacer click en continuar, estarás borrando permanentemente tu
            cuenta y todos los accesos serán revocados. Perderás acceso a todos
            los beneficios que aryy te ofrece. <br />
            Este proceso es <b>permanente</b> y no se puede recuperar, deberás
            crear una cuenta nueva.
          </v-card-subtitle>
          <br />
          <br />
          <v-card-text>
            <h1>¿Estás seguro que quieres eliminar tu cuenta?</h1>
            <v-card-subtitle class="delete mb-4"
              ><b
                >Perderás automáticamente acceso a tu cuenta y a todos los
                beneficios <br />
                que aryy ofrece. Este proceso es irreversible.</b
              >
            </v-card-subtitle>

            <v-row class="d-flex justify-center">
              <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="2">
                <v-hover v-slot="{ hover }"
                  ><v-btn
                    block
                    :style="{
                      'background-color': hover ? '#9966ff' : '#7900ff',
                    }"
                    class="white--text deletebtn"
                    large
                    ><span>Cancelar</span></v-btn
                  >
                </v-hover>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="2">
                <v-btn
                  block
                  class=" ml-2"
                  large
                  outlined
                >
                  <span>Eliminar cuenta</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import menuSettings from './menuSettings.vue'
export default {
  components: { menuSettings },
  data() {
    return {
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Ajustes',
          disabled: false,
          href: '/settings/account',
        },
        {
          text: 'Eliminar',
          disabled: true,
          href: '/settings/delete',
        },
      ],
    }
  },
}
</script>
<style scoped>
h1 {
  font-family: MontserratMedium;
  text-align: center;
}
.v-card__subtitle.delete {
  text-align: center;
  color: #999999 !important
}
.deletebtn {
  font-family: Montserrat;
  text-transform: capitalize;
  /*   width: 12%; */
}
.v-card__title {
  font-family: MontserratBold;
  color: #4f565f;
  font-size: 2.2vh;
}
.v-card__subtitle {
  font-size: 1.7vh;
  text-transform: none;
  font-family: Montserrat;
  color: #999999 !important
}

b {
  font-family: MontserratMedium;
  color: #999999 !important
}
</style>