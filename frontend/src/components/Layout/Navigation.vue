<template >
        <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
           <router-link to="/">
            <h3 class="title is-3">home</h3>
           </router-link>
            
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
                <router-link  to="/login" class="nav-link"  active-class="active" exact style="cursor: pointer">Iniciar Sesión</router-link>
            </li>
          <li class="nav-item">
                <router-link to="/register" class="nav-link" active-class="active" exact style="cursor: pointer">Registrarme</router-link>
            </li>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
    
}
</script>