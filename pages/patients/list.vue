<template>
  <div class="container">
    <v-breadcrumbs class="breadcrumbs" :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
          <span class="breadcrumbs">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <!-- tabla de pacientes | Genesis -->
    <div class="row justify-content-md-center">
          <v-card color="card" width="100%" flat rounded class="margen">
            <v-card-title class="mb-n10">
              <v-row class="ma-4 ml-n2 d-flex justify-start">
                <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-select
                  @input="changedLabel"
                    v-model="sort"
                    append-icon="mdi-menu-down"
                    outlined
                    class="select ml-n5 mt-n3"
                    hide-details
                    dense
                    background-color="#f4edff"
                    item-color="deep-purple"
                    color="#7900ff"
                    :items="keys"
                    placeholder="Ordenar por"
                  ></v-select>
                </v-col>
                <v-toolbar flat color="transparent" class="vtoolbar ml-n8">
                  <v-col class="ml-8" xs="12" sm="12" md="12" lg="12" xl="12">
                    <v-text-field
                      v-model="search"
                      class="search"
                      color="grey"
                      dense
                      outlined
                      placeholder="Búsqueda   "
                      prepend-inner-icon="mdi-magnify"
                    ></v-text-field
                  ></v-col>
                </v-toolbar>
              </v-row>
              <v-row class="mt-n8 mr-3 d-flex justify-end">
                <v-col xs="12" sm="12" md="6" lg="5" xl="4">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        :loading="isSelecting"
                        @click="handleFileImport"
                        block
                        outlined
                        class="btnStart mr-3"
                        ><span class="black--text">Importar pacientes</span
                        > <v-img
          :src="require('@/assets/icons/icon_newFile.svg')"
          max-width="23"
        ></v-img></v-btn
                      >
                    </template>
                    <span style="text-transform: capitalize"
                      >Formatos permitidos: .xlsx</span
                    >
                  </v-tooltip>
                  <input
                    accept=".xlsx"
                    :v-model="selectedFile"
                    ref="uploader"
                    class="d-none"
                    type="file"
                    @change="onFileChanged"
                  />
                </v-col>
                <v-col class="mb-5" xs="12" sm="12" md="6" lg="5" xl="4">
                  <v-btn block outlined class="btnStart ml-3"
                    ><span class="black--text">Exportar pacientes</span
                    ><v-img
          :src="require('@/assets/icons/icon_newFile.svg')"
          max-width="23"
        ></v-img></v-btn
                  ></v-col
                >
              </v-row>
            </v-card-title>
            <!-- se llena la tabla con los datos del axios y encabezados con script | Genesis -->
            <v-data-table
              :search="search"
              :headers="headers"
              :items="characters"
              mobile-breakpoint="0"
              item-key="name"
              hide-default-header
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
            >
            <template #header="{ props: { headers } }">
                <thead class="v-data-table-header">
                  <tr>
                    <th
                      v-for="header in headers"
                      :key="header.value"
                      class="text-uppercase"
                      scope="col"
                    >
                      <span class="headers">{{ header.text }}</span>
                    </th>
                  </tr>
                </thead>
              </template> 
              <!--  seccion de nombre de paciente | Genesis -->
              <template v-slot:[`item.name`]="{ item }">
                <!-- agrupar botones en una sola fila  | Genesis -->
                <a class="name" :href="'/medical-record/view/10'">{{
                  item.name
                }}</a>
              </template>

              <!-- seccion de última cita | Genesis -->
              <template v-slot:[`item.gender`]="{ item }">
                <v-row class="ml-n11">
                  <v-col cols="12" xs="12" sm="12" md="5" lg="4" xl="3">
                    <!--    chip de cita asistida | Genesis -->
                    <v-chip
                      v-if="attendance"
                      class="justify-center asistencia"
                      color="#e9f7ee"
                      text-color="#1baa55"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >ASISTIÓ</span
                      ></v-chip
                    >
                    <!--    chip de cita cancelada | Genesis -->
                    <v-chip
                      v-if="absence"
                      class="justify-center cancel"
                      color="#fdeeec"
                      text-color="#e74c3c"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >CANCELADA</span
                      ></v-chip
                    >
                    <!--    chip de cita no asistida | Genesis -->
                    <v-chip
                      v-if="na"
                      class="justify-center na"
                      color="#f5f5f5"
                      text-color="#999999"
                      ><span style="text-transform: uppercase; font-size: 85%"
                        >N/A</span
                      ></v-chip
                    >
                  </v-col>
                  <v-col cols="12" xs="2" sm="2" md="5" lg="3" xl="3">
                    <p>{{ item.gender }}</p>
                  </v-col>
                </v-row>
              </template>
              <template v-slot:[`item.actions`]>
                <!-- agrupar botones en una sola fila  | Genesis -->
                <div style="width: 25px">
                  <v-btn-toggle borderless>
                    <v-btn class="iconos" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_watch.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                    <v-btn class="iconos" @click="deleteItemConfirm" icon>
                      <v-img
                        :src="require('@/assets/icons/icon_delete.svg')"
                        max-width="23"
                      ></v-img>
                    </v-btn>
                  </v-btn-toggle>
                </div>
              </template>
            </v-data-table>
            <v-row class="ma-4 d-flex justify-end" wrap>
              <v-col class="ma-4 d-flex justify-end" cols="12" md="6">
                <v-pagination
                  color="#7900ff"
                  v-model="page"
                  :length="pageCount"
                  :total-visible="5"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card>
    </div>
    <br />
  </div>
