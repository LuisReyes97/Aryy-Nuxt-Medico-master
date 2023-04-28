<template>
 <v-row class="ml-0 mt-n7" >
      <span class="mt-8">De</span>
      <v-col cols="11" sm="3" xl="3">
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            color="#7900ff"
            class="textfield mb-4"
              outlined
              v-model="time"
              placeholder="08:00 AM"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker color="#9966ff" :max="time2" v-if="modal2" v-model="time" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>

      <span class="mt-8">A</span>
      <v-col cols="11" sm="3" xl="3">
        <v-dialog
          ref="dialog2"
          v-model="modal"
          :return-value.sync="time2"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            color="#7900ff"
            class="textfield mb-4"
              outlined
              v-model="time2"
              placeholder="08:00 AM"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker color="#9966ff" :end="time" v-if="modal" v-model="time2" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog2.save(time2)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row>
</template>
<script>
export default{
  data() {
    return{
      time: null,
      modal2: false,

      time2: null,
      modal: null,


      start: null,
      end: null,
      inputs: [
        {
          name: '',
        },
      ],
    }
  },
  methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
    },
  },
}
</script>
