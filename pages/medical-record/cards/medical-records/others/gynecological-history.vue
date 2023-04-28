<!-- seccion de "antecedentes gineco-obstreticos" dentro de la seccion "otros" de medical record | Genesis  -->
<template>
  <v-dialog 
    scrollable 
    v-model="dialog" 
    max-width="700px"
  >
   
    <template #activator="{ on, attrs }">
      <v-btn block class="justify-start" width="360px" outlined color="#7900ff" v-bind="attrs" v-on="on">
       <v-icon color="#7900ff">mdi-plus</v-icon> 
      ANTECEDENTES GINECO-OBSTÉTRICOS
    </v-btn>
  </template> 
    <v-card height="600px">
      <v-card-title>
        <span>ANTECEDENTES GINECO-OBSTÉTRICOS</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <p>Fecha de la primera menstruación</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    color="#7900ff"
                    class="save"
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#9966ff"
                  locale="MX-ES"
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="#7900ff" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text ccolor="#7900ff" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <p class="mt-n3">Fecha de la última menstruación</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                  color="#7900ff"
                    class="save"
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker color="#7900ff" v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="#7900ff" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#7900ff" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <p class="mt-n4 mb-n2">Sangrado</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Ligero"
                  value="ligero"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Moderado"
                  value="moderado"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Fuerte"
                  value="fuerte"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Manchado"
                  value="manchado"
                ></v-radio>
              </v-radio-group>

              <p class="mb-n2">Dolor</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Cólicos"
                  value="colicos"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Dolor de cabeza"
                  value="cabeza"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Ovulación"
                  value="ovulacion"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Senos sensibles"
                  value="sensibles"
                ></v-radio>
              </v-radio-group>

              <p class="mb-n2">Higiene íntima</p>
              <v-radio-group style="font-family: Montserrat;" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Tampón"
                  value="tampon"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Toalla"
                  value="toalla"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Protector diario"
                  value="protector"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Copa menstrual"
                  value="copa"
                ></v-radio>
              </v-radio-group>

              <p class="mb-n2">Flujo cervical</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Clara de huevo"
                  value="huevo"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Pegajoso"
                  value="pegajoso"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Cremoso"
                  value="cremoso"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Atípico"
                  value="atipico"
                ></v-radio>
              </v-radio-group>
              <p class="mb-n2">Sexo</p>
              <v-radio-group style="font-family: Montserrat" v-model="cons" row>
                <v-radio
                  color="#b380ff"
                  label="Sin protección"
                  value="noprotec"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Con protección"
                  value="protec"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="Coito interrumpido"
                  value="inter"
                ></v-radio>
              </v-radio-group>

              <p class="mb-n3">Embarazos</p>

              <v-radio-group
                style="font-family: Montserrat"
                v-model="pregnancy"
                row
              >
                <v-radio color="#b380ff" label="Si" value="pregYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="pregNo"></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="pregnancy == 'pregYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Cáncer cérvicouterino</p>

              <v-radio-group
                style="font-family: Montserrat"
                v-model="cervical"
                row
              >
                <v-radio
                  color="#b380ff"
                  label="Si"
                  value="cervicalYes"
                ></v-radio>
                <v-radio
                  color="#b380ff"
                  label="No"
                  value="cervicalNo"
                ></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="cervical == 'cervicalYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Cáncer de mama</p>

              <v-radio-group style="font-family: Montserrat" v-model="mama" row>
                <v-radio color="#b380ff" label="Si" value="mamaYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="mamaNo"></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="mama == 'mamaYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Sexualmente activa</p>

              <v-radio-group
                style="font-family: Montserrat"
                v-model="active"
                row
              >
                <v-radio color="#b380ff" label="Si" value="activeYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="activeNo"></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="active == 'activeYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Método de planificación familiar</p>

              <v-radio-group
                style="font-family: Montserrat"
                v-model="planning"
                row
              >
                <v-radio color="#b380ff" label="Si" value="planYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="planNo"></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3"
                style="font-family: Montserrat"
                v-if="planning == 'planYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p class="mt-n4 mb-n3">Terapia de reemplazo hormonal</p>

              <v-radio-group
                style="font-family: Montserrat"
                v-model="hormonal"
                row
              >
                <v-radio color="#b380ff" label="Si" value="hormYes"></v-radio>
                <v-radio color="#b380ff" label="No" value="hormNo"></v-radio>
              </v-radio-group>
              <v-text-field
              color="#7900ff"
                class="mt-n3 mb-n3"
                style="font-family: Montserrat"
                v-if="hormonal == 'hormYes'"
                outlined
                placeholder="Escriba aquí"
              ></v-text-field>

              <p>Fecha del último papanicolaou</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="save"
                    color="#7900ff"
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#9966ff"
                  locale="MX-ES"
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="#7900ff" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#7900ff" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <p class="mt-n3">Fecha de la última mastrografía</p>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                  color="#7900ff"
                    class="save"
                    v-model="date"
                    outlined
                    placeholder="Selecciona la fecha"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #append>
                      <div style="width: 30px">
                        <v-img
                          style="margin: auto 0"
                          max-width="20"
                          :src="require('@/assets/icons/iconos_citas.svg')"
                        />
                      </div> </template
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#9966ff"
                  locale="MX-ES"
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="#7900ff" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#7900ff" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions >
        <v-btn
          block
          @click="overlay = !overlay"
          height="50px"
          class="white--text save mb-5"
          color="#7900ff"
          large
          >Guardar cambios</v-btn
        >
        <v-overlay :value="overlay">
          <v-alert class="rounded-xl" icon="mdi-check-circle" color="green"
            >Datos actualizados correctamente.</v-alert
          >
        </v-overlay>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  layout: 'medicalRecord',
  components: {},
  data() {
    return {
      overlay: false,
      pregnancy: '',
      cervical: '',
      mama: '',
      active: '',
      planning: '',
      hormonal: '',
      modal: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      medicamentos: [
        {
          name: 'Enalapril',
          mg: '10 mg',
          presentation: 'Tabletas',
          indication: '1 tableta cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
        {
          name: 'Losartán',
          mg: '50 mg',
          presentation: 'Comprimido',
          indication: '1 comprimido cada 24 horas',
          date: '25/DIC/22 a 25/ENE/2023',
        },
      ],
      dialog: false,
      alimentarias: '',
      farmacos: '',
      ambientales: '',
      cons: '',
      support: '',

      /* data entry fields */
      first_menstruation:"",
      last_menstruation: "",
      bleeding: "",
      pain: "",
      intimate_hygiene:"", 
      cervical_discharge: "",
      sex: "",
      pregnancies: "",
      cervical_cancer: "",
      breast_cancer:"", 
      sexually_active: "",
      family_planning: "",
      hormone_replacement_therapy: "",
      last_pap_smear: "",
      last_mammography: "",
    }
  },
  methods: {
    gynecologialPost(){
      this.$axios
        .post('/api/v1/physician/medical-history/gynecological-history/4',{
          first_menstruation: this.first_menstruation,
          last_menstruation: this.last_menstruation,
          bleeding: this.bleeding,
          pain: this.pain,
          intimate_hygiene: this.intimate_hygiene,
          cervical_discharge: this.cervical_discharge,
          sex: this.sex,
          pregnancies: this.pregnancies,
          cervical_cancer: this.cervical_cancer,
          breast_cancer: this.breast_cancer,
          sexually_active: this.sexually_active,
          family_planning: this.family_planning,
          hormone_replacement_therapy: this.hormone_replacement_therapy,
          last_pap_smear: this.last_pap_smear,
          last_mammography: this.last_mammography
        },
        {
          headers: {"Authorization": 'Bearer ' + localStorage.getItem("token"),}
        })
    },
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
}
</script>
<style scoped>
p.titulo {
  font-family: MontserratMedium;
  color: #7900ff;
  font-size: 130%;
}
p {
  font-family: MontserratMedium;
  color: #4f565f;
  margin-bottom: 0px;
}
p.sub {
  font-family: MontserratMedium;
  color: #999999;
}
span {
  color: #4f565f;
  font-family: MontserratBold;
}
.l {
  color: #7900ff;
  font-size: 90%;
  font-family: MontserratBold;
}
.save {
  font-family: Montserrat;
  text-transform: unset !important;
}
.restore {
  font-family: Montserrat;
  text-transform: unset !important;
}
.checkbox {
  font-family: Montserrat;
}
.vradio {
  font-size: 5px;
}
</style>