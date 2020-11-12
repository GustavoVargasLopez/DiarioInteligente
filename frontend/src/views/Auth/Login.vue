<template>
  <div class="container mt-5 mb-5" style="width: 400px">
    <div class="card">
      <h3 class="card-header text-center">Iniciar Sesión</h3>
      <div class="card-body">
        <b-form @submit="submit">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label>Correo</label>
              <input
                type="email"
                class="form-control"
                v-model.trim="$v.email.$model"
                :class="{
                  'is-invalid': $v.email.$error,
                  'is-valid': !$v.email.$invalid
                }"
              />
              <div class="valid-feedback">El correo es valido</div>
              <div class="invalid-feedback">
                <span v-if="!$v.email.required">El correo es requerido</span>
                <span v-if="!$v.email.isUnique">Ingrese un correo valido</span>
              </div>
            </div>
            <div class="form-group col-md-12">
              <label>Contraseña</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model.trim="$v.password.$model"
                :class="{
                  'is-invalid': $v.password.$error,
                  'is-valid': !$v.password.$invalid
                }"
              />
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
            <b-button type="submit" variant="success">Iniciar Sesión</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false
    };
  },
  methods: {
    submit(evt) {
      this.$v.$touch();
      const vm = this;

      if (this.$v.$invalid) {
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
    }
  },
  validations: {
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
  }
};
</script>