</template>
  
  <script>
import axios from 'axios'
export default {
  name: 'Pacientes',
  layout: 'default',
  components: {},
  layout: 'patientView',
  data() {
    return {
      sortBy: "name",
      sortDesc: false,
      sort: '',
      isSelecting: false,
      search: '',
      attendance: true,
      absence: false,
      na: false,
      itemsPerPage: 10,
      page: 1,
      selectedFile: null,
      characters: [],
      headers: [
        /* encabezados para la tabla y estilos | Genesis */
        {
          text: 'Nombre completo',
          align: 'start',
          value: 'name',
        },
        { text: 'Teléfono', value: 'species', align: 'start'},
        { text: 'Última cita', value: 'gender', align: 'start'},

        { text: '', value: 'actions', align: 'end', },
      ],
      /* Opciones para el select de sort by | Genesis */
      keys: [
        'Nombre completo',
        'Teléfono',
        'Última cita',
      ],
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Lista de pacientes',
          disabled: false,
          href: '/patients/list',
        },
      ],
    }
  },
  computed: {
    totalRecords() {
      return this.characters.length
    },
    pageCount() {
      return this.totalRecords / this.itemsPerPage
    },
  },
  mounted() {
    console.log('verificando')
    this.getTodos()
  },
  methods: {
    changedLabel(event) {
      this.sort = event;
      if(this.sort==="Nombre completo"){
        this.sortDesc = !this.sortDesc;
      }else{
        console.log("adiooooos")
      }
    },
    deleteItemConfirm() {
      this.characters.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    handleFileImport() {
      this.isSelecting = true

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        'focus',
        () => {
          this.isSelecting = false
        },
        { once: true }
      )

      // Trigger click on the FileInput
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]

      // Do whatever you need with the file, liek reading it with FileReader
    },
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    getTodos() {
      console.log('peticion GET')
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          console.log(res)
          this.characters = res.data.results
        })
        .catch((e) => {
          /* console.log(e); */
          console.log(e)
        })
    },
  },
}
</script>
  <style>
.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 2rem;
}
.search {
  font-family: Montserrat;
}

.thead {
  font-family: Montserrat;
  color: #999999;
  font-size: 0.85rem;
}
/*   estilos para llenado de tabla | Genesis */
th {
  font-family: Montserrat;
}
h3 {
  padding-left: 3rem;
  font-size: 1.4rem;
}
tbody {
  font-family: 'MontserratMedium';
}
a {
  color: #9966ff !important;
  font-family: MontserratBold;
  font-size: 15px;
  text-decoration: none;
  margin-left: -2px;
}
a.name {
  color: black !important;
  font-family: Montserrat;
  font-size: 15px;
  text-decoration: none;
  margin-left: -2px;
}
a.header {
  color: black !important;
  font-family: Montserrat;
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: -2px;
}
span {
  font-size: 0.9rem;
  font-family: MontserratMedium;
  align-items: start;
  text-transform: lowercase;
}
span::first-letter {
  text-transform: uppercase;
}
.select {
  font-family: MontserratMedium;
  font-size: 15px;
}
.select input::placeholder {
  color: #7900ff !important;
  opacity: 1;
}
/*   estilos para botones | Genesis */
.boton {
  color: #9966ff;
}
.botones {
  background: transparent !important;
}
.btnStart {
  text-transform: uppercase !important;
}
.iconos {
  margin-left: -10px;
}
/* estilos para barra de busqueda | Genesis */
.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 6rem;
}
.search {
  font-family: Montserrat;
}
.v-input__icon--prepend-inner .v-icon {
  color: #cccccc;
}
.v-input__icon--append .v-icon {
  color: #7900ff;
  font-size: 52px;
}
.asistencia {
  border: thin solid #1baa55 !important;
  width: 100%;
}
.cancel {
  border: thin solid #e74c3c !important;
  width: 100%;
}
.na {
  border: thin solid #999999 !important;
  width: 100%;
}
span.headers {
  text-transform: capitalize !important;
  font-family: Montserrat;
  color: #999999;
}
</style>
  