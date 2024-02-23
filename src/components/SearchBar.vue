<template>
  <v-container>
    <v-card class="mx-auto mb-2" max-width="350" >
    <v-row>
      <v-col>
        <v-text-field v-model="city" label="Cidade" @input="updateCity" @keydown.enter="searchWeather" class="custom-search-bar" color="secondary"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="search-btn">
        <v-btn @click="searchWeather">Pesquisar</v-btn>
      </v-col>
    </v-row>
  </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      city: ""
    };
  },
  methods: {
    updateCity() {
      // Se desejar fazer algo ao atualizar a cidade, adicione aqui
    },
    searchWeather() {
      this.$emit("search", this.city);
    }
  }
};
</script>

<style scoped>
.custom-search-bar {
  width: 300px; /* Define a largura desejada */
  margin: 0 auto;
}

.card-search {
  width: 300px; /* Define a largura desejada */
  margin: 0 auto;
}
/* Adicione seus estilos personalizados aqui */
</style>
