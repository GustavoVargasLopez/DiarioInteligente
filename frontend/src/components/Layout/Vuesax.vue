<template>
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
           <span v-if="user">
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
          </span>
        </template>
        <template #right>
          <span v-if="user">
          <vs-button
            flat
            @click="logout"
            >
              Cerrar Sesión
            </vs-button>
          </span>
          <span v-if="!user">
           <vs-button
            flat
            @click.prevent="onReset"
            @click="active2=!active2"
            >
              Iniciar sesión
            </vs-button>
          </span>
            <vs-dialog prevent-close blur v-model="active2">
          
            <template #header>
              <h4 class="not-margin">
                Bienvenido a nuestro <b>Diario Inteligente</b>
              </h4>
            </template>


                <div class="con-form">
                  <div class="form-group">
                  <vs-input placeholder="Correo"
                    v-model.trim="$v.email.$model"
                    :class="{
                      'is-invalid': $v.email.$error,
                      'is-valid': !$v.email.$invalid
                    }"
                  >
                    <template #icon>
                      @
                    </template>
                  </vs-input>
    
                  <div class="valid-feedback">El correo es valido</div>
                  <div class="invalid-feedback">
                    <span v-if="!$v.email.required">El correo es requerido</span>
                    <span v-if="!$v.email.isUnique">Ingrese un correo valido</span>
                  </div>
                  </div>
                  <div class="form-group">
                  <vs-input type="password" v-model="input2" placeholder="Contraseña"
                    id="password"
                    v-model.trim="$v.password.$model"
                    :class="{
                      'is-invalid': $v.password.$error,
                      'is-valid': !$v.password.$invalid
                    }"
                  >
                    <template #icon>
                      <i class='bx bxs-lock'></i>
                    </template>
                  </vs-input>

                  <div class="valid-feedback">La contraseña es valida</div>
                  <div class="invalid-feedback">
                    <span v-if="!$v.password.required"
                      >La contraseña es requerida</span
                    >
                    <span v-if="!$v.password.isUnique"
                      >Ingrese contraseña valida</span
                    >
                  </div>
                  </div>
                  <div class="flex">
                    <a href="#">Se te olvidó tu contraseña?</a>
                  </div>
                </div>
                <template #footer>
                  <div class="footer-dialog">
                    <vs-button block
                    @click="submit"
                    >
                      Iniciar sesión 
                    </vs-button>

                <div class="new">
                  ¿Nuevo aqui? <a @click.prevent="active2=!active2" @click="active3=!active3">Crear una nueva cuenta</a>
                  </div>
                </div>
          </template>
          </vs-dialog>
            <span v-if="!user">
            <vs-button
            @click.prevent="onReset"      
            @click="active3=!active3"
            >
              Registrarme
            </vs-button>
            </span>
         <vs-dialog prevent-close blur v-model="active3">
            <template #header>
              <h4 class="not-margin">
                Registrate en nuestro <b>Diario Inteligente</b>
              </h4>
            </template>


            <div class="con-form">
              <div class="form-group">
              <vs-input  placeholder="Correo"
                id="email"
                v-model.trim="$v.email.$model"
                :class="{
                'is-invalid': $v.email.$error,
                'is-valid': !$v.email.$invalid
                }"
              >
                <template #icon>
                  @
                </template>
              </vs-input>

                 <div class="valid-feedback">El correo es valido</div>
                <div class="invalid-feedback">
                     <span v-if="!$v.email.required">El correo es requerido</span>
                     <span v-if="!$v.email.isUnique">Ingrese un correo valido</span>
                </div>
              </div>
              <div class="form-group">
              <vs-input  v-model.trim="$v.name.$model" placeholder="Nombre"
                     :class="{
                     'is-invalid': $v.name.$error,
                     'is-valid': !$v.name.$invalid
                     }"
              >
                <template #icon>
                  <i class='bx bxs-user-detail'></i>
                </template>
              </vs-input>
              <div class="valid-feedback">El nombre es valido</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.name.required">El nombre es requerido</span>
                  <span v-if="!$v.name.isUnique">Ingrese nombre valido</span>
              </div>
            </div>
              
              <div class="form-group">
              <vs-input placeholder="Apellido Paterno" 
                      v-model.trim="$v.apellidop.$model"
                     :class="{
                     'is-invalid': $v.apellidop.$error,
                     'is-valid': !$v.apellidop.$invalid
                     }"
              >
                <template #icon>
                  <i class='bx bxs-user-detail'></i>
                </template>
              </vs-input>
              <div class="valid-feedback">El apellido paterno es valido</div>
                <div class="invalid-feedback">
                     <span v-if="!$v.apellidop.required"
                        >El apellido paterno es requerido</span
                        >
                     <span v-if="!$v.apellidop.isUnique"
                        >Ingrese apellido paterno valido</span
                        >
                </div>
            </div>
               
                <div class="form-group">
                <vs-input placeholder="Apellido Materno" 
                      v-model.trim="$v.apellidom.$model"
                     :class="{
                     'is-invalid': $v.apellidom.$error,
                     'is-valid': !$v.apellidom.$invalid
                     }"
              >
                <template #icon>
                  <i class='bx bxs-user-detail'></i>
                </template>
              </vs-input>
               <div class="valid-feedback">El apellido materno es valido</div>
                  <div class="invalid-feedback">
                     <span v-if="!$v.apellidom.required"
                        >El apellido materno es requerido</span
                        >
                     <span v-if="!$v.apellidom.isUnique"
                        >Ingrese apellido materno valido</span
                        >
                </div>
            </div>
            <b-form-group>
                  <vs-input
                  type="date"
                  label="Fecha Nacimiento"
                     v-model.trim="$v.fecha.$model"
                     :class="{
                     'is-invalid': $v.fecha.$error,
                     'is-valid': !$v.fecha.$invalid
                     }"
                     >
                  </vs-input>
                  <div class="valid-feedback">Fecha valida</div>
                     <div class="invalid-feedback">
                        <span v-if="!$v.fecha.required">La fecha es requerida</span>
                     </div>
               </b-form-group>
               
              <div class="form-group">
                <vs-select placeholder="Select" 
                v-model="$v.sex.$model"
                :class="{
                  'is-invalid': $v.sex.$error,
                  'is-valid': !$v.sex.$invalid
                }"
                >
                  <vs-option label="F" value="F">
                    F
                  </vs-option>
                  <vs-option label="M" value="M">
                    M
                  </vs-option>
                </vs-select>
                <div class="valid-feedback">Opcion valida</div>
                  <div class="invalid-feedback">
                     <span v-if="!$v.sex.required"
                        > Selecciona alguna opcion</span>
                </div>
              </div>

               <div class="form-group">
                <vs-input placeholder="Telefono" 
                      v-model.trim="$v.telefono.$model"
                     :class="{
                     'is-invalid': $v.telefono.$error,
                     'is-valid': !$v.telefono.$invalid
                     }"
              >
                <template #icon>
                  <i class='bx bxs-phone'></i>
                </template>
              </vs-input>
               <div class="valid-feedback">El telefono es valido</div>
                  <div class="invalid-feedback">
                     <span v-if="!$v.telefono.required"
                        >El telefono es requerido</span
                        >
                     <span v-if="!$v.telefono.isUnique"
                        >Ingrese telefono valido</span
                        >
                </div>
            </div>

              <div class="form-group">
              <vs-input type="password" 
                id="password"
                placeholder="Contraseña"
                v-model.trim="$v.password.$model"
                :class="{
                'is-invalid': $v.password.$error,
                'is-valid': !$v.password.$invalid
                }"
              >
                <template #icon>
                  <i class='bx bxs-lock'></i>
                </template>
              </vs-input>
               <div class="valid-feedback">La contraseña es valida</div>
                  <div class="invalid-feedback">
                     <span v-if="!$v.password.required"
                        >La contraseña es requerida</span
                        >
                     <span v-if="!$v.password.isUnique"
                        >Ingrese contraseña valida</span
                        >
                  </div>
              </div>
            </div>
            <template #footer>
              <div class="footer-dialog">
                <vs-button block
                @click="onSubmit"
                >
                  Registrarme 
                </vs-button>
            </div>
            </template>
          </vs-dialog>
        </template>
      </vs-navbar>
      <vs-sidebar
        
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="Dashboard" to = "/Dashboard">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item id="Diario" to ="/vistadiario">
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          Diario
        </vs-sidebar-item>
        <vs-sidebar-item id="Habitos">
          <template #icon>
            <i class='bx bxs-music'></i>
          </template>
          Hábitos
        </vs-sidebar-item>
        <vs-sidebar-item id="Estilo">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Estilo de vida
        </vs-sidebar-item>
        <vs-sidebar-item id="Journey">
          <template #icon>
            <i class='bx bx-drink'></i>
          </template>
          Journey
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <i class='bx bx-user' ></i>
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>

    </div>
  </template>
