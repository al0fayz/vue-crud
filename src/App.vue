<template>
    <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/layout/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>