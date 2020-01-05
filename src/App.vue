<template>
  <v-app>
    <div v-if="$router.currentRoute.meta.navBar">
      <nav-bar/>
    </div>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import NavBar from "@/components/Navbar";
  export default {
    name: 'App',
    components: {NavBar}
  }
</script>
