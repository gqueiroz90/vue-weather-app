<template>
  <v-container>
    <v-card class="mx-auto mb-2" max-width="350" color="rgba(210, 210, 210, 0.8)">
    <v-row>
      <v-col>
        <v-text-field v-model="city" label="Cidade" @input="updateCity" @keydown.enter="searchWeather" class="custom-search-bar" color="secondary" prepend-icon="mdi-map-marker"/>
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

</style>
