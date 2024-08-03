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
    
        <div>
            <h1>Info</h1>
        </div>

    </div>

</template>

<style lang="scss">
@use '../style/general.scss';
</style>