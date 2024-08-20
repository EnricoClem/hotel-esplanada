<script>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { computed, ref } from "vue";

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

    const isMenuVisible = ref(false);

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    };

    return { headerClass, isActive, isMenuVisible, toggleMenu };
  },
}
</script>

<template>
    <header :class="headerClass">
        <div class="header-container">
            <!-- BURGER BUTTON -->
            <div class="burger-btn justify-center" @click="toggleMenu">
                <img class="header-logo" src="../assets/espl-LOGO-01.svg" />
            </div>
            <nav class="header-navbar row between align"
            :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
            :class="{ visible: isMenuVisible }">
                <!-- LOGO + home button -->
                <div class="logo-home-btn">
                    <RouterLink to="/">
                        <img class="header-logo" src="../assets/espl-LOGO-01.svg" />
                    </RouterLink>
                </div>
                <!-- NAVIGATION BAR -->
                <div class="menu-list row gap-lg">
                    <RouterLink to="/" class="route-btn home-navbar-btn align" @click="toggleMenu">
                        <p>HOME</p>
                        <div :class="isActive('/')"></div>
                    </RouterLink>
                    <RouterLink to="/welcome" class="route-btn align" @click="toggleMenu">
                        <p>{{ $t('welcome') }}</p>
                        <div :class="isActive('/welcome')"></div>
                    </RouterLink>
                    <a class="route-btn align" href="https://be.bookingexpert.it/book/simple/step1?hotel=15184&lang=it&nsid=4dfd743e-a1b8-4634-96fc-e5993c294fe0">
                        <p>{{ $t('booking') }}</p>
                        <div class="underline"></div>
                    </a>
                    <RouterLink to="/rooms" class="route-btn align" @click="toggleMenu">
                        <p>{{ $t('room') }}</p>
                        <div :class="isActive('/rooms')"></div>
                    </RouterLink>
                    <RouterLink to="/services" class="route-btn align" @click="toggleMenu">
                        <p>{{ $t('service') }}</p>
                        <div :class="isActive('/services')"></div>
                    </RouterLink>
                    <RouterLink to="/info" class="route-btn align" @click="toggleMenu">
                        <p>{{ $t('info') }}</p>
                        <div :class="isActive('/info')"></div>
                    </RouterLink>
                </div>
                <!-- LANGUAGE SELECTION -->
                <div class="locale-changer">
                    <select v-model="$i18n.locale" class="lang-selection">
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

.home-navbar-btn {
    display: none;
}

.route-btn {
    font-size: 20px;
    display: flex;
    flex-direction: column;
}

.lang-selection {
    color: variables.$color-b;
    border-radius: none;
    border: solid 1px variables.$color-b;
    background-color: rgba(0, 0, 0, 0);
    padding: 2px 0px 2px 5px;
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

.home-adaptation .lang-selection {
    color: variables.$color-w;
    border: solid 1px variables.$color-w;
    background-color: rgba(0, 0, 0, 0);
}

.burger-btn {
    display: none;
}

.logo-home-btn {
    display: block;
}

.home-navbar-btn {
    display: none;
}

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .burger-btn {
        display: flex;
    }

    .logo-home-btn {
        display: none;
    }

    .header-navbar {
        flex-direction: column;
        display: none;
    }

    .home-adaptation .home-navbar-btn {
        display: none;
    }

    .home-navbar-btn {
        display: flex;
    }
    
    .header-navbar {
        transition: max-height 1s ease-in-out;
        overflow: hidden;
        max-height: 0;
        position: relative;
        z-index: 999;
        &.visible {
            display: flex;
            max-height: 600px;
            background-color: variables.$color-w;
            padding: 60px;
            margin-top: 60px;
            gap: 40px;
        }
    }

    .home-adaptation .header-navbar {
            &.visible {
                background-color: variables.$color-b;
            }
    }
    
    .menu-list {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .route-btn {
        width: fit-content;
    }

}

</style>