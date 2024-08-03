<script>
import AppBackground from '../components/AppBackground.vue'

export default {
    components: {
    AppBackground,
  }
}
</script>

<template>

    <div class="app-container">
        
        <AppBackground></AppBackground>
    
        <section>
            <div class="rooms-container row gap-md">
                <h1 class="title">Le camere</h1>

            </div>
        </section>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables.scss';

.rooms-container {
    padding: 50px;
    color: variables.$color-w;
}

</style>