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
                
                <!-- <LogoAnimation /> -->
                <img src="../assets/espl-LOGO-01.svg" alt="" class="home-logo-icon">
    
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
    background-position: center;
    height: 100vh;
    display: flex;
}

.home-logo {
    width: 30%;
    margin: auto;
}

.home-logo-icon {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
    width: 60%;
}

.home-logo-text {
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .home-logo {
        width: 100%;
        margin-top: 50%;
    }

    .home-logo img {
        width: 50%;
    }

}

</style>