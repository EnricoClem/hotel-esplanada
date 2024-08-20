<script>
export default {
}
</script>

<template>

    <div class="app-container welcom-scroll">
            
        <section>
            <div class="row welcome-phone">
                <div class="col-6 text-welcome gap-md row-col">
                    <h1 class="title">{{ $t("welcome-page") }}</h1>
                    <div class="row-col gap-sm">
                        <p class="paragraph">{{ $t("welcome-text-1") }}</p>
                        <p class="paragraph">{{ $t("welcome-text-2") }}</p>
                        <p class="paragraph">{{ $t("welcome-text-3") }}</p>
                    </div>
                </div>
                <div class="col-6 img-welcome">
                    <img src="../assets/img-welcome.jpg" alt="">
                </div>
            </div>
        </section>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables';

.img-welcome {
    height: calc(100vh - 208px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-welcome img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.text-welcome {
    padding: 50px;
    color: variables.$color-w;
}

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .welcome-phone {
        flex-direction: column;
    }

    .app-container.welcom-scroll {
        overflow: auto;
    }

    .welcome-phone .col-6 {
        width: 100%;
    }

    .img-welcome {
        height: 480px;
    }

}

</style>