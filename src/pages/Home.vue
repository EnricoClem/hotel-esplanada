<script>
export default {
    
}
</script>

<template>
    <main>
        <div class="home-container between align">
            <img src="../assets/espl-LOGO-02.svg" alt="" class="home-logo">
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
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
}

</style>