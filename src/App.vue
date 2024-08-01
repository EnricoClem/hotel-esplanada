<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<template>

  <AppHeader></AppHeader>
  <RouterView />
  <AppFooter></AppFooter>

</template>

<style lang="scss">
@use '../style/general.scss';
</style>
