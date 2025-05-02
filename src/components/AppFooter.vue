<script>
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { computed, ref, onMounted } from "vue";

export default {
  components: {
    RouterLink
  },
  setup() {
    const route = useRoute();
    const requestQuoteUrl = ref('/request-quote');
    const widgetKey = ref(0);

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

    const isRequestQuotePage = computed(() => {
      return route.path === '/request-quote';
    });

    return { headerClass, isActive, requestQuoteUrl, isRequestQuotePage };
  },
  data() {
    return {
      language: this.$t("widget-lang"),
      requestQuoteText: this.$t('request-quote')
    };
  },
  mounted() {
    this.initSimpleBooking();
  },
  methods: {
    initSimpleBooking() {
      const currentLanguage = this.$t("widget-lang");
      (function (i, s, o, g, r, a, m) {
        i['SBSyncroBoxParam'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        },
          i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://cdn.simplebooking.it/search-box-script.axd?IDA=10557', 'SBSyncroBox');

      SBSyncroBox({
        CodLang: currentLanguage,
        Reference: "sbSyncroBox",
        Styles: {
          FontFamily: 'Jost, Helvetica, sans-serif',
          Theme: "dark",
          CustomBGColor: "#1a1a1a",
          CustomBodyBGColor: "#d7a40a",
          CustomLabelColor: "d7a40a",
          CustomWidgetColor: "#d7a40a",
          CustomFieldBackgroundColor: "#1a1a1a",
          CustomButtonColor: "#ffffff",
          CustomButtonBGColor: "#ca9a22",
          CustomLinkColor: "#d7a40a",
          CustomIconColor: "#d7a40a",
          CustomBorderColor: "#d7a40a",
          CustomIntentSelectionColor: "1a1a1a",
          CustomButtonHoverBGColor: "#9d7600",
          CustomLinkHoverColor: "#9d7600",
          CustomButtonHoverBGColor: "#9d7600",
        }
      });
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.initSimpleBooking();
        this.requestQuoteText = this.$t('request-quote');
    },
    'isRequestQuotePage'(newVal) {
      if (!newVal) {
        // Forza il re-rendering quando si esce dalla pagina del preventivo
        this.initSimpleBooking();
        //this.widgetKey++; // Incrementa la chiave per forzare il re-rendering
      }
    }
  }
}
</script>

<style scoped>
/* Stili per il link "Richiedi Preventivo" */
.request-quote-link {
  margin: 10px auto;
  display: inline-block;
  background-color: #1a1a1a;
  border: 1px white solid;
  color: #ffffff; /* Assicurati che il testo sia leggibile */
  padding: 10px 20px;
  text-decoration: none; /* Rimuovi la sottolineatura predefinita */
  border-radius: 5px; /* Bordi arrotondati */
}

.request-quote-link:hover {
    background-color: #333; /* Cambia il colore al passaggio del mouse */
    color: #ddd;
}
</style>

<template>
    <footer :class="headerClass">
        <div class="footer-container">
            <div class="row align footer-phone">
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
                        <p class="caption">{{ $t("whatsapp-1") }}<br>{{ $t("whatsapp-2") }}</p>
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

    <div class="footer-widget">
        <div id="sb-container" v-if="!isRequestQuotePage"></div>
        <RouterLink v-if="!isRequestQuotePage" to="request-quote" class="request-quote-link">
            {{ requestQuoteText }}
        </RouterLink>
    </div>

</template>

<style lang="scss" scoped>

@use '../style/partials/variables';

.footer-widget {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  z-index: 100;
  background-color: #1a1a1a;
}

.request-quote-link {
  margin: 10px auto;
  display: inline-block;
  background-color: #1a1a1a;
  border: none;
  border: 0.5px solid #ffffff;
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.request-quote-link:hover {
    background-color: #9d7600;
    border: 0.5px solid #9d7600;
    color: #ddd;
    transition: 0.2s;
}

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
    right: 12.5px;
    top: 12.5px;
}

.wtsp-btn .social-foot-hover {
    width: 25px;
    right: 12.5px;
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

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .footer-container {
        padding: 16px 25px;
        height: 100%;
        // più 32px su smarthphone
    }

    .footer-container .col-6 {
        width: 100%;
    }

    .footer-container .col-3 {
        width: 100%;
    }

    .footer-phone {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 10px;
    }

    .footer-container .justify-end {
        justify-content: center;
    }

    .home-adaptation footer {
        position: relative;
    }

    .home-adaptation .footer-container {
        height: fit-content;
    }

    footer .caption {
        font-size: 8px;
    }

    .social-foot {
        width: 20px;
        right: 0px;
    }

    .social-foot-hover {
        width: 20px;
    }

    .wtsp-btn {
        padding: 5px 35px 5px 5px;
    }

    .wtsp-btn .social-foot {
        width: 18px;
        right: 8px;
        top: 7.5px;
    }

    .wtsp-btn .social-foot-hover {
        width: 18px;
        right: 8px;
        top: 7.5px;
    }

    .hover-container {
        width: 20px;
        height: 20px;
    }

}

</style>