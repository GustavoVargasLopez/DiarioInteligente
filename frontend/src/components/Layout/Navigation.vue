<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-brand href="#">Home</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="user">
            <b-nav-item-dropdown>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ user }}</em>
              </template>
              <b-dropdown-item :to="{ name: 'dashboard' }"
                >Dashboard</b-dropdown-item
              >
              <b-dropdown-item @click.prevent="logout"
                >Cerrar Sesion</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </template>

          <template v-else>
            <b-nav-item :to="{ name: 'login' }">Iniciar Sesión</b-nav-item>
            <b-nav-item :to="{ name: 'register' }">Registrarme</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("doLogout");
      this.$router.push({ name: "login" });
      this.$bus.$emit("disconnected", "User Disconnected");
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
};
</script>
<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #005DFF!important;
 }
</style>