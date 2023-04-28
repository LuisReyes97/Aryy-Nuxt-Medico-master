<template>
    <v-container>
        <div>
            <v-breadcrumbs class="breadcrumbs ml-n7" :items="items">
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                        <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
                        <span class="breadcrumbs">{{ item.text }}</span>
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </div>
        <v-card color="card"     
            outlined
            class="greeting-card"
            rounded="xl" 
        >
            <table-list/>
        </v-card>
    </v-container>
</template>

<script>
import tableList from '~/components/table/table-list.vue'
export default{
  components: { tableList},
    data(){
        return{
            items:[
                {
                    icon: 'mdi-home-outline',
                    disabled: false,
                    href: '/'
                },
                {
                    text: 'Lista de pacientes',
                    disabled: false,
                    href: '/patients'

                }
            ],
        }
    },
}
</script>

<style>
.greeting-card{
  box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -webkit-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
  -moz-box-shadow: 6px 11px 19px -1px rgba(235,225,252,0.93);
}

</style>

