  <template>
    <v-container>
      <v-card class="mx-auto" max-width="350">
        <v-row >
          <v-col>
            <v-card-item title class="card-title">
              <img :src="countryFlagUrl" alt="Country Flag" class="country-flag" />
              <div class="text-center">{{ weatherData.name }}</div>
              
            </v-card-item>
            <v-card-text > 
              <v-col class="text-h2">{{ formatTemperature(weatherData.main.temp) }}°C</v-col>
              <img :src="weatherIconUrl" alt="Weather Icon" class="weather-icon" />
              <v-row>
                <span class="weather-description">{{ weatherDescription }}</span>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>

  <script>
  export default {
    props: {
      weatherData: Object
    },
    computed: {
      countryFlagUrl() {
        const countryCode = this.weatherData.sys.country.toUpperCase(); // Convertendo para maiúsculas
        return `https://flagsapi.com/${countryCode}/shiny/64.png`;
      },
      weatherIconUrl() {
        const iconCode = this.weatherData.weather[0].icon; // Obtendo o código do ícone do tempo
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      },
      weatherDescription() {
        // Mapeando a descrição do clima para português brasileiro
        const weatherDescriptions = {
          'clear sky': 'Céu Limpo',
          'few clouds': 'Poucas Nuvens',
          'moderate rain': 'Chuva Moderada',
          'scattered clouds': 'Nuvens Dispersas',
          'broken clouds': 'Nuvens Quebradas',
          'shower rain': 'Chuva Rápida',
          'rain': 'Chuva',
          'thunderstorm': 'Trovoada',
          'snow': 'Neve',
          'mist': 'Névoa',
          'overcast clouds': 'Nublado',
          'light rain': 'Chuva Leve',
          'heavy intensity rain': 'Chuva Forte'   
        };
        const description = this.weatherData.weather[0].description.toLowerCase(); // Convertendo para minúsculas
        return weatherDescriptions[description] || description; // Retorna a descrição correspondente ou a descrição original
      }
    },
    methods: {
      formatTemperature(temperature) {
        return temperature.toFixed(0); // Limita para zero casas decimais
      }
    }
  };
  </script>

  <style scoped>

  .country-flag {
    width: 1.5rem; /* Defina o tamanho da bandeira */
    height: auto;
  }

  .weather-icon {
    width: 5rem; /* Defina o tamanho do ícone do tempo */
    height: auto;
  }

  .weather-description{
    max-width: 300px; /* Defina a largura máxima desejada */
    width: 100%; /* Ocupar a largura disponível */
    margin: 0 auto; /* Centralizar horizontalmente */
  }

  </style>
