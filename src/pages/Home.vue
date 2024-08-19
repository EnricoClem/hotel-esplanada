<script>
import LogoAnimation from '../components/LogoAnimation.vue';
export default {
    components: {
        LogoAnimation
    }
}
</script>

<template>
    <main>
        <div class="home-container align">

            <div class="home-logo row-col align justify-center">
                
                <LogoAnimation />
    
                <img src="../assets/espl-LOGO-03.svg" alt="" class="home-logo-text">

            </div>


        </div>
    </main>
</template>

<style lang="scss">

.home-container {
    background-image: url(../assets/FONDALE_hompage.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
}

.home-logo {
    width: 30%;
    margin: auto;
}

.home-logo-text {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

</style>