<template>

  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation"
export default {
  components:{
    Navigation
  }
}
</script>

