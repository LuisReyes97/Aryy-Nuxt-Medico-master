<!-- seccion de consulta medica | Genesis -->
<template>
  <div>
    <v-container>
    <p>Signos vitales</p>
    <v-row>
      <!-- Signos vitales -->
      <v-col cols="12" md="4" sm="4">
        <!-- Temperatura -->
        <v-text-field
          v-model="temperature"
          dense
          outlined
          label="Temperatura"
          prepend-icon="mdi-thermometer"
          suffix="°C"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_temperature.svg')"
            />
          </template>
        </v-text-field>
      </v-col>
      <!-- PESO -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="weight"
          dense
          outlined
          label="Peso"
          prepend-icon="mdi-map-marker"
          suffix="Kg"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_weight.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- FRECUENCIA RESPIRATORIA -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="breathing_frecuency"
          dense
          outlined
          label="Frecuencia respiratoria"
          suffix="R/M"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_frequency.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- PRESION SISTOLICA -->
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="systolic_pressure"
          dense
          outlined
          label="Sistolica"
          suffix="mmHg"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_pressure.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- PRESION diastolica -->
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="diasystolic_pressure"
          dense
          outlined
          label="Diastolica"
          suffix="mmHg"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_pressure.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- ritmo cardiaco -->
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="heart_rate"
          dense
          outlined
          label="Frecuencia cardiaca"
          suffix="bpm"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_pressureheart.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- saturación de oxigenos -->
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="oxygen_saturation"
          dense
          outlined
          label="Saturación de Oxigeno"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_oxygen.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- Masa muscular -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="body_mass"
          dense
          label="Masa Muscular"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_musculemass.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- Grasa corporal -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="body_fat"
          dense
          label="Grasa corporal"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- perdida de peso -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="weight_loss"
          dense
          label="Perdida de peso"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- Grasa -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="fat"
          dense
          label="Grasa"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>
      
      <!-- cintura -->
      
      <v-col cols="12" md="4" sm="4">
        <v-text-field v-model="waist" dense label="Cintura" outlined suffix="%">
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>
      
      <!-- agua -->
      
      <v-col cols="12" md="4" sm="4">
        <v-text-field v-model="water" dense label="Agua" outlined suffix="%">
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- musculo -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="muscle"
          dense
          label="musculo"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>

      <!-- abdomen -->

      <v-col cols="12" md="4" sm="4">
        <v-text-field
          v-model="abdomen"
          dense
          label="musculo"
          outlined
          suffix="%"
        >
          <template #prepend>
            <img
              width="20"
              height="20"
              :src="require('@/assets/icons/icon_corporalfat.svg')"
            />
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>

    </v-row>

    <p>Descripción de sintomas</p>
    <v-textarea
      v-model="symptom"
      color="#7900ff"
      placeholder="Escribe aquí los síntomas del paciente"
      outlined
    ></v-textarea>




    <v-btn-toggle class="v-checkbox mt-n6">
      <v-checkbox
      v-model="yes"
        color="#7900ff"
        class="mr-5"
        label="Si"
      ></v-checkbox>
      <v-checkbox color="#7900ff" v-model="no" label="No"></v-checkbox>
    </v-btn-toggle>
    
    <v-textarea
      v-model="medical_examination"
      color="#7900ff"
      v-if="yes"
      placeholder="Escribe aquí los datos de la exploración médica"
      outlined
    ></v-textarea>
    
<!--     <v-col xs="12" sm="12" md="12" lg="12" xl="12">
      <odontograma />
    </v-col> -->

<!-- AGREGAR MEDICAMENTO -->
<v-col cols="12">
    <p>Diagnostico</p>
      <v-text-field
          v-model="diagnosis"
          outlined
          color="#7900ff"
          placeholder="Escribe aquí el diagnóstico"
      ></v-text-field>
