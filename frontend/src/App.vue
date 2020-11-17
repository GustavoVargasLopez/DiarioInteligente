<template>
  <div id="app">
    <div id="nav">
   <Navigation/>
   </div>
  <div>
    <router-view/>
  </div>
   
  </div>
</template>

<script>
import Navigation from "./components/Layout/Navigation";

export default {
  name: "App",

  components: {
    Navigation
  }
};
</script>
