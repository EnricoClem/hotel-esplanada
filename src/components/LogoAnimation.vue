<script lang="ts">
import { defineComponent } from 'vue';
import { Rive } from '@rive-app/canvas';
import waveLogo from '/assets/wave-logo.riv';

export default defineComponent({
    name: 'RiveComponent',
    mounted() {
        new Rive({
            canvas: this.$refs.canvas,
            src: waveLogo,
            autoplay: true
        });
    }
});
</script>

<template>
    <div>
        <canvas ref="canvas" width="300" height="300"></canvas>
    </div>
</template>

<style lang="scss">

</style>