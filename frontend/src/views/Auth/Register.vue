<template>
  <div class="container mt-5 mb-5" style="width: 400px" >
  <div class="card">
    <h3 class="card-header text-center"> Formulario de Registro </h3>
    <div class="card-body">
    <b-form @submit.prevent="submit" @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="form-row">
      
      <div class="form-group col-md-12" >
        <label>Correo</label>
        <input type="email" class="form-control"
        v-model.trim="$v.email.$model" :class="{
          'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid}">
          <div class="valid-feedback">El correo es valido</div>
          <div class="invalid-feedback">
            <span v-if="!$v.email.required">El correo es requerido</span>
            <span v-if="!$v.email.isUnique">Ingrese un correo valido</span>
          </div>
      </div>

      <div class="form-group col-md-12">
        <label>Nombre</label>
        <input type="text" class="form-control"
        v-model.trim="$v.name.$model" :class="{
          'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}">
          <div class="valid-feedback">El nombre es valido</div>
          <div class="invalid-feedback">
             <span v-if="!$v.name.required">El nombre es requerido</span>
            <span v-if="!$v.name.isUnique">Ingrese nombre valido</span>
          </div>
      </div>
      
      <div class="form-group col-md-6">
        <label>Apellido Paterno</label>
        <input type="text" class="form-control"
        v-model.trim="$v.apellidop.$model" :class="{
          'is-invalid':$v.apellidop.$error, 'is-valid':!$v.apellidop.$invalid}">
          <div class="valid-feedback">El apellido paterno es valido</div>
          <div class="invalid-feedback">
             <span v-if="!$v.apellidop.required">El apellido paterno es requerido</span>
            <span v-if="!$v.apellidop.isUnique">Ingrese apellido paterno valido</span>
          </div>
      </div>

      <div class="form-group col-md-6">
        <label>Apellido Materno</label>
        <input type="text" class="form-control"
        v-model.trim="$v.apellidom.$model" :class="{
          'is-invalid':$v.apellidom.$error, 'is-valid':!$v.apellidom.$invalid}">
          <div class="valid-feedback">El apellido materno es valido</div>
          <div class="invalid-feedback">
             <span v-if="!$v.apellidom.required">El apellido materno es requerido</span>
            <span v-if="!$v.apellidom.isUnique">Ingrese apellido materno valido</span>
          </div>
      </div>

      
      <b-form-group id="input-group-6" label-cols-md="12" label="Fecha de nacimiento" label-for="input-6">
        <b-form-datepicker 
          v-model.trim="$v.fecha.$model" :class="{
          'is-invalid':$v.fecha.$error, 'is-valid':!$v.fecha.$invalid}">
          <div class="valid-feedback">Fecha valida</div>
          <div class="invalid-feedback">
             <span v-if="!$v.fecha.required">La fecha es requerida</span>
          </div>
        </b-form-datepicker>
      </b-form-group>
    
    <div class="form-group col-md-12">
        <label>Telefono</label>
        <input type="text" class="form-control"
        v-model.trim="$v.telefono.$model" :class="{
          'is-invalid':$v.telefono.$error, 'is-valid':!$v.telefono.$invalid}">
          <div class="valid-feedback">El telefono es valido</div>
          <div class="invalid-feedback">
             <span v-if="!$v.telefono.required">El telefono es requerido</span>
            <span v-if="!$v.telefono.isUnique">Ingrese telefono valido</span>
          </div>
      </div>

      <div class="form-group col-md-12">
        <label>Contraseña</label>
        <input type="password" id="password" class="form-control"
        v-model.trim="$v.password.$model" :class="{
          'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}">
          <div class="valid-feedback">La contraseña es valida</div>
          <div class="invalid-feedback">
             <span v-if="!$v.telefono.required">La contraseña es requerida</span>
            <span v-if="!$v.telefono.isUnique">Ingrese contraseña valida</span>
          </div>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
        <label class="form-check-label" for="showpassword"> Mostrar contraseña </label>
      </div>

      <div class="form-group col-md-12">
        <label>Ingrese contraseña</label>
        <input type="password"  class="form-control"
        v-model.trim="$v.repeatpassword.$model" :class="{
          'is-invalid':$v.repeatpassword.$error, 'is-valid': (password !='')? !$v.repeatpassword.$invalid: ''}">
          <div class="valid-feedback">Tu contraseña es identica</div>
          <div class="invalid-feedback">
             <span v-if="!$v.repeatpassword.sameAsPassword">La contraseña es invalida </span>
          </div>
      </div>
      
      <b-button  type="submit" variant="success">Registrar</b-button>
        
      <b-button type="reset" variant="danger">Limpiar</b-button>
      </div>
    </b-form>
    </div>
  </div>
  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
  export default {
    name: 'RegisterForm',
    data() {
      return {
         email: '',
         name: '',
         apellidop: '',
         apellidom : '',
         telefono :'',
         fecha : '',
         password:'',
         repeatpassword:'',
         showpassword: false,
        sex: [{ text: 'Selecciona una opcion', value: null }, 'F', 'M', ],
        show: true,
        submitStatus: null


      }
    },
    validations: {
      name:{
        required,
        isUnique (value){
          if(value == '' ) return true

          var nombre = /^[A-Za-z]+$/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(nombre.test(value))
            }, 350 + Math.random() *300 )
          })

        }

      },
      apellidop:{
        required,
        isUnique (value){
          if(value == '' ) return true

          var apellidop = /^[A-Za-z]+$/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(apellidop.test(value))
            }, 350 + Math.random() *300 )
          })

        }

      },
      apellidom:{
        required,
        isUnique (value){
          if(value == '' ) return true

          var apellidom = /^[A-Za-z]+$/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(apellidom.test(value))
            }, 350 + Math.random() *300 )
          })

        }

      },
      telefono:{
        required,
        isUnique (value){
          if(value == '' ) return true

          var telefono = /\([0-9]{3}\) [0-9]{3}[-][0-9]{4}/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(telefono.test(value))
            }, 350 + Math.random() *300 )
          })

        }

      },
      fecha :{
        required
      },
      email :{
        required,
        email,
        isUnique (value){
          if(value == '' ) return true

          var Email_Regex = /(.+)@(.+){2,}\.(.+){2,}/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(Email_Regex.test(value))
            }, 350 + Math.random() *300 )
          })

        }
      },
      password :{
        required,
        isUnique (value){
          if(value == '' ) return true

          var password_Regex = /^[A-Za-z]+$/;

          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(password_Regex.test(value))
            }, 350 + Math.random() *300 )
          })

        }
      },
      repeatpassword:{
        required,
        sameAsPassword : sameAs('password')
      }
    },
      
    methods: {
      /*onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },*/
      submit() {
      console.log('submit!')
      this.$v.$touch()
      
          },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.sex = null
        this.form.apellidop = ''
        this.form.apellidom = ''
        this.form.fecha = ''
        this.form.telefono = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      toggleShowPassword (){
        var show = document.getElementById('password')
        if(this.showpassword == false){
          this.showpassword = true
          show.type = "text"
        }else{
          this.showpassword = false
          show.type = "password"
        }
      }
     /* checkForm(evt){
        evt.preventDefault()
        if( this.expresion.test(this.form.email)){
          return true;
        }*/
      }
       
    }
  
</script>