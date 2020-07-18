<template>
  <div class="container-box">
    <Maps />
    <Menu />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Maps from "../components/Maps";
export default {
  components: {
    Menu,
    Maps
  }
};
</script>

<style scoped>
.container-box {
  height: 100%;
}
</style>