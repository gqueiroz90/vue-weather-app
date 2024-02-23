<template>
  <v-dialog v-model="dialog" max-width="300">
    <v-card>
      <v-card-title class="headline">
        Erro
      </v-card-title>
      <v-card-text>
        A cidade não foi encontrada.
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="reloadPage">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
/* Adicione seus estilos personalizados conforme necessário */
</style>