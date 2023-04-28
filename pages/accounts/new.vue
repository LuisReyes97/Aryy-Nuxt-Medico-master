<template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox v-model="selected" label="Lunes" value="Lunes"></v-checkbox>
    <v-checkbox v-model="selected" label="Martes" value="Martes"></v-checkbox>
    <v-checkbox v-model="selected" label="Martes" value="Miercoles"></v-checkbox>
    <v-checkbox v-model="selected" label="Martes" value="Jueves"></v-checkbox>
    <v-checkbox v-model="selected" label="Martes" value="Viernes"></v-checkbox>

    <v-text-field  v-model="hora1" value="12"></v-text-field>
    <v-text-field  v-model="hora2"></v-text-field>
    <p>{{time1}}</p>
    <p>{{time2}}</p>
  </v-container>
</template>
<script>


export default {

  layout: 'auth',
  data() {
    return {
      selected: [],
      time1: [],
      time2:[],
      specialist: [
        {
          name: 'v-text-field',
          placeholder: 'Correo electronico',
          outlined: 'false',
          required: ' required',
          type: 'email',
        },
        {
          etiqueta: 'v-text-field',
          placeholder: 'Establece tu contraseña',
          outlined: 'false',
          required: ' required',
          type: 'password',
        },
        {
          etiqueta: 'v-text-field',
          placeholder: 'Confirmar contraseña',
          outlined: 'false',
          required: ' required',
          type: 'password',
        },
      ],
      number: [
        {
          etiqueta: 'v-text-field',
          placeholder: 'codigo',
          outlined: 'false',
          required: ' required',
        },
      ],
      code: [
        {
          etiqueta: 'v-text-field',
          placeholder: 'ceular',
          outlined: 'false',
          required: ' required',
        },
      ],
    }
  },

  methods: {
    
  },
}
</script>