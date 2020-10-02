<template>
    <div class="container">
        <div class="columns">
            <div style="center">
                <form action="" >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" class="form-control" style="width:70%" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo" />
                        <small id="emailHelp" class="form-text text-muted">gustavo.vargas@tectijuana.edu.mx</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" style="width:70%" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Register",
    };
</script>