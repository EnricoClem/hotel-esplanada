<script>
export default {
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
        Reference: "sbConvertoOnly",
        Converto: {
          InPageContainerId: "sb-converto-container",
          FormName: "RichiestaPreventivoDaSitoWeb", // ***IMPORTANTE!***
          Styles: {
            Theme: "dark",
            CustomBGColor: "#aaaaaa00", // Sfondo principale
            CustomBodyBGColor: "#aaaaaa00", // Corpo
            CustomLabelColor: "#1a1a1a", // Etichette
            CustomWidgetColor: "#1a1a1a", // Testo widget
            CustomFieldBackgroundColor: "#1a1a1a", // Sfondo campi
            CustomButtonColor: "#ffffff", // Testo pulsante
            CustomButtonBGColor: "#1a1a1a", // Sfondo pulsante
            CustomLinkColor: "#1a1a1a", // Colore link
            CustomIconColor: "#1a1a1a", // Colore icone
            CustomBorderColor: "#d7a40a", // Colore bordo campi
            CustomIntentSelectionColor: "1a1a1a", // Nuovo colore per classi date
            CustomButtonHoverBGColor: "#9d7600", // Hover pulsante
            CustomLinkHoverColor: "#9d7600", // Hover link
            CustomButtonHoverBGColor: "#9d7600", // Hover pulsante
          }
        }
      });
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      this.initSimpleBooking();
    }
  }
}
</script>


<template>

    <div class="app-container welcom-scroll">
            
        <section class="quote-container-overflow">
            <div >
                <div class="col-12 quote-title-container gap-md row-col">
                    <h1 class="title">{{ $t("request-quote") }}</h1>
                </div>
            </div>
            <div class="quote-form-container scrollable-content">
                <div id="sb-converto-container"></div>
            </div>
        </section>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables';

.quote-container-overflow {
    height: calc(100vh - 208px);
    overflow: auto;
    flex-wrap: nowrap;
}

.quote-title-container {
    color: variables.$color-w;
    padding: 50px 50px 20px 50px;
}

.quote-container {
    padding: 0 40px 50px 40px;
}

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .quote-container-overflow {
        height: calc(100vh - 100px);
    }

}

</style>