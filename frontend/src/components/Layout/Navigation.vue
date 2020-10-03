<template >
        <div>
    <b-navbar toggleable="md" type="dark" variant="success">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
       <b-navbar-brand href="#">Home</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{name: 'login'}">Iniciar Sesión</b-nav-item>
            <b-nav-item :to="{name: 'register'}">Registrarme</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
    
}
</script>