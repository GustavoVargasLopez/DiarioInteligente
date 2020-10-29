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
        v-model.trim="$v.email.$model"  :class="{
          'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid} " >
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
          'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}" >
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
          'is-invalid':$v.apellidop.$error, 'is-valid':!$v.apellidop.$invalid}" >
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
          'is-invalid':$v.apellidom.$error, 'is-valid':!$v.apellidom.$invalid}" >
          <div class="valid-feedback">El apellido materno es valido</div>
          <div class="invalid-feedback">
             <span v-if="!$v.apellidom.required">El apellido materno es requerido</span>
            <span v-if="!$v.apellidom.isUnique">Ingrese apellido materno valido</span>
          </div>
      </div>

      
      <b-form-group id="input-group-6" label-cols-md="12" label="Fecha de nacimiento" label-for="input-6">
        <b-form-datepicker 
          v-model.trim="$v.fecha.$model"  :class="{
          'is-invalid':$v.fecha.$error, 'is-valid':!$v.fecha.$invalid}" >
          <div class="valid-feedback">Fecha valida</div>
          <div class="invalid-feedback">
             <span v-if="!$v.fecha.required">La fecha es requerida</span>
          </div>
        </b-form-datepicker>
      </b-form-group>
        
      <b-form-group id="example-input-group-2"   label="Sexo" label-for="example-input-2">
        <b-form-select
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.sex.$model"
          :options="sex"
          :state="validateState('sex')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>
        <b-form-valid-feedback id="input-2-live-feedback">Opcion valida</b-form-valid-feedback>
        <b-form-invalid-feedback id="input-2-live-feedback">Escoge una opcion valida</b-form-invalid-feedback>
      </b-form-group>
    
    <div class="form-group col-md-12">
        <label>Telefono</label>
        <input type="text" class="form-control" 
        v-model.trim="$v.telefono.$model"  :class="{
          'is-invalid':$v.telefono.$error, 'is-valid':!$v.telefono.$invalid}" >
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
             <span v-if="!$v.password.required">La contraseña es requerida</span>
            <span v-if="!$v.password.isUnique">Ingrese contraseña valida</span>
          </div>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword" >
        <label class="form-check-label" for="showpassword"> Mostrar contraseña </label>
      </div>

      <div class="form-group col-md-12">
        <label>Ingrese contraseña</label>
        <input type="password"  class="form-control"
        v-model.trim="$v.repeatpassword.$model" :class="{
          'is-invalid':$v.repeatpassword.$error, 'is-valid': (password !='')? !$v.repeatpassword.$invalid: ''}" >
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
import axios from 'axios'
import swal from 'sweetalert'
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
        form:{
          sex:null
        },
        
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
      form:{
      sex :{
        required
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
      onSubmit(evt) {
        this.$v.$touch()
        
        const vm=this;
        if(this.$v.$invalid)
        {
         swal("Error al llenar los datos","","error")
        }else{
        evt.preventDefault()
        let post = {
          
          Nombre: this.name,
          ApellidoPaterno:this.apellidop,
          ApellidoMaterno : this.apellidom,
          Sexo: this.form.sex,
          Fecha_Nac : this.fecha,
          Telefono :this.telefono,
          Email: this.email,
        
      }
      let post2 ={
        Email: this.email,
        Contra: this.password,
        TipoUsuario: '0'
      }
        const path = 'http://127.0.0.1:8000/api/v1.0/persona/'
        const path2 = 'http://127.0.0.1:8000/api/v1.0/usuario/'
        let currentObj=this;
        
        axios.post(path,post).then(function(response){
          currentObj.output = response.data.Email;
          axios.post(path2,post2).then(function(response){
            currentObj.output = response.data.Email;
            swal("Registro Exitoso","","success")
          vm.$store.dispatch("doLogin", vm.email);
          vm.$router.push({name: 'dashboard'});
          }).catch(function(error){
            console.log(error);
          });
          
        })
        .catch(function(error){
          console.log(error);
          if(error.response.data.Email == "persona with this Email already exists."){
            swal("El correo existe","","error")
            //this.email = ''
          }else{
            swal("Error al registrarse","","error")
          }
          console.log(error);
        });
      }
      },
      validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
      },
      submit() {
      //console.log('submit!')
      this.$v.$touch()
      
          },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.email = ''
        this.name = ''
        this.form.sex = null
        this.apellidop = ''
        this.apellidom = ''
        this.fecha = ''
        this.telefono = ''
        this.password =''
        this.repeatpassword =''
        // Trick to reset/clear native browser form validation state
        this.$nextTick(() => {
          this.$v.$reset();
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
      }
       
    }
  
</script>