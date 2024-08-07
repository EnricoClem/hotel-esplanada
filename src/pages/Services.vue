<script>
import { store } from '../store.js'
import CardService from '../components/CardService.vue';

  export default {
    components: {
        CardService
    },
    data() {
        return {
            store: store,
        }
    },
  };
</script>

<template>

    <div class="app-container">
            
        <div class="service-container-overflow row-col">
            <h1 class="service-title-container title">{{ $t("service-page") }}</h1>
            <ul class="service-container row">
                <CardService v-for="service in store.allServices" :key="service.id" :item="service"/>
            </ul>
        </div>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables.scss';

.service-container-overflow {
    height: calc(100vh - 208px);
    overflow: auto;
    flex-wrap: nowrap;
}

.service-title-container {
    color: variables.$color-w;
    padding: 50px 50px 20px 50px;
}

.service-container {
    padding: 0 40px 50px 40px;
}

</style>