<script>
  import { required, email } from "vuelidate/lib/validators";
  import axios from "axios";
  import swal from "sweetalert";
  
  export default {
    name: "RegisterForm",
    data:() => ({
      email: "",
      password:"",
      name: "",
      apellidop: "",
      apellidom: "",
      fecha: "",
      sex:"",
      telefono: "",
      active: 'home',
      activeSidebar: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      input1: '',
      input2: '',
      error: null,
      success: false,
      user: null
    }),
    validations: {
      name: {
         required,
         isUnique(value) {
           if (value == "") return true;
   
           var nombre = /^[A-Za-z]+$/;
   
           return new Promise(resolve => {
             setTimeout(() => {
               resolve(nombre.test(value));
             }, 350 + Math.random() * 300);
           });
         }
       },
       apellidop: {
         required,
         isUnique(value) {
           if (value == "") return true;
   
           var apellidop = /^[A-Za-z]+$/;
   
           return new Promise(resolve => {
             setTimeout(() => {
               resolve(apellidop.test(value));
             }, 350 + Math.random() * 300);
           });
         }
       },
       apellidom: {
         required,
         isUnique(value) {
           if (value == "") return true;
   
           var apellidom = /^[A-Za-z]+$/;
   
           return new Promise(resolve => {
             setTimeout(() => {
               resolve(apellidom.test(value));
             }, 350 + Math.random() * 300);
           });
         }
       },
      email: {
      required,
      email,
      isUnique(value) {
        if (value == "") return true;

        var Email_Regex = /(.+)@(.+){2,}\.(.+){2,}/;

        return new Promise(resolve => {
          setTimeout(() => {
            resolve(Email_Regex.test(value));
          }, 350 + Math.random() * 300);
        });
      }
    },
    fecha: {
      required
    },
    sex: {
      required
    },
    telefono: {
         required,
         isUnique(value) {
           if (value == "") return true;
   
           var telefono = /\([0-9]{3}\) [0-9]{3}[-][0-9]{4}/;
   
           return new Promise(resolve => {
             setTimeout(() => {
               resolve(telefono.test(value));
             }, 350 + Math.random() * 300);
           });
          }
    },
    password: {
      required,
      isUnique(value) {
        if (value == "") return true;

        var password_Regex = /^[A-Za-z]+$/;

        return new Promise(resolve => {
          setTimeout(() => {
            resolve(password_Regex.test(value));
          }, 350 + Math.random() * 300);
        });
      }
    }
    },
    methods:{
      logout() {
      this.$store.dispatch("doLogout");
      this.$router.push({ name: "inicio" });
      this.$bus.$emit("disconnected", "User Disconnected");
    },
      submit(evt) {
      this.$v.$touch();
      const vm = this;

      if (this.$v.email.$invalid || this.$v.password.$invalid) {
        swal("Error al llenar los datos", "", "error");
      } else {
        evt.preventDefault();
        let post = {
          Email: vm.email,
          Contra: vm.password
        };
        let currentObj = this;
        var num = 0;

        const path = "http://127.0.0.1:8000/api/v1.0/usuario/";
        axios
          .get(path, { params: post })
          .then(function(response) {
            currentObj.output = response.data.Email;

            //console.log(response.data);
            for (let i = 0; i < response.data.length; i++) {
              if (
                response.data[i].Email == vm.email &&
                response.data[i].Contra == vm.password
              ) {
                num = 1;
                vm.$store.dispatch("doLogin", vm.email);
                //console.log(vm.email)
                vm.$bus.$emit("logged", "User logged");
                vm.$router.push({ name: "dashboard" });
                vm.active2=false;
                swal("Iniciando Sesión", "", "success");
              }
              if (num == 0) {
                swal("Error en algun dato", "", "error");
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    onSubmit(evt) {
         this.$v.$touch();
   
         const vm = this;
         if (this.$v.email.$invalid || this.$v.name.$invalid || this.$v.apellidop.$invalid || this.$v.apellidom.$invalid || this.$v.sex.$invalid || this.$v.fecha.$invalid || this.$v.telefono.$invalid || this.$v.password.$invalid) {
           swal("Error al llenar los datos", "", "error");
         } else {
           evt.preventDefault();
           let post = {
             Nombre: this.name,
             ApellidoPaterno: this.apellidop,
             ApellidoMaterno: this.apellidom,
             Sexo: this.sex,
             Fecha_Nac: this.fecha,
             Telefono: this.telefono,
             Email: this.email
           };
           let post2 = {
             Email: this.email,
             Contra: this.password,
             TipoUsuario: "0"
           };
           const path = "http://127.0.0.1:8000/api/v1.0/persona/";
           const path2 = "http://127.0.0.1:8000/api/v1.0/usuario/";
           let currentObj = this;
   
           axios
             .post(path, post)
             .then(function(response) {
               currentObj.output = response.data.Email;
               axios
                 .post(path2, post2)
                 .then(function(response) {
                   currentObj.output = response.data.Email;
                   swal("Registro Exitoso", "", "success");
                   vm.$store.dispatch("doLogin", vm.email);
                   vm.$bus.$emit("logged", "User logged");
                   vm.active3 = false;
                   vm.$router.push({ name: "dashboard" });
                 })
                 .catch(function(error) {
                   console.log(error);
                 });
             })
             .catch(function(error) {
               console.log(error);
               if (
                 error.response.data.Email ==
                 "persona with this Email already exists."
               ) {
                 swal("El correo existe", "", "error");
                 //this.email = ''
               } else {
                 swal("Error al registrarse", "", "error");
               }
               console.log(error);
             });
         }
       },
    onReset(evt) {
         evt.preventDefault();
         // Reset our form values
         this.email = "";
         this.name = "";
         this.sex = "";
         this.apellidop = "";
         this.apellidom = "";
         this.fecha = "";
         this.telefono = "";
         this.password = "";

         // Trick to reset/clear native browser form validation state
         this.$nextTick(() => {
           this.$v.$reset();
         });
    }
    },
    created() {
    
    if(localStorage.auth){
            this.user = localStorage.Email
        }else{
            this.user = null
        }

    this.$bus.$on("logged", () => {
      this.user = localStorage.Email;
      
    });
    this.$bus.$on("disconnected", () => {
    this.user = null;
    });
  }
  //mounted(){
    //this.$router.push({ name: "inicio" });
 // }
  }
  </script>
  <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>

        