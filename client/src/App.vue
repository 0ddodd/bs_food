<template>
  <div>
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<script setup>
  import HeaderVue from './components/HeaderVue.vue'
  import HomePage from './views/HomePage.vue'
</script>

<style lang="scss" scoped>

</style>