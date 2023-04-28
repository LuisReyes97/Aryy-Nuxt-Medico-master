<template>
  <div>
    <v-row>
      <v-card>
        <menuPersonal/>
      </v-card>
      <v-col md="10" lg="10" xl="10">
        <v-card flat class="pa-3 mt-2">
          <v-card-subtitle>PERFIL MÉDICO</v-card-subtitle>

        </v-card>

      </v-col>
    </v-row>
  </div>
       
       

</template>

<script>
export default {
  data: () => ({
    files: [],
    select: { institution: 'Unach' },
    items: [
      { institution: 'UVG' },
      { institution: 'Salazar' },
      { institution: 'Universidad del sur' },
    ],
  }),
}
</script>