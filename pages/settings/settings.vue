<template>
    <div>
        <v-breadcrumbs class="breadcrumbs mb-n8" :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <menu-settings/>
    </div>
</template>
<script>
import menuSettings from './menuSettings.vue';
export default {
    components:{menuSettings},
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
          href: '/settings/settings',
        },
        {
          text: 'Cuenta',
          disabled: true,
          href: '/settings/settings',
        },
      ],
    }
  },
}
</script>
<style scoped>
</style>