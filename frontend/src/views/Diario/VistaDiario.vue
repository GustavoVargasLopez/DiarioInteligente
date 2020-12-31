<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="sweetalert2.all.min.js"></script>
<!-- Optional: include a polyfill for ES6 Promises for IE11 -->
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
<template>
  <div class="container mt-5 mb-5">
 <!-- <b-form @submit="ObtenerFecha"> -->
  <v-container fluid>
    {{now}}
    <v-textarea
      v-model="ContenidoTextArea"
      v-on:keyup.enter="Pregunta"
      counter
      auto-grow
      solo
      :rules="rules"
      label="Escribe lo que hiciste el dia de hoy"
    ></v-textarea>
    <v-spacer></v-spacer>
    <b-button type="submit" variant="success">Guardar</b-button>
  </v-container>
   <!-- </b-form> -->
  </div>
  
</template>
<script>
import swal from "sweetalert";
  export default {
    
    data: () => ({
      incrementador : 0,
      cantidad : 10,
      rules: [v => v.length <= 500 || swal({
            title: "Pregunta!",
            text: "Pregunta generada por el backend de acuerdo a lo escrito por el usuario:",
            icon: "info",
            buttons: ["No","Si"],
            closeOnClickOutside: false,
            closeOnEsc: false,
            
          }).then((inputValue)=>
          {
           //Podria aplicarse una accion necesaria despues de responder las pregunta 
            if (inputValue) 
            {
              swal({
                
                text: "Respondiste Si",
                icon: "success",
                timer: "2000"
              })
            }else{
              swal({
                text: "Respondiste No",
                icon: "success",
                timer: "2000"
              })
            }
          })],
      //wordsRules: [v => v.trim().split(' ').length <= 10 || swal("Hacer pregunta al usuario!!", "", "success")],
      fecha : "",
      ContenidoTextArea:"",


    }),
    computed: {
    now: function () {
    var f = new Date();
        var fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
        return fecha;
    }
    },methods: {
      Pregunta: function() {
        this.ContenidoTextArea = this.ContenidoTextArea.replace (/\r?\n/g," ");
        this.ContenidoTextArea = this.ContenidoTextArea.replace(/[ ]+/g," ");
        this.ContenidoTextArea = this.ContenidoTextArea.replace (/^ /,"");
        this.ContenidoTextArea = this.ContenidoTextArea.replace (/ $/,"");
        var textoTroceado = this.ContenidoTextArea.split (" ");
        var numeroPalabras = textoTroceado.length;
         
        
      }
    }
  }
</script>