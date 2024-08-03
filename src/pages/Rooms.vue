<script>
export default {
}
</script>

<template>

    <div class="app-container">
            
        <section>
            <div class="row between">
                <div class="rooms-container row gap-md">
                    <h1 class="title">Le camere</h1>
    
                </div>
                <div class="img-rooms-layout">
                    <img src="../assets/img-rooms-layout.png" alt="">
                </div>                
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

.img-rooms-layout {
    height: calc(100vh - 208px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-rooms-layout img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

</style>