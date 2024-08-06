<script>
export default {
    mounted() {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        parallaxInstance.friction(0.2, 0.2);
    }
}
</script>

<template>
    <section class="parallax-background" id="scene">

        <img class="layer" data-depth="-0.1" src="../assets/background-layer-2.png" alt="">
        <img class="layer" data-depth="-0.3" src="../assets/background-layer-3.png" alt="">
        <img class="layer" data-depth="-0.5" src="../assets/background-layer-4.png" alt="">

    </section>
</template>

<style lang="scss">
@use '../style/general.scss';

.parallax-background {
    background-image: url('../assets/background-layer-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 130%;
    height: 150%;
    margin-left: -15%;
    margin-top: -15%;
    position: absolute;
    z-index: -999;
    overflow: visible;
    display: flex;
}

.layer {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.home-adaptation .parallax-background {
    display: none;
}

</style>