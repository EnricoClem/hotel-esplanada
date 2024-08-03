<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppBackground from './components/AppBackground.vue'
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { computed } from "vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppBackground,
  },
  setup() {
    const route = useRoute();

    const containerApp = computed(() => {
      const path = route.path;
      if (path === "/") {
        return "";
      } else {
        return "app-container";
      }
    });
    return { containerApp };
  },
}

</script>

<template>

  <AppHeader></AppHeader>
  <div :class="containerApp">
    <AppBackground></AppBackground>
    <RouterView />
  </div>
  <AppFooter></AppFooter>

</template>

<style lang="scss">
@use '../style/general.scss';
</style>
