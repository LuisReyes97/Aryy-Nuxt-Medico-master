<template>
    <v-card flat>
        <v-row>
            <v-col xs="11" sm="11" md="11" lg="11" xl="9">
                <v-row>
                    <v-col xs="11" sm="11" md="11" lg="11" xl="10">
                        <component
                            v-for="(campo, index) in specialist" :key="index"
                            :is="campo.etiqueta"
                            :placeholder="campo.placeholder"
                            :outlined="campo.outlined"
                            :required="campo.required"
                            :type="campo.type"
                            :label="campo.label"
                        ></component> 
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="5">
                        <component
                            v-for="(campo, index) in number" :key="index"
                            :is="campo.etiqueta"
                            :placeholder="campo.placeholder"
                            :outlined="campo.outlined"
                            :required="campo.required"
                            :type="campo.type"
                            :label="campo.label"
                        ></component> 
                    </v-col>
                    <v-col cols="12" sm="5">
                        <component
                            v-for="(campo, index) in codigo" :key="index"
                            :is="campo.etiqueta"
                            :placeholder="campo.placeholder"
                            :outlined="campo.outlined"
                            :required="campo.required"
                            :type="campo.type"
                            :label="campo.label"
                        ></component> 
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    props: ['specialist', 'number', 'codigo']
}
</script>