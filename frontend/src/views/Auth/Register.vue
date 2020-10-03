<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Correo:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          style="width:70%"
          required
          placeholder="Ingresa tu correo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingresa tu nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Apellido Paterno:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.apellidop"
          required
          placeholder="Ingresa tu apellido paterno"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Apellido Materno:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.apellidom"
          required
          placeholder="Ingresa tu apellido materno"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-6" label="Fecha de nacimiento:" label-for="input-6">
        <b-form-datepicker 
          id="input-6" 
          v-model="form.fecha" 
          required 
          class="mb-2">
        </b-form-datepicker>
      </b-form-group>
    
    <b-form-group id="input-group-7" label="Telefono:" label-for="input-7">
        <b-form-input
          id="input-7"
          type = ""
          v-model="form.telefono"
          required
          placeholder="Ingresa numero de telefono"
        ></b-form-input>
      </b-form-group>
  

      <b-form-group id="input-group-3" label="Sexo:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.sex"
          :options="sex"
          required
        ></b-form-select>

        <b-form-group id="input-group-8" label="Contraseña:" label-for="input-8">
        <b-form-input
          id="input-8"
          type="password"
          v-model="contraseña"
          required
          placeholder="Ingresa tu contraseña"
        ></b-form-input>
      </b-form-group>
        
      
      </b-form-group>
      <b-button type="submit" variant="primary">Registrarme</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          sex: null,
          apellidop: '',
          apellidom : '',
          fecha : '',
          telefono :'',
         
        },
        sex: [{ text: 'Selecciona una opcion', value: null }, 'F', 'M', ],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
      }
    }
  }
</script>