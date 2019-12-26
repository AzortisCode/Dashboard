<template>
  <div>
    <div v-if="$router.currentRoute.meta.navBar">
      <nav-bar/>
    </div>
    <h2>Router view</h2>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  export default {
    components: {NavBar}
  }

</script>