</v-col>
    <v-row v-for="input in inputs" :key="input.id" >
      <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="3">
        <!-- MARCA -->
        <p>Marca</p>
        <v-text-field
          v-model="brand"
          outlined
          color="#7900ff"
          placeholder="Escribe la marca"
        ></v-text-field>
      </v-col>
      
      <!-- MEDICAMENTO -->
      <v-col  cols="12" xs="12" sm="12" md="4" lg="3" xl="3">
        <p>medicamento</p>
        <v-text-field
          v-model="drug_name"
          outlined
          color="#7900ff"
          placeholder="Nombre del medicamento"
        ></v-text-field>
      </v-col>

      <!-- presentacion -->
      <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
        <p>Presentación</p>
        <v-text-field
          v-model="presentation"
          outlined
          color="#7900ff"
          placeholder="Escribre la presentación"
        ></v-text-field>
      </v-col>

      <!-- TOMAR -->

      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <p>Tomar</p>
        <v-text-field
          v-model="amount"
          outlined
          color="#7900ff"
          placeholder="Cada 8 horas"
        ></v-text-field>
      </v-col>

      <!-- FRECUENCIA -->

      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <p>Frecuencia</p>
        <v-text-field
          v-model="frequency"
          outlined
          color="#7900ff"
          placeholder="Frecuencia"
        ></v-text-field>
      </v-col>
      
      <!-- duraction -->
      <v-col  cols="10" xs="10" sm="12" md="2" lg="2" xl="2">
        <p>Duración</p>
        <v-text-field
          v-model="duration_days"
          outlined
          color="#7900ff"
          placeholder="15 días"
        ></v-text-field>
      </v-col>

      <!-- instruciones deñ medicamente -->
      <v-col cols="10"  sm="8" md="2" >
        <p>Instrucción</p>
        <v-text-field
          v-model="instruction"
          outlined
          color="#7900ff"
          placeholder="Instrucción del medicamento"
        ></v-text-field>
      </v-col>
      
      <v-col >
        <v-btn @click="deleteInput"  icon>
          <v-img
            :src="require('@/assets/icons/icon_borrarpaciente.svg')"
            max-width="25"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
    
    <v-btn
      class="mt-n7 ml-n4"
      @click="addInput"
      v-bind="attrs"
      v-on="on"
      color="#9966ff"
      text
      ><v-icon class="icon">mdi-plus-circle</v-icon>Añadir otro
      medicamento</v-btn
    >

    <p>Ordenes de laboratorio</p>
    <v-btn-toggle class="v-checkbox mt-n6">
      <v-checkbox
        color="#7900ff"
        v-model="lab"
        class="mr-5"
        label="Estudios de laboratorio"
      ></v-checkbox>
      <v-checkbox
        color="#7900ff"
        v-model="gab"
        label="Estudios de gabinete"
      ></v-checkbox>
    </v-btn-toggle>

    <v-textarea
        v-model="laboratory_studies"
        color="#7900ff"
        v-if="lab"
        placeholder="Escribe aquí los datos del estudio de laboratorio"
        outlined
    ></v-textarea>

    <v-textarea
      v-model="cabinet_studies"
      color="#7900ff"
      v-if="gab"
      placeholder="Escribe aquí los datos del estudio de gabinete"
      outlined
    ></v-textarea>
  
    <v-row>
      <v-col cols="12" xs="12" xl="3">
        <v-btn
          block
          @click="POST_DATA"
          v-on:click="overlay = !overlay"
          height="50px"
          class="white--text mt-7 btn"
          color="#7900ff"
          large
          >Guardar y terminar</v-btn
        ></v-col
      >
      <v-col cols="12" xs="12" xl="3">
        <v-btn
          block
          height="50px"
          class="btn mt-7"
          color="#999999"
          outlined
          large
          >Imprimir receta</v-btn
        ></v-col
      >
      <v-overlay :value="overlay">
        <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
          >Datos actualizados correctamente.</v-alert
        >
      </v-overlay>
    </v-row>

  </v-container>
  </div>
</template>
<script>


export default {
  layout: 'medicalRecord',
 
  data() {
    return {
      overlay: false,
      inputs: [{}],
      yes: false,
      no: false,
      lab: false,
      gab: false,
      temperature: '',
      weight: '',
      breathing_frecuency: '',
      systolic_pressure: '',
      diasystolic_pressure: '',
      heart_rate: '',
      oxygen_saturation: '',
      body_mass: '',
      body_fat: '',
      weight_loss: '',
      fat: '',
      waist: '',
      water: '',
      muscle: '',
      abdomen: '',
      symptom: '',
      diagnosis: '',
      medical_examination: '',
      brand: '',
      drug_name: '',
      presentation: '',
      instruction: '',
      amount: '',
      frequency: '',
      duration_days: '',
      laboratory_studies: ' ',
      cabinet_studies: '',
      idUser:'',
    }
  },
  created(){
    this.id=((this.$route.params.medicalRecord)||this.$route.params.patient)
  },
   watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
  methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      })
    },

    deleteInput(i) {
      this.inputs.splice(i, 1)
    },
    save() {
      this.$router.push('/patients/list')
    },
    
    POST_DATA() {
      this.$axios.post(
        '/api/v1/physician/medical-appointments/'+this.id+'/prescriptions',
        {
          vital_signs:
            {
              temperature: this.temperature,
              weight: this.weight,
              breathing_frecuency: this.breathing_frecuency,
              systolic_pressure: this.systolic_pressure,
              diasystolic_pressure: this.diasystolic_pressure,
              heart_rate: this.heart_rate,
              oxygen_saturation: this.oxygen_saturation,
              body_mass: this.body_mass,
              body_fat: this.body_fat,
              weight_loss: this.weight_loss,
              fat: this.fat,
              waist: this.wait,
              water: this.water,
              muscle: this.muscle,
              abdomen: this.abdomen,
            },
        
          prescription : 
            {
            symptom: this.symptom,
            diagnosis: this.diagnosis,
            medical_examination : this.medical_examination,
            treatment: 
            
              {
                brand: this.brand,
                drug_name : this.drug_name,
                presentation: this.presentation,
                instruction: this.instruction,
                amount: this.amount,
                frequency: this.frequency,
                duration_days: this.duration_days
            }
      
          },
        
          laboratory_studies: this.laboratory_studies,
          cabinet_studies: this.cabinet_studies
        },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
    },
    
    
    postnatalGet() {
      this.$axios
        .get(
          '/api/v1/physician/medical-appointments/patient/'+this.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          alert(res.data.data[1].duration_treatment)
          this.delivery_details = res.data.data.delivery_details
          this.duration_treatment = res.data.data[1].duration_treatment
         
        })
    },

  },
  mounted() {
    this.postnatalGet()
  },
}
</script>
<style scoped>
p {
  color: #999999;
}
.v-checkbox {
  background-color: transparent !important;
}
.montserrat {
  font-family: Montserrat;
}
.btn {
  text-transform: capitalize;
  font-size: 100%;
}
</style>