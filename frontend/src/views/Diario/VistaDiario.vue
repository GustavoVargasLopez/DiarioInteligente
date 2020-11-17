<template>
  <div class="container mt-5 mb-5">
  <v-container fluid>
    <v-textarea
      auto-grow
      solo
      label="Escribe lo que hiciste el dia de hoy"
    ></v-textarea>
    <v-spacer></v-spacer>
    <b-button type="submit" variant="success">Guardar</b-button>
  </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      
    }),
  }
</script>