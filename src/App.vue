<template>
  <v-app class="background" :style="{ backgroundImage: `url('${backgroundImageUrl}')` }">
    <v-app-bar app color="secondary" dark></v-app-bar>
    <v-main>
      <v-container class="text-center center-content">
        <SearchBar @search="searchWeather" />
        <WeatherCard v-if="weatherData" :weatherData="weatherData" />
        <ErrorDialog ref="errorDialog" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import WeatherCard from "./components/WeatherCard.vue";
import ErrorDialog from "./components/ErrorDialog.vue";
import WeatherService from "./components/WeatherService";

export default {
  name: "App",

  components: {
    SearchBar,
    WeatherCard,
    ErrorDialog
  },

  data: () => ({
    weatherData: null,
    backgroundImageUrl: "" // Adicionamos a propriedade para a URL da imagem de fundo
  }),

  methods: {
    async searchWeather(city) {
  try {
    const data = await WeatherService.getWeather(city);
    this.weatherData = data;
    this.fetchBackgroundImage(city); // Chamamos o método para buscar a imagem de fundo
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Se o status da resposta for 404, exibir o modal de erro
      this.$refs.errorDialog.dialog = true;
    } else {
      // Se não for um erro 404, tratar o erro de acordo com sua lógica atual
      console.error("Error searching weather:", error);
      this.$refs.errorDialog.dialog = true;
    }
  }
},
    async fetchBackgroundImage(city) {
      try {
        const response = await fetch(`https://source.unsplash.com/1600x900/?${city}`);
        if (response.ok) {
          this.backgroundImageUrl = response.url; // Define a imagem de fundo com a resposta da API
        } else {
          this.$refs.errorDialog.dialog = true; // Exibir o modal de erro
          console.error("Error fetching background image:", response.status);
        }
      } catch (error) {
        this.$refs.errorDialog.dialog = true; // Exibir o modal de erro
        console.error("Error fetching background image:", error);
      }
    }
  },
};
</script>

<style scoped>
/* Adicione seus estilos personalizados conforme necessário */
.background {
  background-size: cover;
  background-position: center;
}
</style>
