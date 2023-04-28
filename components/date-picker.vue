<template>
  <div>
    <v-row>
      <v-card color="card" flat>
        <v-date-picker
          @change="setData"
          color="#9966ff"
          class="v-date-picker"
          locale="mx-es"
          v-model="focus"
          no-title
        ></v-date-picker>
      </v-card>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      focus: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    }
  },
  methods: {
    setData() {
      this.$emit('getData', this.focus)
    },
  },
}
</script>
  <style>
.v-date-picker {
  font-family: Montserrat;
}
</style>