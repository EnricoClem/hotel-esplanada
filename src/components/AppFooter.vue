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
    <footer :class="headerClass">
        <div class="footer-container">
            <div class="row align">
                <!-- TITLE -->
                <div class="col-3">
                    <h3>Grand Hotel Esplanada</h3>
                    <p class="caption">© Copyright  2021 Grand Hotel Esplanada. All rights reserved.</p>
                </div>
                <!-- CONTACT INFO -->
                <div class="col-6 row-col gap-xsm">
                    <p class="caption text-center">Via delle Dune 6 - 30020 Bibione Pineda VE Italy</p>
                    <p class="text-center gap-md row justify-center">
                        <a href="mailto:info@esplanada.it">info@esplanada.it</a>
                        <a href="mailto:info@hotelesplanada.it">info@hotelesplanada.it</a>
                    </p>
                    <p class="caption text-center gap-md row justify-center">
                        <a href="tel:+39 043143260">+39 043143260</a>
                        <a href="tel:+39 0431430831">+39 0431430831</a> 
                        <a href="tel:+39 0432430832">+39 0432430832 (fax)</a> 
                    </p>
                </div>
                <!-- SOCIAL BUTTONS -->
                <div class="col-3 row justify-end gap-md align">
                    <a href="https://wa.me/+393514454589" class="wtsp-btn row gap-sm hover-container-wtsp">
                        <p class="caption">Scrivici direttamente <br> su WhatsApp</p>
                        <img class="social-foot" src="../assets/WTSP-logo-1.svg" />
                        <img class="social-foot-hover" src="../assets/WTSP-logo-2.svg" />
                    </a>
                    <a href="https://www.facebook.com/grandhotelesplanada" class="hover-container">
                        <img class="social-foot" src="../assets/FB-logo-1.svg" />
                        <img class="social-foot-hover" src="../assets/FB-logo-2.svg" />
                    </a>
                    <a href="https://www.instagram.com/grandhotelesplanada/?utm_medium=copy_link" class="hover-container">
                        <img class="social-foot" src="../assets/INST-logo-1.svg" />
                        <img class="social-foot-hover" src="../assets/INST-logo-2.svg" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables';

.footer-container {
    background-color: variables.$color-b;
    width: 100%;
    padding: 20px 40px;
    color: variables.$color-g;
    height: 108px;
}

.social-foot {
    filter: brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(1%) hue-rotate(314deg) brightness(97%) contrast(85%);
    width: 30px;
    position: absolute;
}

.social-foot-hover {
    display: none;
    position: absolute;
    width: 30px;
    filter: brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(1%) hue-rotate(314deg) brightness(97%) contrast(85%);
}

.wtsp-btn {
    padding: 8px 50px 8px 8px;
    border: solid 1px variables.$color-g;
}

.wtsp-btn .social-foot {
    width: 25px;
    left: 120px;
    top: 12.5px;
}

.wtsp-btn .social-foot-hover {
    width: 25px;
    left: 120px;
    top: 12.5px;
}

.hover-container {
    position: relative;
    width: 30px;
    height: 30px;
}

.hover-container:hover .social-foot-hover {
    display: block;
}

.hover-container:hover .social-foot {
    display: none;
}

.hover-container-wtsp {
    position: relative;
}

.hover-container-wtsp:hover .social-foot-hover {
    display: block;
}

.hover-container-wtsp:hover .social-foot {
    display: none;
}

// HOME RULE

.home-adaptation footer {
    position: relative;
}

.home-adaptation .footer-container {
    background-color: variables.$color-shade;
    width: 100%;
    color: variables.$color-w;
    position: absolute;
    bottom: 0px;
}

.home-adaptation .social-foot {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

.home-adaptation .social-foot-hover {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

</style>