<script>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { computed } from "vue";

export default {
    setup() {
    const route = useRoute();

    const headerClass = computed(() => {
      const path = route.path;
      if (path === "/") {
        return "home-adaptation";
      } else {
        return "not-home";
      }
    });

    const isActive = (linkPath) => {
      return route.path === linkPath ? 'underline-current-page' : 'underline';
    };

    return { headerClass, isActive };
  },
}
</script>

<template>
    <header :class="headerClass">
        <div class="header-container">
            <nav class="row between align" :dir="$i18n.locale == 'ar'?'rtl':'ltr'">
                <!-- LOGO + home button -->
                <div>
                    <RouterLink to="/">
                        <img class="header-logo" src="../assets/espl-LOGO-01.svg" />
                    </RouterLink>
                </div>
                <!-- NAVIGATION BAR -->
                <div class="row gap-lg">
                    <RouterLink to="/welcome" class="route-btn align">
                        <p>{{ $t('welcome') }}</p>
                        <div :class="isActive('/welcome')"></div>
                    </RouterLink>
                    <a class="route-btn align" href="https://be.bookingexpert.it/book/simple/step1?hotel=15184&lang=it&nsid=4dfd743e-a1b8-4634-96fc-e5993c294fe0">
                        <p>{{ $t('booking') }}</p>
                        <div class="underline"></div>
                    </a>
                    <RouterLink to="/rooms" class="route-btn align">
                        <p>{{ $t('room') }}</p>
                        <div :class="isActive('/rooms')"></div>
                    </RouterLink>
                    <RouterLink to="/services" class="route-btn align">
                        <p>{{ $t('service') }}</p>
                        <div :class="isActive('/services')"></div>
                    </RouterLink>
                    <RouterLink to="/info" class="route-btn align">
                        <p>{{ $t('info') }}</p>
                        <div :class="isActive('/info')"></div>
                    </RouterLink>
                </div>
                <!-- LANGUAGE SELECTION -->
                <div class="locale-changer">
                    <select v-model="$i18n.locale">
                    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                    </select>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables';


.header-container {
    width: 100%;
    background-color: variables.$color-w;
    padding: 20px 40px;
    height: 100px;
    z-index: 999;
    color: variables.$color-b;
}

.header-logo {
    filter: variables.$filter-b;
    height: 60px;
}

.route-btn {
    font-size: 20px;
    display: flex;
    flex-direction: column;
}

// UNDERLINE ANIMATION

.underline-current-page {
    height: 4px;
    width: 100%;
    background: variables.$color-brand;
}

.underline {
    height: 4px;
    width: 0%;
    transition: width 0.5s;
    background: variables.$color-brand;
}

.route-btn:hover .underline {
    width: 100%;
}

// HOME RULES

.home-adaptation header {
    position: relative;
}

.home-adaptation .header-container {
    background-color: rgba(255, 255, 255, 0);
    border-bottom: solid 1px variables.$color-w;
    position: absolute;
}

.home-adaptation .route-btn {
    color: variables.$color-w;
}

.home-adaptation .header-logo {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

</style>